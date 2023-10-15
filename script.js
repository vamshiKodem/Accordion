const accordions = document.querySelectorAll(".accordion");

accordions.forEach((element) => {
  const heading = element.querySelector(".heading");
  heading.addEventListener("click", () => {
    const body = element.querySelector(".body");
    const accordingToggle = element.querySelector(".according-toggle");

    body.classList.toggle("active");

    if (!body.classList.contains("active")) {
      body.style.height = "0px";
      accordingToggle.innerText = "+";
    } else {
      body.style.height = `${body.scrollHeight}px`;
      accordingToggle.innerText = "-";
    }
    console.log(body.scrollHeight);
  });
});
