# What do you need to run this project

- A computer with at least 16Gb ram.
- Ollama (and the Llama 3.1 8B model): https://ollama.com/library/llama3.1:8b
- NodeJS: https://nodejs.org/en
- The code in this repo

1. Install Ollama
Navigate to https://ollama.com/ , download and install the app.
Start Ollama after install.

2. Install LLM 
This project uses Llamma 3.1 8B: https://ollama.com/library/llama3.1
On the terminal on your computer (and with Ollama running), type `ollama run llama3.1:8b` to download and install it.

3. Install NodeJS
Download and install NodeJS from its website: https://nodejs.org/en

4. Install this project
Clone or download this branch (use-ollama) to your computer:
https://github.com/lucaju/consultation-machine/tree/use-ollama

On the termina, navigate to the folder where the code is located.
Install dependencies: `npm install`
Build the code: `npm run build`
Run it: `npm start`

The project will be availale at http://localhost:3000