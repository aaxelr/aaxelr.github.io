// Class with references to the views, links and pointer images as well as the document title.
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

    this.title = document.title;
  }

  // Setting up all links with event listeners that show the corresponing view and pointer.
  setupLinks() {
    for (let link in this.links) {
      this.links[link].addEventListener("click", (e) => {
        let linkID = e.target.id;
        let viewToShow = linkID.slice(0, -5);
        let pointerToShow = `${viewToShow}-pointer`;
        this.showView(viewToShow);
        this.showPointer(pointerToShow);
      });

      // Events mouseover and mouseout simulates a hover effect for links.
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

  // Hiding all views, showing active view and setting the title accordingly.
  showView(receivedView = "home") {
    for (let view in this.views) {
      this.views[view].classList.add("hidden");
      if (receivedView === view) {
        this.views[view].classList.remove("hidden");
        document.title = this.title;
        document.title += ` - ${view[0].toUpperCase()}${view.slice(1)}`;
      }
    }
  }

  // Hiding all pointers, showing pointer for active link.
  showPointer(receivedPointer = "home-pointer") {
    for (let pointer in this.pointers) {
      this.pointers[pointer].classList.add("hidden");
      if (receivedPointer === `${pointer}-pointer`) {
        this.pointers[pointer].classList.remove("hidden");
      }
    }
  }
}

// Creating new Spa object when DOM is loaded.
document.addEventListener("DOMContentLoaded", () => {
  console.log("A A R ©MMXX");
  console.log("Final Portfolio VII...");
  const mySpa = new Spa();
  mySpa.setupLinks();
});