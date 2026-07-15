from langgraph import Agent, Tool
import requests

def call_llm(prompt):
    url = "https://api.groq.com/v1/chat/completions"
    headers = {"Authorization": "Bearer YOUR_API_KEY"}
    payload = {"model": "gemma2-9b-it", "messages": [{"role":"user","content":prompt}]}
    res = requests.post(url, json=payload, headers=headers)
    return res.json()["choices"][0]["message"]["content"]

def log_interaction_tool(text):
    return call_llm(f"Extract structured HCP interaction details: {text}")

def edit_interaction_tool(interaction_id, new_text):
    return {"id": interaction_id, "updated": call_llm(f"Update interaction: {new_text}")}

tools = [
    Tool(name="Log Interaction", func=log_interaction_tool),
    Tool(name="Edit Interaction", func=edit_interaction_tool),
    Tool(name="Interaction Summary", func=lambda x: call_llm(f"Summarize: {x}")),
    Tool(name="HCP Insights", func=lambda x: call_llm(f"Insights: {x}")),
    Tool(name="Compliance Check", func=lambda x: call_llm(f"Check compliance: {x}"))
]

agent = Agent(tools=tools)

