// Wait X ms before running code in .then()
function sleep(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

// Generate a random number between min and max
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function memoize(cb) {
  const cache = new Map();
  console.log(cache);
  return (...args) => {
    const key = JSON.stringify(args);
    console.log("Key", key);
    if (cache.has(key)) return cache.get(key);

    const res = cb(...args);
    cache.set(key, res);
    console.log(res);
    return res;
  };
}

// array
// return the first n numbers of an array or the first element if n is not specified
function first(arr, n = 1) {
  if (n === 1) return arr[0];
  return arr.filter((_, i) => i < n);
}
// return the last n numbers of an array or the last element if n is not specified
function last(arr, n = 1) {
  if (n === 1) return arr[arr.length - 1];
  return arr.filter((_, i) => arr.length - i <= n);
}

// returns a random element from an array
function sample(arr) {
  return arr[randomNumberBetween(0, arr.length - 1)];
}

// returns array of object keys
function pluck(arr, key) {
  //   let a = [];
  // arr.forEach((element) => {
  //     a.unshift(element[key]);
  //   });
  //   console.log(a);
  return arr.map((el) => el[key]);
}
// no duplicates
function pluckPure(arr, key) {
  return new Set(arr.map((el) => el[key]));
}

// groups elements by key
function groupBy(arr, key) {
  return arr.reduce((acc, el) => {
    acc[el[key]] = acc[el[key]] || [];
    acc[el[key]].push(el);
    return acc;
  }, {});
}

// formatters
// format a number according to locale
const NUM_FORMATTER = new Intl.NumberFormat(undefined);
function formatNumber(num) {
  return NUM_FORMATTER.format(num);
}
// currency formatter
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
function formatCurrency(num) {
  return CURRENCY_FORMATTER.format(num);
}
// returns compact, readable version of number
const COMPACT_NUM_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});
function formatCompactNumber(num) {
  return COMPACT_NUM_FORMATTER.format(num);
}
// relative date formatter
const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];
const RELATIVE_DATE_FORMATTER = new Intl.RelativeTimeFormat(undefined, {
  numeric: "auto",
});
function formatRelDate(toDate, fromDate = new Date()) {
  let duration = (toDate - fromDate) / 1000;
  for (let i = 0; i < DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return RELATIVE_DATE_FORMATTER.format(
        Math.round(duration),
        division.name
      );
    }
    duration /= division.amount;
  }
}
// Take every bit of string except the 1st character and turn it to lowercase, turn 1st to upper case
function properCase(str) {
  //   return str.replace(/\w\S*/g, (txt) => {
  //     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  //   });
  // or
  return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
}
// clg with less typing
function log(item) {
  console.log(item);
}
function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
function qsa(selector, parent = document) {
  return [...parent.querySelector(selector)];
}
// create element with optional class name
function createEl(tag, className,txt) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if(txt)el.textContent = txt;
    return el;
}

export {
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
  qsa,createEl
};
