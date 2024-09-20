export const getWeeklyPoints = (data) => {
  const daysOfWeek = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
  const weeklyPoints = daysOfWeek.map((day) => ({ day, point: 0, date: "" }));

  const today = new Date();

  const oneWeekAgo = new Date(today);
  oneWeekAgo.setDate(today.getDate() - 7);

  data.forEach((entry) => {
    const date = new Date(entry.date);

    if (date >= oneWeekAgo && date <= today) {
      const dayName = daysOfWeek[(date.getDay() + 6) % 7];
      const existingEntry = weeklyPoints.find((point) => point.day === dayName);

      if (existingEntry) {
        existingEntry.point += entry.point;

        if (!existingEntry.date || date > new Date(existingEntry.date)) {
          existingEntry.date = entry.date;
        }
      }
    }
  });

  return weeklyPoints;
};
