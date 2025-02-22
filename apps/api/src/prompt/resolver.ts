import { getPromptResponse } from './service';

export const resolverPrompt = {
  getPrompt: async (
    { topic, weeks, nextWeeks }: { topic: string; weeks: number; nextWeeks: number },
    // { topic, weeks, nextWeeks }: { topic: string; weeks: number; nextWeeks: number },
  ) => {
    console.log(topic, weeks, nextWeeks);
    return Promise.resolve('lalala');
    // return getPromptResponse(topic, weeks, nextWeeks);
  },
};
