const counter = document.querySelector(".counter");

let count = 0;

const timer = () => {
  if (count < 5) {
    count++;
    counter.innerText = count;
  } else {
    clearInterval(intervalId);
  }
};

const intervalId = setInterval(timer, 1000);
