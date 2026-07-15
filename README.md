# HCP CRM Backend

This is the backend service for the **AI-First CRM for Healthcare Professionals (HCPs)**.  
It is built with **FastAPI**, **LangGraph**, and integrates with **Groq LLM** for intelligent interaction logging, summarization, and compliance checks.

---

## 🚀 Features
- FastAPI REST API with endpoints for:
  - `/ai/log_interaction` → Log structured HCP interactions
  - `/ai/edit_interaction` → Edit existing interactions
  - `/ping` → Health check
- LangGraph agent with tools for:
  - Logging interactions
  - Editing interactions
  - Summarizing conversations
  - Generating HCP insights
  - Compliance checks
- PostgreSQL database with SQLAlchemy models
- Modular project structure for scalability

---

## 📂 Project Structure
backend/
│── app/
│   ├── init.py
│   ├── main.py
│   ├── langgraph_agent.py
│   ├── database.py
│   ├── models.py
│── requirements.txt
│── README.md

---

## 🛠 Setup

### 1. Create Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate   # Windows
2. Install Dependencies
pip install -r requirements.txt
3. Database Setup
Update DATABASE_URL in app/database.py:
DATABASE_URL = "postgresql://user:password@localhost/hcpcrm"
Run migrations:
python
>>> from app.database import Base, engine
>>> from app.models import Interaction
>>> Base.metadata.create_all(bind=engine)
4. Run Server
uvicorn app.main:app --reload
Visit:

http://127.0.0.1:8000/ping → Health check

http://127.0.0.1:8000/docs → Interactive API docs
Environment Variables
Create a .env file:
ROQ_API_KEY=your_api_key_here
DATABASE_URL=postgresql://user:password@localhost/hcpcrm
