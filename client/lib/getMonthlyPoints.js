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

  const monthlyPoints = months.map((month) => ({
    month,
    totalPoint: 0,
    count: 0,
    date: "",
  }));

  data.forEach((entry) => {
    const date = new Date(entry.date);
    const monthName = months[date.getMonth()];
    const existingEntry = monthlyPoints.find(
      (point) => point.month === monthName
    );

    if (existingEntry) {
      existingEntry.totalPoint += entry.point;
      existingEntry.count += 1;
      if (!existingEntry.date || new Date(existingEntry.date) < date) {
        existingEntry.date = entry.date;
      }
    }
  });

  monthlyPoints.forEach((entry) => {
    if (entry.count > 0) {
      entry.point = entry.totalPoint / entry.count;
    } else {
      entry.point = 0;
    }
  });

  return monthlyPoints;
};
