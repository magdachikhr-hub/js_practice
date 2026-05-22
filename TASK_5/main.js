//5.1

const firstDiv = document.querySelector(".container");
const firstInput = document.getElementById("username");
const allSpans = document.querySelectorAll(".message");

console.log(firstDiv);
console.log(firstInput);
console.log(allSpans);

//5.2

firstDiv.style.backgroundColor = "red";
firstDiv.style.marginBottom = "30px";

allSpans.forEach((item) => {
  item.style.fontSize = "30px";
});

//5.3

const Newbtn = document.createElement("button");

Newbtn.setAttribute("class", "sendBtn");

Newbtn.innerHTML = `Send`;

console.log(Newbtn);

firstDiv.append(Newbtn);

//5.4

firstDiv.addEventListener("click", () => {
  console.log("it’s clicked");
});
