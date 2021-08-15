import { CURRENCY as CURRENT_MONEY } from "../core/constants/settings";
import * as Utils from "./utils/index";

export const createDonateItem = (item) => {
  const donateItem = document.createElement("div");
  donateItem.className = "donate-item";
  donateItem.textContent = Utils.getFormattedTime(item.date);
  const donateItemAmount = document.createElement("b");
  donateItemAmount.textContent = `${item.amount} ${CURRENT_MONEY}`;
  donateItem.append(donateItemAmount);
  return donateItem;
};
