export const getMonthlyPoints = (data) => {
  const months = [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Ek",
    "Kas",
    "Ara",
  ];
  const monthlyPoints = months.map((month) => ({ month, point: 0 }));

  data.forEach((entry) => {
    const date = new Date(entry.date);
    const monthName = months[date.getMonth()];
    const existingEntry = monthlyPoints.find(
      (point) => point.month === monthName
    );
    if (existingEntry) {
      existingEntry.point += entry.point;
    }
  });

  return monthlyPoints;
};
