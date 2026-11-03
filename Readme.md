# What do you need to run this project

- NodeJS: https://nodejs.org/en
- An [OpenRouter](https://openrouter.ai/) API key (default LLM provider)
- The code in this repo
- Optional: Ollama and the Llama 3.1 8B model if you want to run locally instead of OpenRouter

1. Install NodeJS
   Download and install NodeJS from its website: https://nodejs.org/en

2. Install this project
   Clone or download this repo to your computer.

   On the terminal, navigate to the folder where the code is located.
   Install dependencies: `pnpm install`

3. Configure environment
   Create a `.env.local` file with:

   ```
   OPEN_ROUTER_API_KEY=your_openrouter_api_key
   LLM_PROVIDER=openrouter
   ```

   `LLM_PROVIDER` defaults to `openrouter` when unset. Optional: set `OPEN_ROUTER_MODEL` to override the default model (`meta-llama/llama-3.1-8b-instruct`).

4. Build and run
   Build the code: `pnpm build`
   Run it: `pnpm start`

   For development: `pnpm dev`

   The project will be available at http://localhost:3000

## Optional: use Ollama locally

1. Install Ollama from https://ollama.com/ and start the app.
2. Pull the model: `ollama run llama3.1:8b`
3. In `.env.local`, set:

   ```
   LLM_PROVIDER=ollama
   ```
