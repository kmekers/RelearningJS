let count = 0;
const account = {
  name: "andrew mead",
  expenses: [],
  addExpense: function (Expensetitle, amount) {
    this.expenses.push({ Expensetitle: Expensetitle, amount: amount });
  },
  getAccountSummary: function () {
    totalExpense = 0;

    this.expenses.forEach((expense) => {
      totalExpense = expense.amount + totalExpense;
    });
    return `${this.name} has ${totalExpense}`;
  },
};

account.addExpense("coffee", 2);
account.addExpense("drugs", 50);
console.log(account.expenses);
console.log(account.getAccountSummary());
