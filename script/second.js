window.addEventListener("scroll", () => {
  console.log(scrollY);
});

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

setTimeout(() => {
  console.log("3초 후에 출력되는 텍스트입니다.");
}, 3000);
