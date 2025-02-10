document.addEventListener("DOMContentLoaded", function () {
  console.log("Script is running!");

  // Text Animation Data
  const titles = [
    { title: " I'M A Manual Tester", subtitle: "Ensuring Quality and Reliability in Web Applications", color: "blue" },
    { title: " I'M A Web Developer", subtitle: "A Creative Developer Building Awesome Web Experiences", color: "#3498db" }, // Change this one
    { title: " I'M A Web Designer", subtitle: "Crafting Beautiful and Interactive User Interfaces", color: "#6E8E59" }
  ];

  let index = 0;

  function changeTitle() {
    const titleElement = document.getElementById("changing-text");
    const subtitleElement = document.getElementById("changing-subtext");

    if (!titleElement || !subtitleElement) {
      console.error("Title or subtitle element not found!");
      return;
    }

    titleElement.classList.add("animate__fadeOut");
    subtitleElement.classList.add("animate__fadeOut");

    setTimeout(() => {
      titleElement.textContent = titles[index].title;
      subtitleElement.textContent = titles[index].subtitle;

      // Only change color when "Web Developer" appears
      if (titles[index].title === "Web Developer") {
        titleElement.style.color = "#ff6600"; // Change to orange or any color you like
        subtitleElement.style.color = "#ff6600";
      } else {
        titleElement.style.color = ""; // Reset to default
        subtitleElement.style.color = "";
      }

      titleElement.classList.remove("animate__fadeOut");
      subtitleElement.classList.remove("animate__fadeOut");
      titleElement.classList.add("animate__fadeIn");
      subtitleElement.classList.add("animate__fadeIn");

      index = (index + 1) % titles.length;
    }, 1000);
  }

  setInterval(changeTitle, 3000);
});
