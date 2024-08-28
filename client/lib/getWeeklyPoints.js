export const getWeeklyPoints = (data) => {
  const daysOfWeek = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];
  const weeklyPoints = daysOfWeek.map((day) => ({ day, point: 0 }));

  data.forEach((entry) => {
    const date = new Date(entry.date);
    const dayName = daysOfWeek[(date.getDay() + 6) % 7]; // Adjusting for Monday start
    const existingEntry = weeklyPoints.find((point) => point.day === dayName);
    if (existingEntry) {
      existingEntry.point += entry.point;
    }
  });

  return weeklyPoints;
};
