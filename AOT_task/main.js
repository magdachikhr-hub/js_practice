async function getPost() {
  try {
    const response = await fetch("https://api.attackontitanapi.com/episodes");
    const data = await response.json();

    console.log(data);

    data.results.forEach((post) => {
      output.innerHTML += `
      <div class="stylediv">
        <div class="divStyle" >
        <p>${post.name}</p>
      <img src="https://images.weserv.nl/?url=${encodeURIComponent(post.img)}">
          <p>${post.episode}</p>
        </div>
        </div>
      `;
    });
  } catch (error) {
    console.log(error);
  }
}

const output = document.querySelector(".output");

getPost();
// https://www.freepublicapis.com/attack-on-titan-api
