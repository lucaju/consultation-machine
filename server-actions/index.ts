'use server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const fetchChatGPT = async (prompt: string) => {
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 100,
        temperature: 0.7,
      }),
    });

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const fetchOpenAi = async (prompt: string) => {
  const chatCompletion = await openai.chat.completions
    .create({
      model: 'gpt-3.5-turbo',
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

  const response = chatCompletion.choices[0].message.content;
  return response;
};
