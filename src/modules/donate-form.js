import { DonateList } from "./donate-list";
import { CURRENCY } from "../core/constants/settings";

export class DonateForm {
  #totalAmount;
  #donateForm;
  #donateList;
  #totalAmountHTML;

  constructor(totalAmount, createNewDonate) {
    this.createNewDonate = createNewDonate;
    this.#donateForm = document.createElement("form");
    this.#totalAmount = totalAmount;
    this.#totalAmountHTML = document.createElement("h1");
    this.#donateList = new DonateList();
  }

  // разметка Button
  createButton() {
    const buttonForm = document.createElement("button");
    buttonForm.className = "donate-form__submit-button";
    buttonForm.type = "submit";
    buttonForm.textContent = "Задонатить";
    return buttonForm;
  }

  // разметка Input
  createAmountInput() {
    const inputLabel = document.createElement("label");
    inputLabel.className = "donate-form__input-label";
    inputLabel.textContent = `Введите сумму в ${CURRENCY}`;

    const input = document.createElement("input");
    input.className = "donate-form__donate-input";
    input.name = "amount";
    input.type = "number";
    input.max = "100";
    input.min = "0";
    input.required = "";
    inputLabel.append(input);
    return inputLabel;
  }

  updateTotalAmount(newAmount) {
    const sumHTML = document.querySelector("#total-amount");
    const prevAmount = parseInt(sumHTML.textContent);
    newAmount = Number(prevAmount) + Number(newAmount);
    sumHTML.textContent = `${newAmount} ${CURRENCY}`;
  }

  // submit
  submitHandler(event, createNewDonate) {
    event.preventDefault();
    const { target } = event;
    const targetName = target.amount;
    const inputValue = targetName.value;
    if (Number(inputValue) > 0) {
      const newArr = createNewDonate({
        amount: Number(inputValue),
        date: new Date(),
      });
      document.querySelector(".donate-form__donate-input").value = "";
      this.#donateList.updateDonates(newArr);
      this.updateTotalAmount(inputValue);
    }
  }

  render() {
    this.#donateForm.className = "donate-form";

    this.#totalAmountHTML.id = "total-amount";
    this.#totalAmountHTML.textContent = `${this.#totalAmount} ${CURRENCY}`;

    this.#donateForm.addEventListener("submit", () =>
      this.submitHandler(event, this.createNewDonate)
    );

    const amountInput = this.createAmountInput();
    const donateButton = this.createButton();

    this.#donateForm.append(this.#totalAmountHTML, amountInput, donateButton);

    return this.#donateForm;
  }
}
