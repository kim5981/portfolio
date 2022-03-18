//test
console.log("hello :)");

function makeHeader() {
  const welcome = document.querySelector(".welcome");

  const title = document.createElement("h1");
  title.textContent = "Hi, I'm Kim. Your next full-stack web developer";

  const moon = document.createElement("img");
  moon.setAttribute("id", "moon");
  moon.src = "./media/pixel-moon.png";
  moon.alt = "a pixel moon";

  const clouds = document.createElement("img");
  clouds.setAttribute("id", "clouds");
  clouds.src = "./media/pixel-clouds.png";
  clouds.alt = "some pixel clouds";

  const skyWrap = document.createElement("div");
  skyWrap.classList.add("sky-wrap");

  


  welcome.appendChild(title);
  welcome.appendChild(skyWrap);

  skyWrap.appendChild(moon);
  skyWrap.appendChild(clouds);

  return welcome;
}

console.log(makeHeader());