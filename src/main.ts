import { Bejegyzes } from "./bejegyzes"

let lista: Bejegyzes[] = [];
const kiiras = document.getElementById("kiiras") as HTMLElement;
const alert = document.getElementById("alert") as HTMLDivElement;

function megjelenit() {
  kiiras.innerHTML = "";
  alert.hidden = true;
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

function formSubmit(e: SubmitEvent) {
  e.preventDefault();
  try 
  {
    const cim = document.getElementById("cim") as HTMLInputElement;
    const tartalom = document.getElementById("content") as HTMLInputElement; 
    const color = document.getElementById("color") as HTMLInputElement;
    
    // console.log(cim.value,tartalom.value,color.value);
    lista.push(new Bejegyzes(cim.value,tartalom.value,color.value));
    cim.value = "";
    tartalom.value = "";
    color.value = "";
    megjelenit();
  }
  catch (err)
  {
    if( err instanceof Error)
    {
      alert.innerHTML = `<strong>Hiba!</strong> ${err.message}`;
      alert.hidden = false;
    }
  }
}

function init() {
  lista.push(new Bejegyzes("cim1", "ez tartalom", "#F78A72"));
  lista.push(new Bejegyzes("cim2", "ez a masik tartalom", "#72F78D"));
  // console.log(lista);
  megjelenit();
}

document.addEventListener("DOMContentLoaded",init);
document.getElementById("form")?.addEventListener("submit",formSubmit);