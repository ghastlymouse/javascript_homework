const container = document.querySelector(".container");
const card = container.querySelector(".person");

const people = [
  {
    name: "철수",
    age: 19,
    gender: "남",
  },
  {
    name: "짱구",
    age: 20,
    gender: "남",
  },
  {
    name: "유리",
    age: 21,
    gender: "여",
  },
];

console.log(people);

people.forEach((person) => {
  let temp = `
        <div class="person">
            <h2>이름: ${person.name}</h2>
            <p>나이: ${person.age}</p>
            <p>성별: ${person.gender}</p>
        </div>
`;
  container.insertAdjacentHTML("beforeend", temp);
});

const women = people.find((person) => person.gender === "여");
console.log(women);

const men = people.filter((person) => person.gender === "남");
console.log(men);

const olderPeople = people.map((person) => {
  return { ...person, age: person.age + 10 };
});
console.log("원래 사람들:", people);
console.log("10년 뒤:", olderPeople);

const copiedPeople = [...people];
copiedPeople.sort((a, b) => b.age - a.age);
console.log("원래 사람들:", people);
console.log("나이 많은 순:", copiedPeople);

const user = {
  이름: "병수",
  나이: 20, // ?
  주소: "시골",
};

const { 이름, 나이, 주소 } = user;

console.log("병수의 이름:", 이름);
console.log("병수의 나이:", 나이);
console.log("병수의 주소:", 주소);
