import dayjs, { Dayjs } from "dayjs";

type AgeDescriptionProps = {
  date: Dayjs | null;
};

export default function AgeDescription({ date }: AgeDescriptionProps) {
  const calculateWeeksOld = (date: Dayjs): number => {
    const today = dayjs();
    return today.diff(date, "week");
  };

  const calculateMonthsOld = (date: Dayjs): number => {
    const today = dayjs();
    const monthsDiff = today.diff(date, "month", true);
    return Math.round(monthsDiff * 10) / 10;
  };

  if (!date) return "";

  const weeks = calculateWeeksOld(date);
  const months = calculateMonthsOld(date);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const weeksLabel = weeks > 1 ? "weeks" : "week";
  const monthsLabel = remainingMonths > 1 ? "months" : "month";
  const yearsLabel = years > 1 ? "years" : "year";

  const formattedWeeks = `${weeks} ${weeksLabel}`;
  const formattedMonths = `${remainingMonths.toFixed(1)} ${monthsLabel}`;

  return years >= 1
    ? `and is ${formattedWeeks} or ${years} ${yearsLabel} and ${formattedMonths} old`
    : `and is ${formattedWeeks} or ${formattedMonths} old`;
}
