export class DonateForm {
  #formContainer;
  #totalAmount;
  constructor(totalAmount) {
    this.#formContainer = document.createElement("form");
    this.#formContainer.className = "donate-form";
    this.#totalAmount = totalAmount;
  }
  /* После вам необходимо повесить обработчик событий “submit” на элемент с классом “donate-form”. В данном обработчике вам необходимо создать новый объект доната (с ключами date и amount) и вызвать метод createNewDonate, который вы до этого передали в конструктор. Также после создания каждого доната текстовое поле с классом “donate-form__donate-input” должно быть пустым. */

  updateTotalAmount(newAmount) {
    /////// ??????????????
    const value = document.querySelector("#total-amount");
    value.textContent = `${newAmount} $`;
  }
  render() {
    const totalAmount = document.createElement("h1");
    totalAmount.id = "total-amount";
    totalAmount.textContent = `${this.#totalAmount} $`;

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

    const buttonForm = document.createElement("button");
    buttonForm.className = "donate-form__submit-button";
    buttonForm.type = "submit";
    buttonForm.textContent = "Задонатить";

    this.#formContainer.append(totalAmount, inputLabel, buttonForm);

    // создание newDonate
    const createTaskForm = document.querySelector(".donate-form");

    if (createTaskForm) {
      createTaskForm.addEventListener("submit", (event) => {
        console.log("event", event);
        event.preventDefault();
      });
    }
    return this.#formContainer;
  }
}
