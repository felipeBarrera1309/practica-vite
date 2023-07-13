import "./public/assets/css/main.css";
import './util';
import javascriptLogo from './public/javascript.svg';
import viteLogo from './public/vite.svg';
import { setupCounter } from './counter.js';
import img from './sass-logo.png';
import imgLogo from './public/assets/css/modules/logo.module.scss';
import { user } from './data.json';
import { showName } from './services/deliverys.js';
import { currencyFormat } from "./util";


const modules = import.meta.glob('./modules/*.js')
for(let value in modules){
  const module = await modules[value]()
  module.load()
  console.log('Estos son los datos recibidos de las importanciones dinamicas: ', module);
}

const { name } = user


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.de-v" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <img id="logo-sass" src="${img}" alt="logoSass" width="200" />.
    <h1>Hello FELIPE!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="showFunctions" type="button" >show</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p>${currencyFormat(50000000)}</p>
    
  </div>
`

document.getElementById('logo-sass').setAttribute('class', imgLogo.img)
document.querySelector('#showFunctions').addEventListener('click', () => {
  console.log('Esta es la function que me trae el nombre: ', showName('Felipe Barrera'));
})

setupCounter(document.querySelector('#counter'))
