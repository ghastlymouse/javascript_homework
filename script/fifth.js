const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

localStorage.setItem("user", JSON.stringify(user));
let loadedUser = JSON.parse(localStorage.getItem("user"));
console.log("loadedUser => ", loadedUser);

loadedUser = { ...loadedUser, 나이: 30 };
localStorage.setItem("user", JSON.stringify(loadedUser));

localStorage.removeItem("user");
loadedUser = JSON.parse(localStorage.getItem("user"));
console.log("loadedUser => ", loadedUser);

//----------------------------------------------------------------
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
