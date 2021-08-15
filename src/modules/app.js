import { DonateForm } from "../modules/donate-form";
import { DonateList } from "../modules/donate-list";
import { mockDonates } from "../core/item";

export default class App {
  #donateForm;
  #donateList;

  constructor() {
    this.state = {
      donates: [
        { amount: 4, date: new Date() },
        { amount: 20, date: new Date() },
        { amount: 3, date: new Date() },
        { amount: 1, date: new Date() },
      ],
      totalAmount: 0,
    };
    this.#donateForm = new DonateForm(this.state.totalAmount);
    this.#donateList = new DonateList(this.state.donates);
  }
  createNewDonate(newDonate) {
    const newArr = [...this.state.donates, { ...newDonate }];
    // donateListHTML.upfateDonates()
    // donateFormHTML.updateTotalAmount()
  }

  run() {
    const donateFormHTML = this.#donateForm.render();
    const donateListHTML = this.#donateList.render();
    document.body.append(donateFormHTML, donateListHTML);
  }
}
