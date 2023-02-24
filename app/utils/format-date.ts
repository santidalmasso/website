export function formatDate(
  date: Date,
  locale: string | string[],
  options?: Intl.DateTimeFormatOptions
): string {
  return new Intl.DateTimeFormat(locale, { ...options }).format(date);
}
