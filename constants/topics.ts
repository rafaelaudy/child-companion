export const TOPIC_KEYS = {
  DEVELOPING: "DEVELOPING",
  ENJOYING: "ENJOYING",
  ACTIVITIES: "ACTIVITIES",
  TEACH: "TEACH",
};

export const TOPICS = {
  [TOPIC_KEYS.DEVELOPING]: {
    title: "This week your child will be developing:",
    prompt: `I have a child of {{WEEKS}} weeks. What is the child developing this week?
Remove any introduction and present only bullet points with a small description for each bullet point.
Format that into html.`,
  },
  [TOPIC_KEYS.ENJOYING]: {
    title: "This week your child will be enjoying:",
    prompt: `I have a child of {{WEEKS}} weeks. What is the child enjoying this week?
Remove any introduction and present only bullet points with a small description for each bullet point.
Format that into html.`,
  },
  [TOPIC_KEYS.ACTIVITIES]: {
    title: "Try these activities with your child for fun:",
    prompt: `I have a child of {{WEEKS}} weeks. What could I do with the child for fun?
Remove any introduction and present only bullet points with a small description for each bullet point.
Format that into html.`,
  },
  [TOPIC_KEYS.TEACH]: {
    title: "You could try to teach your child:",
    prompt: `I have a child of {{WEEKS}} weeks. What could I teach her this week?
Remove any introduction and present only bullet points with a small description for each bullet point.
Format that into html.`,
  },
};
