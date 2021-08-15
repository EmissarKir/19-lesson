export const createDonateItem = (item) => {
  const donateItem = document.createElement("div");
  donateItem.className = "donate-item";
  donateItem.textContent = item.date;
  const donateItemAmount = document.createElement("b");
  donateItemAmount.textContent = `${item.amount}$`;
  donateItem.append(donateItemAmount);
  return donateItem;
};

export const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];
