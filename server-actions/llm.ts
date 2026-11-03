'use server';

import { fetchOllama } from './ollama';
import { fetchOpenRouter } from './openrouter';

type LlmProvider = 'openrouter' | 'ollama';

const resolveProvider = (): LlmProvider => {
  const provider = process.env.LLM_PROVIDER ?? 'openrouter';

  if (provider === 'openrouter' || provider === 'ollama') {
    return provider;
  }

  throw new Error(`Unsupported LLM_PROVIDER: ${provider}`);
};

export const fetchLlm = async (prompt: string) => {
  const provider = resolveProvider();

  switch (provider) {
    case 'openrouter':
      return fetchOpenRouter(prompt);
    case 'ollama':
      return fetchOllama(prompt);
    default: {
      const _exhaustive: never = provider;
      throw new Error(`Unhandled LLM provider: ${_exhaustive}`);
    }
  }
};
