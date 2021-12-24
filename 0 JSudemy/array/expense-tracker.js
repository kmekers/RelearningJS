let count = 0;
let totalIncome = 0;
const account = {
  name: "andrew mead",
  expenses: [],
  incomeAll: [],
  addExpense: function (Expensetitle, amount) {
    this.expenses.push({ Expensetitle: Expensetitle, amount: amount });
  },

  addIncome: function (incomeTitle, amount2) {
    this.incomeAll.push({ incomeTitle: incomeTitle, amount2: amount2 });
  },
  getAccountSummary: function () {
    totalExpense = 0;

    this.expenses.forEach((expense) => {
      totalExpense = expense.amount + totalExpense;
    });
    this.incomeAll.forEach(function (income) {
      totalIncome = totalIncome + income.amount2;
    });
    return `${this.name} has budget off ${
      totalIncome - totalExpense
    } zoveel in   ${totalIncome}inkomen  zoveel ${totalExpense} in uitgaven`;
  },
};

account.addExpense("coffee", 2);
account.addExpense("drugs", 50);
account.addIncome("loon", 1800);
console.log(account.incomeAll);
console.log(account.getAccountSummary());
