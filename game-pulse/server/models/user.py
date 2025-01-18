from sqlalchemy import Column, String, Integer
from core.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    favorite_team = Column(String, nullable=True)  # Nullable for unselected teams
