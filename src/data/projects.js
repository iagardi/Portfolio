import calculatorPhoto from '../assets/images/calculator.png'
import morseTranslatorPhoto from '../assets/images/morse-translator.png'
import snakePhoto from '../assets/images/snake.png'
import punkPhoto from '../assets/images/punk-api.png'

const projects = [{
   name: "Calculator",
   description: "A simple calculator project, created in the n-th week of the _nology course",
   technology: ["html", "sass", "javascript", "cypress"],
   hostedURL: "https://iagardi.github.io/Calculator/",
   githubURL: "https://github.com/iagardi/Calculator",
   photo: calculatorPhoto
}, {
   name: "Morse translator",
   description: "An English-to-morse and morse-to-English translator, created on the n-th week of the _nology course",
   technology: ["html", "sass", "javascript"],
   hostedURL: "https://iagardi.github.io/morse-translator/",
   githubURL: "https://github.com/iagardi/morse-translator",
   photo: morseTranslatorPhoto
}, {
   name: "Punk API",
   description: "A small web app to browse and search the products of Brewdog, using the data from 'https://punkapi.com/'",
   technology: ["react"],
   hostedURL: "https://iagardi.github.io/Punk-API/",
   githubURL: "https://github.com/iagardi/Punk-API",
   photo: punkPhoto
}, {
   name: "Snake",
   description: "My remake of Nokia's classic Snake game",
   technology: ["html", "sass", "javascript"],
   hostedURL: "https://iagardi.github.io/Snake/",
   githubURL: "https://github.com/iagardi/Snake",
   photo: snakePhoto
}]

export default projects