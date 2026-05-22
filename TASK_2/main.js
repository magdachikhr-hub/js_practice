//2.1

const showBtn = document.querySelector(".show");

showBtn.addEventListener("click", () => {
  console.log("Button pressed");
});

//2.2

const inputName = document.getElementById("inputText");

inputName.addEventListener("blur", () => {
  console.log(inputName.value);
});

//2.3

const score = 67;

if (score > 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}

//2.4

for (let i = 1; i < 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
