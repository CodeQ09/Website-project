import { useMemo } from "react";
import axios from "axios";
import { useUser, useSnackbar } from "../hooks/useContext";

const BASE_URL = "http://localhost:3000/auth";

const useAuthService = () => {
  const { login, logout } = useUser();
  const { showMessage } = useSnackbar();

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });

  const authService = useMemo(
    () => ({
      signIn: () => {
        const loginWindow = window.open(
          `${BASE_URL}/login`,
          "_blank",
          "width=800,height=600"
        );

        showMessage("Sign in initiated", "info");

        if (loginWindow) {
          const timer = setInterval(async () => {
            if (loginWindow.closed) {
              clearInterval(timer);
              try {
                const profileResponse = await axiosInstance.get(
                  `${BASE_URL}/profile`
                );
                if (profileResponse.status === 200) {
                  loginWindow.close();
                  login(profileResponse.data);
                  showMessage(
                    "Signed in and profile fetched successfully",
                    "success"
                  );
                }
              } catch (error) {
                showMessage("Failed to fetch profile after sign-in", "error");
                console.error("Error fetching profile after sign-in", error);
              }
            }
          }, 500);
        } else {
          showMessage("Failed to open login window", "error");
        }
      },

      signOut: async () => {
        try {
          await axiosInstance.get(`${BASE_URL}/logout`);
          logout();
          showMessage("Logged out successfully", "success");
        } catch (error) {
          console.error("Error signing out", error);
          showMessage("Logout failed", "error");
        }
      },

      fetchProfile: async () => {
        try {
          const response = await axiosInstance.get(`${BASE_URL}/profile`);
          login(response.data);
          console.log("Profile fetched successfully", response.data);
          showMessage("Profile fetched successfully", "success");
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            if (error.response) {
              console.error("Error fetching profile", error.response.data);
              showMessage(
                `Error fetching profile: ${error.response.data.message}`,
                "error"
              );
            } else if (error.request) {
              console.error(
                "Error fetching profile, no response:",
                error.request
              );
              showMessage(
                "Error fetching profile, server did not respond",
                "error"
              );
            } else {
              console.error("Error setting up profile request:", error.message);
              showMessage("Error fetching profile", "error");
            }
          } else {
            console.error("Unexpected error:", error);
            showMessage("An unexpected error occurred", "error");
          }
        }
      },
    }),
    [login, logout, showMessage, axiosInstance]
  );

  return authService;
};

export default useAuthService;
