let myAccount = {
  name: "Koen Mekers",
  expences: 0,
  income: 0,
};

let addExpence = function (account, amount) {
  account.expences = account.expences + amount;
  console.log(account);
};
addExpence(myAccount, 2.5);

let addIncome = function (account, income) {
  account.income = account.income + income;
};

addIncome(myAccount, 300);

let resetAccount = function (account) {
  account.expences = 0;
  account.income = 0;
};

let accountSummary = function (account) {
  let balance = account.income - account.expences;
  return `Account for ${account.name} has ${balance}
       ${account.income} in income and ${account.expences} in expences `;
};

/* console.log(myAccount); */
accountSummary(myAccount);
console.log(myAccount.summary);
console.log(accountSummary(myAccount));
/* resetAccount(myAccount);
 */
