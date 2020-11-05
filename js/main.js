class Spa {
  constructor() {
    this.views = {
      home: document.getElementById("home"),
      portfolio: document.getElementById("portfolio"),
      about: document.getElementById("about"),
      contact: document.getElementById("contact"),
    }
    this.links = {
      home: document.getElementById("home-link"),
      portfolio: document.getElementById("portfolio-link"),
      about: document.getElementById("about-link"),
      contact: document.getElementById("contact-link"),
    }
  }

  setupLinks() {
    for (let link in this.links) {
      this.links[link].addEventListener("click", (e) => {
        let linkID = e.target.id;
        let viewToShow = linkID.slice(0, -5);
        this.showView(viewToShow);
      });
    }
  }

  showView(receivedView = "home") {
    for (let view in this.views) {
      this.views[view].classList.add("hidden");
      if (receivedView === view) {
        this.views[view].classList.remove("hidden");
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Final Portfolio VII...");
  console.log("A A R ©MMXX");
  const mySpa = new Spa();
  mySpa.setupLinks();
});