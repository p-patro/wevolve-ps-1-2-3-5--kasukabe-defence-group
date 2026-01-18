"""
Database Configuration for Wevolve
SQLite for development (easily migratable to PostgreSQL)
"""
import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from ..config import settings
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./database.db")

connect_args = {}
if DATABASE_URL.startswith("sqlite"):
    connect_args = {"check_same_thread": False}

engine = create_engine(DATABASE_URL, connect_args=connect_args)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    """
    FastAPI dependency that provides a database session.
    Ensures cleanup after each request.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def init_db():
    """Initialize database by creating all tables."""
    Base.metadata.create_all(bind=engine)
