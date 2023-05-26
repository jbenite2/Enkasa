# Enkasa

## Getting started with NextJS

1. Initialize a git repository in Git Hub
2. Make a local copy of the repo
    ```bash
        git clone https://github.com/jbenite2/Introspect
    ```
3. Install next, react and react-dom in your project folder:
    ```bash
     npm install next react react-dom
    ```
4. Create a Next Project
    ```bash
        npx create-next-app@latest .
    ```
5. Open package.json and add the following
    ```json
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
    }
    ```
6. Download dependencies
    ```bash
     npm install
    ```
7. Start development server
    ```bash
     npm run dev
    ```