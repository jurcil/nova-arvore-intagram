const scene = document.querySelector(".scene");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";

  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = 4 + Math.random() * 6 + "s";
  snowflake.style.fontSize = 10 + Math.random() * 20 + "px";

  scene.appendChild(snowflake);

  setTimeout(() => snowflake.remove(), 10000);
}

setInterval(createSnowflake, 200);
