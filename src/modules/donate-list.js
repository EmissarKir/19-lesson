import { createDonateItem } from "../core/item";

export class DonateList {
  #donates;
  #donatesContainer;
  #donatesContainerTitle;
  #donatesContainerList;
  constructor(donates) {
    this.#donates = donates;
    this.#donatesContainer = document.createElement("div");
    this.#donatesContainerTitle = document.createElement("h2");
    this.#donatesContainerList = document.createElement("div");
  }

  createListItems(array, parent) {
    array.forEach((item) => {
      const createEl = createDonateItem(item);
      parent.append(createEl);
    });
  }

  updateDonates(updatedDonates) {
    const newList = document.querySelector(".donates-container__donates");
    newList.innerHTML = "";
    this.createListItems(updatedDonates, newList);
  }

  render() {
    this.#donatesContainer.className = "donates-container";
    this.#donatesContainerTitle.className = "donates-container__title";
    this.#donatesContainerTitle.textContent = "Список донатов";
    this.#donatesContainerList.className = "donates-container__donates";

    this.createListItems(this.#donates, this.#donatesContainerList);
    this.#donatesContainer.append(
      this.#donatesContainerTitle,
      this.#donatesContainerList
    );
    return this.#donatesContainer;
  }
}
