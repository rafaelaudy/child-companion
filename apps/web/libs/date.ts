import dayjs from "dayjs";

export const calculateWeeksOld = (date: string): number => {
  const today = dayjs();
  return today.diff(dayjs(date), "week");
};
