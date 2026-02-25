import { Bejegyzes } from "./bejegyzes"
import "./style.css"

let lista: Bejegyzes[] = [];
const kiiras = document.getElementById("kiiras") as HTMLElement;

function megjelenit() {
  lista.forEach(blog => {
    const article = document.createElement("article") as HTMLElement;
    const h2 = document.createElement("h2") as HTMLHeadingElement;
    const p = document.createElement("p") as HTMLParagraphElement;

    article.style = `color: ${blog.color}`;
    h2.textContent = blog.title;
    p.textContent = blog.content;
    kiiras.appendChild(article);
    article.appendChild(h2);
    article.appendChild(p);
  })
}

function init() {
  lista.push(new Bejegyzes("cim1", "ez tartalom", "#F78A72"));
  lista.push(new Bejegyzes("cim2", "ez a masik tartalom", "#72F78D"));
  console.log(lista);
  megjelenit();
}

document.addEventListener("DOMContentLoaded",init);