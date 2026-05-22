//4.1

window.addEventListener("load", () => {
  console.log("Website is ready");
});

//4.2
setInterval(() => {
  for (let i = 1; i < 10; i++) {
    // console.log(i);
  }
}, 2000);

//4.3
let country = "georgia";

const upperCaseCountry = country.toUpperCase();

console.log(upperCaseCountry);

//4.4

const todaysTime = document.querySelector(".time");

function todaysDate() {
  const currentTime = new Date();

  console.log(currentTime);

  const day = currentTime.getDate();
  const month = currentTime.getMonth() + 1;
  const year = currentTime.getFullYear();
  todaysTime.innerHTML = `  <span> day: ${day}</span>
<span>month: ${month}</span>
<span>year: ${year}</span> `;

  console.log(day);
  console.log(month);
  console.log(year);
}

todaysDate();
