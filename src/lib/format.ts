const yearOf = (date: string) => date.match(/\d{4}/)?.[0]

/** "May 2024", "Aug 2025" → "2024–25"; same year → "2024"; ongoing → "2024–". */
export const formatYearRange = (start: string, end: string) => {
  const startYear = yearOf(start)
  if (!startYear) return end

  if (/present|now|current/i.test(end)) return `${startYear}–`

  const endYear = yearOf(end)
  if (!endYear || endYear === startYear) return startYear

  return `${startYear}–${endYear.slice(2)}`
}
