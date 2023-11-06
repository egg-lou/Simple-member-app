from fastapi import FastAPI
from typing import List
import json
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

with open('data.json', 'r') as file:
    data = json.load(file)

@app.get("/members", response_model=List[dict])
async def get_members():
    return data

@app.get("/member/{id}", response_model=dict)
async def get_member(id:str):
    member = next((item for item in data if item["id"] == id), None)
    if member:
        return member
    else:
        return {"error":"Member Not Found"}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)