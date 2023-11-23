const buttons = document.querySelectorAll("button");
const logScroll = () => {
  console.log(window.scrollY);
  window.scroll({
    top: 533,
    left: 0,
    behavior: "smooth",
  });
};
for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];
  button.addEventListener("click", logScroll);
}
const colorCards = () => {
  const gradientColors = [
    "linear-gradient(203deg, #f6c7c5 4.72%, #c27d7a 102.83%)",
    "linear-gradient(203deg, rgba(250, 250, 250, 0.95) 4.72%, rgba(84, 21, 17, 0.58) 102.83%)",
    "linear-gradient(203deg, rgba(10, 9, 9, 0.95) 4.72%, rgba(84, 21, 17, 0.95) 102.83%)",
  ];
  const cards = document.querySelectorAll(".card");
  for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.style.background = gradientColors[index];
  }
};

window.onload = () => {
  colorCards();
};
