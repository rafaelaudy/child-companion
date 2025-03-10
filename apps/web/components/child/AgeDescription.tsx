import dayjs, { Dayjs } from "dayjs";

type AgeDescriptionProps = {
  date: Dayjs | null;
  weeks: number | null;
};

function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : plural || `${singular}s`;
}

export default function AgeDescription({ date, weeks }: AgeDescriptionProps) {
  const calculateMonthsOld = (date: Dayjs): number => {
    const today = dayjs();
    const monthsDiff = today.diff(date, "month", true);
    return Math.round(monthsDiff * 10) / 10;
  };

  if (!date || !weeks) return "";

  const months = calculateMonthsOld(date);

  if (months < 6) {
    const weeksLabel = pluralize(weeks, "week");
    return `and is ${weeks} ${weeksLabel} old`;
  } else if (months < 12) {
    const monthsLabel = pluralize(months, "month");
    return `and is ${months} ${monthsLabel} old`;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const monthsLabel = pluralize(remainingMonths, "month");
  const yearsLabel = pluralize(years, "year");

  const formattedMonths = `${remainingMonths.toFixed(1)} ${monthsLabel}`;

  return `and is ${years} ${yearsLabel} and ${formattedMonths} old`;
}
