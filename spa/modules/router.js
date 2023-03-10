import { info } from "./api.js";
import { updateData } from "./render.js";

const routerView = document.getElementById("router-view");
let filteredArray;

export function onRouteChanged() {
    const hash = window.location.hash;

    if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering");
    }

    switch (hash) {
        case '#about':
            about();
            break;
        case "#home":
            home();
            break;
        default:
            notFound();
            break;
    }
}

function about() {
    routerView.innerHTML = `<section id="about">
                                        <div class="title-box">
                                            <h3>About</h3>
                                            <hr/>
                                        </div>
                                        <h4></h4>
                                        <footer>
                                            <span>© 2023 Creator of The Quotes Room</span>
                                        </footer>
                                    </section>`;

    const aboutH = document.querySelector("h4");

    filterArray();
    aboutH.innerHTML = filteredArray[0].quote
  
}

function home() {
    window.location = "index.html"
}

function notFound() {
    routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
}

function filterArray() {
    filteredArray = updateData.filter(item => {
        return item.author.includes("Vona Magdalena")
    })
}