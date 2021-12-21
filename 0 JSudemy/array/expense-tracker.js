const account = {
  name: "andrew mead",
  expenses: [],
  addExpense: function (Expensetitle, amount) {
    this.expenses.push({ Expensetitle: Expensetitle, amount: amount });
  },
  getAccountSummary: function () {
    account.expenses.forEach((amount) => {
      console.log(`${amount + amount}. `);
    });
  },
};

account.addExpense("coffee", 2);
console.log(account);
console.log(account.getAccountSummary());
