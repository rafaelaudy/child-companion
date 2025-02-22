import { getPromptResponse } from './service';

export const resolverPrompt = {
  getPrompt: async ({
    topic,
    weeks,
    nextWeeks,
  }: {
    topic: string;
    weeks: number;
    nextWeeks: number;
  }) => {
    return getPromptResponse(topic, weeks, nextWeeks);
  },
};
