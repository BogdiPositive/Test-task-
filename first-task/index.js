const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = () => {
  return (seconds) => {
    let second = 0;
    let minut = 0;
    let hour = 0;
    let timer = "";

    if (seconds > 60) {
      minut += Math.floor(seconds / 60);
      second = seconds - minut * 60;

      if (minut > 0) {
        hour += Math.floor(minut / 60);
        minut = minut - hour * 60;
      }
    } else {
      second += seconds;
    }

    const interval = setInterval(function () {
      if (second > 0) {
        second -= 1;
      } else {
        if (minut > 0) {
          minut -= 1;
          second += 59;
        } else {
          if (hour > 0) {
            hour -= 1;
            minut += 59;
          }
        }
      }
      if (second === 0 && minut === 0 && hour === 0) {
        clearInterval(interval);
      }
      timer = `${hour}:${minut}:${second}`;
      timerEl.textContent = timer;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D+/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
