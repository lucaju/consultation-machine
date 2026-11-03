declare namespace NodeJS {
  export interface ProcessEnv {
    OPEN_ROUTER_API_KEY: string;
    LLM_PROVIDER?: 'openrouter' | 'ollama';
    OPEN_ROUTER_MODEL?: string;
  }
}
