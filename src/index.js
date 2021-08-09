import example from './images/smoke.png';
import imgSvg from './images/flat.svg';
import { xxxx } from './experiment';
import './styles/main.scss';
console.log('Hello World!!');
// const xxxx = (a,b) => a+b
console.log(xxxx(2,3));
//Create a class property without a constructor

class Game {
   name = "Violin Charades";
}

const myGame = new Game();
//Create paragraph node

const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

//Create heading node

const heading = document.createElement("h1");
heading.textContent = "Interesting!";

//Append SVG and heading nodes to the DOM

const app = document.querySelector("#root");
app.append(heading, p);

const img = document.createElement('img');
img.src = example;
app.append(img);

const svgImg = document.createElement('img');
svgImg.src = imgSvg;
app.append(svgImg);
