let inputElem = document.querySelector("#search-input");
let submitBtn = document.querySelector("#submit-button");

let persons = [
  {
    name: "Dimych",
    age: 56,
  },

  {
    name: "Ekaterina",
    age: 18,
  },

  {
    name: "Jason",
    age: 25,
  },

  {
    name: "Vladimir",
    age: 34,
  },
];

// alert search input data with condition

submitBtn.addEventListener("click", () => setTimeout(alertFunc, 3000));

function alertFunc() {
  if (inputElem.value === "google") {
    alert("Yandex круче. Но это не точно");
  } else {
    alert(`${inputElem.value} ${persons[0].name}`);
  }
}

// superSum function. Alert summ of numbers

function superSum(a, b) {
  alert(`Summ is: ${a + b}`);
}

// create unordered array consist of numbers and find the min and max number;

const numArr = [99, 1, 0, -17, 18, 34, 9, 111, 15];

function findValue(arr) {
  const searchArr = [...arr];
  let maxNum = searchArr[0];
  let minNum = searchArr[0];
  const searchArrLength = searchArr.length;

  for (let i = 0; i < searchArrLength; i++) {
    if (maxNum < searchArr[i]) {
      maxNum = searchArr[i];
    }
  }

  for (let j = 0; j < searchArrLength; j++) {
    if (minNum > searchArr[j]) {
      minNum = searchArr[j];
    }
  }
  alert(`min number is:  ${minNum}; max number is:  ${maxNum}`);
}

// value exchange

let a = "XXX";
let b = "YYY";
let temp;
console.log(`initially: a is ${a} and b is ${b}`);
temp = a;
a = b;
b = temp;
console.log(`after value exchange: a is ${a} and b is ${b}`);

// findMax function

function findMaxValue(arr) {
  const searchArr = [...arr];
  let maxNum = searchArr[0];
  const searchArrLength = searchArr.length;

  for (let i = 0; i < searchArrLength; i++) {
    if (maxNum < searchArr[i]) {
      maxNum = searchArr[i];
    }
  }
  return maxNum;
}
