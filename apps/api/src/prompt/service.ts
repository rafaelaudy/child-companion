import { Op } from 'sequelize';
import moment from 'moment';
import axios from 'axios';

import Prompt from './model';

const fetchOpenAIResponse = async (
  topic: string,
  weeks: number,
  nextWeeks: number,
): Promise<string> => {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `Generate a response for topic: "${topic}" over ${weeks} weeks and additional ${nextWeeks} weeks.`,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data.choices[0].message.content;
};

const getPromptResponse = async (
  topic: string,
  weeks: number,
  nextWeeks: number,
): Promise<string> => {
  // const oneMonthAgo = moment().subtract(1, 'months').toDate();

  // const existingPrompt = await Prompt.findOne({
  //   where: { topic, weeks, nextWeeks, createdAt: { [Op.gt]: oneMonthAgo } },
  // });

  // if (existingPrompt) return existingPrompt.response;

  // const generatedText = await fetchOpenAIResponse(topic, weeks, nextWeeks);
  // await Prompt.create({ topic, weeks, nextWeeks, response: generatedText });

  // return generatedText;
  console.log('lalala');
  return Promise.resolve('lalala');
};

export { getPromptResponse };
