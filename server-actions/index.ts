'use server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type Model = 'gpt-3.5-turbo' | 'gpt-4o';

export const fetchOpenAi = async (prompt: string, model: Model = 'gpt-3.5-turbo') => {
  const chatCompletion = await openai.chat.completions
    .create({
      model,
      max_tokens: 500,
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
        { role: 'user', content: prompt },
      ],
    })
    .catch(async (err) => {
      if (err instanceof OpenAI.APIError) {
        console.log(err);
        console.log(err.status); // 400
        console.log(err.name); // BadRequestError
        console.log(err.headers); // {server: 'nginx', ...}
      } else {
        throw err;
      }
    });

  if (!chatCompletion) return;

  return chatCompletion;
};
