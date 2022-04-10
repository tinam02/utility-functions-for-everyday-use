import {
  sleep,
  randomNumberBetween,
  memoize,
  first,
  last,
  sample,
  pluck,
  pluckPure,
  groupBy,
  formatNumber,
  formatCurrency,
  formatCompactNumber,
  formatRelDate,
  properCase,
  log,
  qs,
  createEl,
} from "./utils/utils.js";

// Usage
sleep(2000).then(() => {
  let x = createEl("p", "test", `Element inserted after 2 seconds`);
  qs("body").append(x);
});
log(randomNumberBetween(-10, 5));
// arrays
let myarr = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 25,
  },
  {
    name: "Jane",
    age: 26,
  },
  {
    name: "Jack",
    age: 20,
  },
  {
    name: "Jill",
    age: 35,
  },
  {
    name: "Joe",
    age: 40,
  },
  {
    name: "Jenny",
    age: 45,
  },
  {
    name: "Jules",
    age: 50,
  },
];
log(first(myarr, 3));
log(last(myarr, 3));
log(sample(myarr));
log(pluck(myarr, "name"));
log(pluckPure(myarr, "name"));
log(groupBy(myarr, "name"));
// Formatters
log(formatNumber(4242564));
log(formatCurrency(424.2564));
log(formatCompactNumber(120500));
const now = new Date();
const twoMonthsAgo = new Date().setMonth(now.getMonth() - 2);
log("Two Months Ago:\n", formatRelDate(twoMonthsAgo));
log(properCase("hElLo worLd!"));
log(qs("h1"));
