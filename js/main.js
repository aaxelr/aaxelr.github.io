class Spa {
  constructor() {
    this.views = Array.from(document.getElementsByTagName("section"));
    this.menu = {
      home: document.getElementById("home-link"),
      portfolio: document.getElementById("portfolio-link"),
      about: document.getElementById("about-link"),
      contact: document.getElementById("contact-link"),
    }
  }

  setupMenu() {
    for (let link in this.menu) {
      this.menu[link].addEventListener("click", function () {
        console.log(`You clicked on ${link}`);
        console.log(this.id);
      });
    }
  }

  showView(clickedView = "home-link") {
    this.views.forEach((view) => {
      view.classList.add("hidden");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Final Portfolio VII...");
  const mySpa = new Spa();
  mySpa.setupMenu();

});