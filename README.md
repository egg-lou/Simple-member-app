# Simple Members App

This is a simple members app that can serve as a base for you to work with

| Technology | Use |
|------------|-----|
|React + Vite + TypeScript|Frontend|
|FastAPI + Uvicorn|Backend|



Instructions API

```bash
cd api

python -m venv .venv
source .venv/bin/activate

pip install -r requirements.txt

uvicorn app:app --reload
```

Instructions APP

```bash
cd app

npm install or yarn install or pnpm install
npm run dev or yarn dev or pnpm dev
```

To change data:
Go to data.json inside api and change the contents of the json file