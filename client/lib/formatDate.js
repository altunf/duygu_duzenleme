export function formatDate(date, withName = true, charts = false) {
  const modifiedDate = new Date(date);

  const day = String(modifiedDate.getDate()).padStart(2, "0");
  const month = String(modifiedDate.getMonth() + 1).padStart(2, "0");
  const year = String(modifiedDate.getFullYear());

  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const formattedDate = `${day}.${month}.${year}`;
  const withMonthName = `${day} ${months[Number(month) - 1]} ${year}`;
  const forCharts = `${year}-${month}-${day}`;

  const result = withName ? withMonthName : charts ? forCharts : formattedDate;

  return result;
}
