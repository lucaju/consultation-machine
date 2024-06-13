'use server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const fetchOpenAi = async (prompt: string) => {
  const chatCompletion = await openai.chat.completions
    .create({
      model: 'gpt-3.5-turbo',
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
