//6.1

const userPost = {
  postId: 1,
  name: "example",
  email: "example@gmail.ge",
  body: "this is the body",
};

async function Postuser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userPost),
      },
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

Postuser();

//6.2

async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=3",
    );
    const data = await response.json();
    data.forEach((post) => {
      console.log(post);
      output.innerHTML += `
      <p>${post.name}</p>
      <p>${post.email}</p>
      <p>${post.body}</p>
      `;
    });
  } catch (error) {
    console.log(error);
  }
}

const output = document.querySelector(".output");
getPost();
