'use server';

import { OpenRouter } from '@openrouter/sdk';

const openrouter = new OpenRouter({
  apiKey: process.env.OPEN_ROUTER_API_KEY,
  appTitle: 'Consultation Machine',
});

interface Options {
  model?: string;
}

export const fetchOpenRouter = async (
  prompt: string,
  { model = process.env.OPEN_ROUTER_MODEL ?? 'meta-llama/llama-3.1-8b-instruct' }: Options = {},
) => {
  const response = await openrouter.chat.send({
    chatRequest: {
      model,
      messages: [{ role: 'user', content: prompt }],
      stream: false,
    },
  });

  const rawContent = response.choices[0]?.message.content;
  const content = typeof rawContent === 'string' ? rawContent : '';

  return {
    response: JSON.parse(JSON.stringify(response)) as typeof response,
    content,
  };
};
