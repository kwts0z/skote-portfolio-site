export function init(){

  // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letters2 = "abcdefghijklmnopqrstuvwxyz";

  let interval = null;

  const screen = document.getElementById('screen'),
        text = document.getElementById('myText');

  screen.onmouseenter = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      text.innerText = text.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return text.dataset.value[index];
          }

          return letters2[Math.floor(Math.random() * 26)]
        })
        .join("");

      if(iteration >= text.dataset.value.length){
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 10);
  }
}
