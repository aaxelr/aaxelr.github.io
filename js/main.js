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
    this.pointers = {
      home: document.getElementById("home-pointer"),
      portfolio: document.getElementById("portfolio-pointer"),
      about: document.getElementById("about-pointer"),
      contact: document.getElementById("contact-pointer"),
    }
  }

  setupLinks() {
    for (let link in this.links) {
      this.links[link].addEventListener("click", (e) => {
        let linkID = e.target.id;
        let viewToShow = linkID.slice(0, -5);
        let pointerToShow = `${viewToShow}-pointer`;
        this.showView(viewToShow);
        this.showPointer(pointerToShow);
      });

      this.links[link].addEventListener("mouseover", (e) => {
        let linkID = e.target.id;
        let pointerToShow = `${linkID.slice(0, -5)}-pointer`;
        this.showPointer(pointerToShow);
      });

      this.links[link].addEventListener("mouseout", (e) => {
        for (let view in this.views) {
          if (this.views[view].classList != "hidden") {
            let activeView = `${this.views[view].id}-pointer`;
            this.showPointer(activeView);
          }
        }
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

  showPointer(receivedPointer = "home-pointer") {
    for (let pointer in this.pointers) {
      this.pointers[pointer].classList.add("hidden");
      if (receivedPointer === `${pointer}-pointer`) {
        this.pointers[pointer].classList.remove("hidden");
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