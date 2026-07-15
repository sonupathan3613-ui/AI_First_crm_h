from fastapi import FastAPI
import langgraph_agent

app = FastAPI()
@app.post("/ai/log_interaction")
def log_interaction(data: dict):
    return langgraph_agent.agent.run("Log Interaction", data["text"])

@app.post("/ai/edit_interaction")
def edit_interaction(data: dict):
    return langgraph_agent.agent.run("Edit Interaction", (data["id"], data["text"]))  
@app.get("/app")
def display():
    return 'happy'
