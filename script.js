const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanMap = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

const convertNumber = (input) => {
  let result = "";
  for (let item of romanMap) {
    while (input >= item[0]) {
      result += item[1];
      input -= item[0];
    }
  }
  return result;
};

const handleConvert = () => {
  const inputVal = Number(numberInput.value.trim());
  output.innerText = "";

  if (!inputVal) {
    output.innerText = "Please enter a valid number";
    return;
  }
  if (inputVal < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (inputVal >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  output.innerText = convertNumber(inputVal);
};

convertBtn.addEventListener("click", handleConvert);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleConvert();
});
