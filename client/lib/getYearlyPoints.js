export const getYearlyPoints = (data) => {
  const currentYear = new Date().getFullYear();
  const fiveYearsAgo = currentYear - 5;

  const years = Array.from(
    new Set(
      data
        .map((entry) => new Date(entry.date).getFullYear())
        .filter((year) => year >= fiveYearsAgo)
    )
  )
    .sort((a, b) => b - a)
    .slice(0, 5);

  const yearlyPoints = years.map((year) => ({
    year,
    totalPoint: 0,
    count: 0,
    yearDate: "",
  }));

  data.forEach((entry) => {
    const date = new Date(entry.date);
    const year = date.getFullYear();
    if (year >= fiveYearsAgo) {
      const existingEntry = yearlyPoints.find((point) => point.year === year);
      if (existingEntry) {
        existingEntry.totalPoint += entry.point;
        existingEntry.count += 1;

        if (
          !existingEntry.yearDate ||
          new Date(existingEntry.yearDate) < date
        ) {
          existingEntry.yearDate = entry.date;
        }
      }
    }
  });

  yearlyPoints.forEach((entry) => {
    if (entry.count > 0) {
      entry.point = (entry.totalPoint / entry.count).toFixed(1);
    } else {
      entry.point = "0.00";
    }
  });

  return yearlyPoints;
};
