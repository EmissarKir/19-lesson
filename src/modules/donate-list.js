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

  updateDonates(updatedDonates) {
    /// ????
    /* Данный метод должен очищать элемент с классом “donates-container__donates” и отрисовывать в нем все новые донаты из массива updatedDonates. */
  }
  render() {
    this.#donatesContainer.className = "donates-container";
    this.#donatesContainerTitle.className = "donates-container__title";
    this.#donatesContainerTitle.textContent = "Список донатов";
    this.#donatesContainerList.className = "donates-container__donates";

    this.#donates.forEach((item) => {
      const createEl = createDonateItem(item);
      this.#donatesContainerList.append(createEl);
    });
    this.#donatesContainer.append(
      this.#donatesContainerTitle,
      this.#donatesContainerList
    );
    return this.#donatesContainer;
  }
}
