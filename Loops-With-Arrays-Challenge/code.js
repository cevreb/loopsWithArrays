//To be used for the Basic Level:
const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472,
];

// Your code here

//----------------Kata 1-------------------------------
console.log("---Kata 1---");
function displayElements(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

displayElements(sampleArray);

//Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
sampleArray.forEach((element) => console.log(element));
console.log("Actual Output:");
displayElements(sampleArray);

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("Actual Output:");
displayElements([]);
console.log("\n");

//------------------Kata 2-------------------------------
console.log("---Kata 2---");
function displayEvenNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
}

displayEvenNumbers(sampleArray);

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
sampleArray.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
  }
});
console.log("Actual Output:");
displayEvenNumbers(sampleArray);
console.log("\n");

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("Actual Output:");
displayEvenNumbers([1, 3, 5, 7, 9]);
console.log("\n");

//----------------------Kata 3----------------------------
console.log("---Kata 3---");
function displayOddNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(array[i]);
    }
  }
}

displayOddNumbers(sampleArray);

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
sampleArray.forEach((element) => {
  if (element % 2 !== 0) {
    console.log(element);
  }
});
console.log("Actual Output:");
displayOddNumbers(sampleArray);
console.log("\n");

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("Actual Output:");
displayOddNumbers([2, 4, 6, 8, 10]);
console.log("\n");

//----------------------Kata 4----------------------------
console.log("---Kata 4---");
function displayDivisByEight(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 8 === 0) {
      console.log(array[i]);
    }
  }
}

displayDivisByEight(sampleArray);

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
sampleArray.forEach((element) => {
  if (element % 8 === 0) {
    console.log(element);
  }
});
console.log("Actual Output:");
displayDivisByEight(sampleArray);
console.log("\n");

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("Actual Output:");
displayDivisByEight([1, 2, 3, 4, 5, 6, 7, 9]);
console.log("\n");

//----------------------Kata 5----------------------------
console.log("---Kata 5---");
function displaySquared(array) {
  for (let i = 0; i < array.length; i++) {
    let square = array[i] * array[i];
    console.log(square);
  }
}

displaySquared(sampleArray);

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
sampleArray.forEach((element) => {
  const square = element * element;
  console.log(square);
});
console.log("Actual Output:");
displaySquared(sampleArray);
console.log("\n");

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("Actual Output:");
displaySquared([]);
console.log("\n");

//----------------------Kata 6----------------------------
console.log("---Kata 6---");
function displaySum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log("Sum = ", sum);
}

displaySum(sampleArray);

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
const expectedSum = sampleArray.reduce((acc, element) => acc + element, 0);
console.log("Sum=", expectedSum);
console.log("Actual Output:");
displaySum(sampleArray);
console.log("\n");

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("Sum= 0");
console.log("Actual Output:");
displaySum([]); // An empty array
console.log("\n");

//----------------------Kata 7----------------------------
console.log("---Kata 7---");
function displaySmallest(array) {
  if (array.length === 0) {
    console.log("The array is empty.");
    return;
  }

  let smallest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }

  console.log("Smallest =", smallest);
}

displaySmallest(sampleArray);

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
const expectedSmallest = Math.min(...sampleArray);
console.log("Smallest =", expectedSmallest);
console.log("Actual Output:");
displaySmallest(sampleArray);
console.log("\n");

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("The array is empty.");
console.log("Actual Output:");
displaySmallest([]);
console.log("\n");

//----------------------Kata 8----------------------------
console.log("---Kata 8---");
function displayLargest(array) {
  if (array.length === 0) {
    console.log("The array is empty.");
    return;
  }

  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }

  console.log("Largest =", largest);
}

displayLargest(sampleArray);

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
const expectedLargest = Math.max(...sampleArray);
console.log("Largest =", expectedLargest);
console.log("Actual Output:");
displayLargest(sampleArray);
console.log("\n");

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("The array is empty.");
console.log("Actual Output:");
displayLargest([]);
console.log("\n");

//----------------------Kata 9----------------------------
console.log("---Kata 9---");
function displayDivisByThree() {
  for (let i = 3; i <= 100; i += 3) {
    console.log(i);
  }
}

displayDivisByThree();

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
for (let i = 3; i <= 100; i += 3) {
  console.log(i);
}
console.log("Actual Output:");
displayDivisByThree();
console.log("\n");

//----------------------Kata 10----------------------------
console.log("---Kata 10---");
function displayDivisBySeven() {
  for (let i = 7; i <= 100; i += 7) {
    console.log(i);
  }
}

displayDivisBySeven();

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
for (let i = 7; i <= 100; i += 7) {
  console.log(i);
}
console.log("Actual Output:");
displayDivisBySeven();
console.log("\n");

//----------------------Kata 11----------------------------
console.log("---Kata 11---");
function displayDivisByThreeAndSeven() {
  for (let i = 100; i >= 1; i--) {
    if (i % 3 === 0 || i % 7 === 0) {
      console.log(i);
    }
  }
}

displayDivisByThreeAndSeven();

// Unit Test:
console.log("Unit Test:");
console.log("Expected Output:");
for (let i = 100; i >= 1; i--) {
  if (i % 3 === 0 || i % 7 === 0) {
    console.log(i);
  }
}
console.log("Actual Output:");
displayDivisByThreeAndSeven();
console.log("\n");

//----------------------Kata 12----------------------------
console.log("---Kata 12---");
function displayDivisByFiveAndOdd() {
  for (let i = 5; i <= 100; i += 5) {
    if (i % 2 !== 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}

displayDivisByFiveAndOdd();

// Unit Test:
console.log("Unit Test:");
console.log("Expected Output:");
for (let i = 5; i <= 100; i += 5) {
  if (i % 2 !== 0 && i % 5 === 0) {
    console.log(i);
  }
}
console.log("Actual Output:");
displayDivisByFiveAndOdd();
console.log("\n");

//----------------------Kata 13----------------------------
console.log("---Kata 13---");
function displaySumToTwenty() {
  let sum = 0;

  for (let i = 0; i <= 20; i++) {
    sum += i;
  }

  console.log("Sum = ", sum);
}

displaySumToTwenty();

// Unit Test:
console.log("Unit Test:");
console.log("Expected Output:");
let expectedSumResult = (20 * (20 + 1)) / 2;
console.log("Sum = ", expectedSumResult);
console.log("Actual Output:");
displaySumToTwenty();
console.log("\n");

//----------------------Kata 14----------------------------
console.log("---Kata 14---");
function displayAscending(start, end) {
  if (start <= 0 || end <= 0 || start > end) {
    console.log("Invalid range.");
    return;
  }

  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

displayAscending(1, 6);

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
for (let i = 1; i <= 6; i++) {
  console.log(i);
}
console.log("Actual Output:");
displayAscending(1, 6);
console.log("\n");

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("Invalid range.");
console.log("Actual Output:");
displayAscending(7, 5);
console.log("\n");

//----------------------Kata 15----------------------------
console.log("---Kata 15---");
function displayDescending(start, end) {
  if (start <= 0 || end <= 0 || start < end) {
    console.log("Invalid range.");
    return;
  }

  for (let i = start; i >= end; i--) {
    console.log(i);
  }
}

displayDescending(6, 1);

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
for (let i = 6; i >= 1; i--) {
  console.log(i);
}
console.log("Actual Output:");
displayDescending(6, 1);
console.log("\n");

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("Invalid range.");
console.log("Actual Output:");
displayDescending(1, 6);
console.log("\n");

//----------------------Kata 16----------------------------
console.log("---Kata 16---");
function displayAscendingNeg(start, end) {
  if (start >= 0 || end >= 0 || start > end) {
    console.log("Invalid range.");
    return;
  }

  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

displayAscendingNeg(-6, -1);

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
for (let i = -6; i <= -1; i++) {
  console.log(i);
}
console.log("Actual Output:");
displayAscendingNeg(-6, -1);
console.log("\n");

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("Invalid range.");
console.log("Actual Output:");
displayAscendingNeg(-1, -6);
console.log("\n");

//----------------------Kata 17----------------------------
console.log("---Kata 17---");
function displayDescendingNeg(start, end) {
  if (start >= 0 || end >= 0 || start < end) {
    console.log("Invalid range.");
    return;
  }

  for (let i = start; i >= end; i--) {
    console.log(i);
  }
}

displayDescendingNeg(-1, -6);

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
for (let i = -1; i >= -6; i--) {
  console.log(i);
}
console.log("Actual Output:");
displayDescendingNeg(-1, -6);
console.log("\n");

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("Invalid range.");
console.log("Actual Output:");
displayDescendingNeg(-6, -1);
console.log("\n");

//----------------------Kata 18----------------------------
console.log("---Kata 18---");
function displayDescendingOddAndPos(start, end) {
  if (start % 2 === 0) {
    start--;
  }

  for (let i = start; i >= end; i -= 2) {
    console.log(i);
  }
}

displayDescendingOddAndPos(11, -11);

// Unit Test 1:
console.log("Unit Test 1:");
console.log("Expected Output:");
for (let i = 11; i >= -11; i -= 2) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log("Actual Output:");
displayDescendingOddAndPos(11, -11);
console.log("\n");

// Unit Test 2:
console.log("Unit Test 2:");
console.log("Expected Output:");
console.log("Invalid range.");
console.log("Actual Output:");
displayDescendingOddAndPos(-10, 10);
console.log("\n");

//----------------------Kata 19----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  for (let i = 0; i < 20; i++) {
    const rectangle = document.createElement("div");
    rectangle.style.height = "20px";
    rectangle.style.width = "100px";
    rectangle.style.backgroundColor = "blue";
    rectangle.style.marginBottom = "5px";
    body.appendChild(rectangle);
  }
});

//----------------------Kata 20----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  for (let i = 1; i <= 20; i++) {
    const rectangle = document.createElement("div");
    rectangle.style.height = "20px";
    rectangle.style.width = `${100 + i * 5}px`;
    rectangle.style.backgroundColor = "blue";
    rectangle.style.marginBottom = "5px";
    body.appendChild(rectangle);
  }
});

//----------------------Kata 21----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
    179, 535, 940, 472,
  ];

  for (let i = 0; i < sampleArray.length; i++) {
    const rectangle = document.createElement("div");
    rectangle.style.height = "20px";
    rectangle.style.width = `${sampleArray[i]}px`;
    rectangle.style.backgroundColor = "blue";
    rectangle.style.marginBottom = "5px";
    body.appendChild(rectangle);
  }
});

//----------------------Kata 22----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
    179, 535, 940, 472,
  ];

  for (let i = 0; i < sampleArray.length; i++) {
    const rectangle = document.createElement("div");
    rectangle.style.height = "20px";
    rectangle.style.width = `${sampleArray[i]}px`;

    rectangle.style.backgroundColor = i % 2 === 0 ? "blue" : "orange";

    rectangle.style.marginBottom = "5px";
    body.appendChild(rectangle);
  }
});

//----------------------Kata 23----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
    179, 535, 940, 472,
  ];

  for (let i = 0; i < sampleArray.length; i++) {
    const rectangle = document.createElement("div");
    rectangle.style.height = "20px";
    rectangle.style.width = `${sampleArray[i]}px`;

    rectangle.style.backgroundColor =
      sampleArray[i] % 2 === 0 ? "orange" : "blue";

    rectangle.style.marginBottom = "5px";
    body.appendChild(rectangle);
  }
});
