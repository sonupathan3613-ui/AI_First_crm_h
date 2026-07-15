from database import Base
from sqlalchemy import Column, Integer, String, Text, TIMESTAMP

class Interaction(Base):
    __tablename__ = "interactions"
    id = Column(Integer, primary_key=True, index=True)
    hcp_name = Column(String(100))
    specialty = Column(String(100))
    interaction_type = Column(String(50))
    interaction_date = Column(TIMESTAMP)
    notes = Column(Text)