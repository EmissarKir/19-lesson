import { DonateForm } from "../modules/donate-form";
import { DonateList } from "../modules/donate-list";
import * as Utils from "../core/utils/index";

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];

export default class App {
  #donateForm;
  #donateList;

  constructor() {
    this.state = {
      donates: mockDonates,
      totalAmount: Utils.calculateSumOfNumbers(mockDonates),
    };

    this.#donateForm = new DonateForm(
      this.state.totalAmount,
      this.createNewDonate.bind(this)
    );
    this.#donateList = new DonateList(this.state.donates);
  }

  createNewDonate(newDonate) {
    this.state.donates = [...this.state.donates, newDonate];
    return this.state.donates;
  }

  run() {
    const donateFormHTML = this.#donateForm.render();
    const donateListHTML = this.#donateList.render();
    document.body.append(donateFormHTML, donateListHTML);
  }
}
