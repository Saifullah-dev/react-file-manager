export const formatDate = (date : string) => {
  if (!date || isNaN(Date.parse(date))) return "";

  const parsedDate = new Date(date);
  let hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const month = parsedDate.getMonth() + 1;
  const day = parsedDate.getDate();
  const year = parsedDate.getFullYear();

  return `${month}/${day}/${year} ${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
};
