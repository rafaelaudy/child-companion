export enum TopicKeys {
  Developing,
  Enjoying,
  Activities,
  Teach,
  LookingForwardsTo,
  StopTo,
}

export const TOPICS = {
  [TopicKeys.Developing]: {
    title: "This week your child will be developing:",
    prompt: `I have a child of {{WEEKS}} weeks. What is the child developing this week?
Remove any introduction and present only bullet points with a small description for each bullet point.
Format that into html.`,
  },
  [TopicKeys.Enjoying]: {
    title: "This week your child will be enjoying:",
    prompt: `I have a child of {{WEEKS}} weeks. What is the child enjoying this week?
Remove any introduction and present only bullet points with a small description for each bullet point.
Format that into html.`,
  },
  [TopicKeys.Activities]: {
    title: "Try these activities with your child for fun:",
    prompt: `I have a child of {{WEEKS}} weeks. What could I do with the child for fun?
Remove any introduction and present only bullet points with a small description for each bullet point.
Format that into html.`,
  },
  [TopicKeys.Teach]: {
    title: "You could try to teach your child:",
    prompt: `I have a child of {{WEEKS}} weeks. What could I teach her this week?
Remove any introduction and present only bullet points with a small description for each bullet point.
Format that into html.`,
  },
  [TopicKeys.LookingForwardsTo]: {
    title: "In the next weeks your child may start:",
    prompt: `I have a child of {{WEEKS}} weeks. What are the new things the child will do in the next {{NEXT_WEEKS}}?
Remove any introduction and present only bullet points with a small description for each bullet point.
Format that into html.`,
  },
  [TopicKeys.StopTo]: {
    title: "In the next weeks your child will not appreaciate as much:",
    prompt: `I have a child of {{WEEKS}} weeks. What are the things might stop enjoying in the {{NEXT_WEEKS}}?
Remove any introduction and present only bullet points with a small description for each bullet point.
Format that into html.`,
  },
};
