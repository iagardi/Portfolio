import calculatorPhoto from '../assets/images/calculator.png'
import morseTranslatorPhoto from '../assets/images/morse-translator.png'
import snakePhoto from '../assets/images/snake.png'
import punkPhoto from '../assets/images/punk-api.png'
import lujam from '../assets/images/lujam.png'

const projects = [{
      name: "Lujam",
      description: "A real-life client project where we were tasked to rebuild the user interface of a cyber security firm. We used Trello for our ticket system, ran weekly sprints with presenting to the client each Friday and I was the Project Manager for week 1.",
      technology: ["react", "firebase"],
      hostedURL: "https://lujam-jersey.web.app/",
      githubURL: "https://github.com/nology-tech/jersey-client-project",
      photo: lujam
   },
   {
      name: "Calculator",
      description: "A simple calculator project, created in the 4th week of the _nology course",
      technology: ["html", "sass", "javascript", "cypress"],
      hostedURL: "https://iagardi.github.io/Calculator/",
      githubURL: "https://github.com/iagardi/Calculator",
      photo: calculatorPhoto
   }, {
      name: "Morse translator",
      description: "An English-to-morse and morse-to-English translator, created on the 5th week of the _nology course",
      technology: ["html", "sass", "javascript"],
      hostedURL: "https://iagardi.github.io/morse-translator/",
      githubURL: "https://github.com/iagardi/morse-translator",
      photo: morseTranslatorPhoto
   }, {
      name: "Snake",
      description: "My remake of Nokia's classic Snake game, created as an open, 'write a game of your choice' challenge",
      technology: ["html", "sass", "javascript"],
      hostedURL: "https://iagardi.github.io/Snake/",
      githubURL: "https://github.com/iagardi/Snake",
      photo: snakePhoto
   }, {
      name: "Punk API",
      description: "A small web app to browse and search the products of Brewdog, using the data from 'https://punkapi.com/'",
      technology: ["react"],
      hostedURL: "https://iagardi.github.io/Punk-API/",
      githubURL: "https://github.com/iagardi/Punk-API",
      photo: punkPhoto
   },
]

export default projects