import { Bejegyzes } from "./bejegyzes"
import "./style.css"

let lista: Bejegyzes[] = [];

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function init() {
  lista.push(new Bejegyzes("cim1", "ez tartalom", "#F78A72"));
  lista.push(new Bejegyzes("cim2", "ez a masik tartalom", "#72F78D"));
  console.log(lista);
}

document.addEventListener("DOMContentLoaded",init)