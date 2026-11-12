# TripMate-AI-----A-multiagent-travel-palnner-using-Langraph

# TripMate AI – Multi-Agent Travel Planner

An AI-powered multi-agent travel planning application built using Python, LangChain, LangGraph, and MCP.

## 1. Project Overview

TripMate AI aims to build an intelligent travel planner using multiple specialized AI agents that collaborate to generate personalized travel plans.

*Project Status: Initial Setup and Development*

## 2. Technology Stack

- Python 3.12
- LangChain
- LangGraph
- MCP (Model Context Protocol)
- LLM APIs
- Vector Databases
- External Search APIs

## 3. Development Environment Setup

### Step 1: Install Python

Install Python 3.12 and verify the installation:

```bash
python3 --version
```

### Step 2: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project directory:

```bash
cd YOUR_PROJECT_DIRECTORY
```

### Step 3: Create a Virtual Environment

Create an isolated Python environment:

```bash
python3 -m venv .venv
```

### Step 4: Activate the Virtual Environment

For macOS/Linux:

```bash
source .venv/bin/activate
```

For Windows:

```bash
.venv\Scripts\activate
```

After activation, `(.venv)` should appear in the terminal.

### Step 5: Upgrade pip

```bash
python -m pip install --upgrade pip
```

### Step 6: Create requirements.txt

```bash
touch requirements.txt
```

Add the required project dependencies to this file as development progresses.

### Step 7: Install Dependencies

Once requirements.txt contains the project dependencies, install them using:

```bash
pip install -r requirements.txt
```

### Step 8: Verify Python

```bash
python --version
which python
```

The Python executable should point to the project's `.venv` directory.

## 4. Deactivate Virtual Environment

To exit the virtual environment:

```bash
deactivate
```

To activate it again:

```bash
source .venv/bin/activate
```

## 5. Git Configuration

Check repository status:

```bash
git status
```

Add and commit changes:

```bash
git add .
git commit -m "Initial project setup"
git push
```

## 6. Project Structure

```text
TripMate-AI/
│
├── .venv/
├── requirements.txt
├── README.md
├── .gitignore
├── .env
├── src/
└── tests/
```

## 7. Security

- Store API keys in environment variables.
- Never commit `.env` files.
- Never commit virtual environment folders.
- Add `.venv/` and `.env` to `.gitignore`.

## 8. Future Development

- Implement specialized AI agents.
- Build multi-agent orchestration using LangGraph.
- Integrate MCP tools.
- Implement travel search and recommendation capabilities.
- Generate personalized travel itineraries.





# TripMate AI – Multi-Agent Travel Planner

## Tech Stack
- Python 3.12.16
- LangGraph
- LangChain
- Groq
- Tavily
- FastAPI
- PostgreSQL

## Environment Setup

### 1. Clone repository
git clone <repository-url>

### 2. Create virtual environment
python3 -m venv .venv

### 3. Activate virtual environment
source .venv/bin/activate

### 4. Upgrade pip
python -m pip install --upgrade pip

### 5. Install dependencies
python -m pip install -r requirements.txt

### 6. Save exact installed versions
pip freeze > requirements-lock.txt


postgresql://ekhafau:99xYeVTWolIRLeSD8QImuPeLBO0hNDfb@dpg-dbqm58bbc2fs73dq4bc0-a.oregon-postgres.render.com/agentmemory_f742