export const getYearlyPoints = (data) => {
  const years = Array.from(
    new Set(data.map((entry) => new Date(entry.date).getFullYear()))
  )
    .sort((a, b) => b - a)
    .slice(0, 5);
  const yearlyPoints = years.map((year) => ({ year, point: 0 }));

  data.forEach((entry) => {
    const date = new Date(entry.date);
    const year = date.getFullYear();
    const existingEntry = yearlyPoints.find((point) => point.year === year);
    if (existingEntry) {
      existingEntry.point += entry.point;
    }
  });

  return yearlyPoints;
};
