const title = document.querySelector(".title");
const btn = document.querySelector(".btn");

const person = {
    name: "정현욱",
    age: 25,
};

console.log("이름:", person.name); // 이름: 정현욱
console.log("나이:", person.age);   // 나이: 25

const isEvenOrOdd = (num) => {
    if (num % 2 === 0) {
        return console.log("짝수입니다.");
    } else {
        return console.log("홀수입니다.");
    }
}
isEvenOrOdd(7); // 홀수입니다.
isEvenOrOdd(98); // 짝수입니다.

const sum = (num1, num2) => console.log(num1 + num2);
sum(470, -51); // 419

function handleClickBtn () {
    const titleText = title.innerHTML;
    if (titleText === "제목이다.") {
        return title.innerHTML = "제목아니다.";
    } else {
        return title.innerHTML = "제목이다.";
    }
}

btn.addEventListener("click", handleClickBtn);