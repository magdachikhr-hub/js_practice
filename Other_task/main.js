async function getPost() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    console.log(data);
    output.innerHTML = `<img  class="img" src="${data.message}" alt="">
`;
  } catch (error) {
    console.log(error);
  }
}

const output = document.querySelector(".output");

getPost();

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  getPost();
});

//https://www.freepublicapis.com/dog-api
