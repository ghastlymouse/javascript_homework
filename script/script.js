const container = document.getElementById("container");
const boxes = container.querySelectorAll(".box");

const handleClickBox = (event) => {
  const target = event.target;
  if (target.className === "box") {
    target.classList.add("clicked");
  }
};

container.addEventListener("click", handleClickBox);

function getSquare(number) {
  // number의 제곱을 계산하여 반환하는 함수를 작성하세요.
  return number ** 2;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
