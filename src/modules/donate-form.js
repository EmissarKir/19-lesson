import { DonateList } from "./donate-list";

export class DonateForm {
  #totalAmount;
  #donateForm;
  #donateList;

  constructor(totalAmount, createNewDonate) {
    this.createNewDonate = createNewDonate;
    this.#donateForm = document.createElement("form");
    this.#totalAmount = totalAmount;
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
    inputLabel.textContent = "Введите сумму в $";

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

  /*   Также в DonateForm создайте метод updateTotalAmount, который будет принимать в себя параметр newAmount и помещать текст “newAmount$” (newAmount - параметр метода updateTotalAmount) в элемент с id “total-amount”. Переданное начальное значение общей суммы передайте как текст в элемент  с id “total-amount”. В итоге изначально у вас получится “0$”. */
  updateTotalAmount(newAmount) {
    const sumHTML = document.querySelector("#total-amount");
    const prevAmount = parseInt(sumHTML.textContent);
    newAmount = Number(prevAmount) + Number(newAmount);
    sumHTML.textContent = `${newAmount} $`;
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

    const totalAmount = document.createElement("h1");
    totalAmount.id = "total-amount";
    totalAmount.textContent = `${this.#totalAmount} $`;

    this.#donateForm.addEventListener("submit", () =>
      this.submitHandler(event, this.createNewDonate)
    );

    const amountInput = this.createAmountInput();
    const donateButton = this.createButton();

    this.#donateForm.append(totalAmount, amountInput, donateButton);

    return this.#donateForm;
  }
}
