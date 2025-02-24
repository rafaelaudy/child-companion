import { getPromptResponse } from './service';

export const resolverPrompt = {
  getPrompt: async ({
    topic,
    weeks = 0,
    nextWeeks = 0,
  }: {
    topic: string;
    weeks: number;
    nextWeeks: number;
  }) => {
    return getPromptResponse(topic, weeks, nextWeeks);
  },
};
