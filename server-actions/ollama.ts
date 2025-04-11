'use server';

import ollama from 'ollama';

interface Options {
  model?: string;
}

// export const fetchOllama = async (prompt: string, { model = 'deepseek-r1:1.5b' }: Options = {}) => {
export const fetchOllama = async (prompt: string, { model = 'llama3.1' }: Options = {}) => {
  const response = await ollama.chat({
    model,
    messages: [{ role: 'user', content: prompt }],
  });

  const content = response.message.content;

  return {
    response,
    content,
  };
};
