import './App.css';
import React from 'react';
import { useState} from 'react';


function App() {
//constants***************************************************************************************************************//
//inputs de mis barcos***********************************//
const [myShips,setMyShips] = useState('');
const [myShips1,setMyShips1] = useState('');
const [myShips2,setMyShips2] = useState('');
const [myShips3,setMyShips3] = useState('');
const [myShips4,setMyShips4] = useState('');
//submits de mis barcos***********************************//
const [sendShips,setSendShips] = useState([]);
const [sendShip1, setSendShip1] = useState([]);
const [sendShip2, setSendShip2] = useState([]);
const [sendShip3, setSendShip3] = useState([]);
const [sendShip4, setSendShip4] = useState([]);
//Barcos enemigos****************************//
const [enemyShips, setEnemyShips] = useState([]);
//acción de ataque******************//
const [shotA1, setShotA1] = useState([]);
const [shotA2, setShotA2] = useState([]);
const [shotA3, setShotA3] = useState([]);
const [shotA4, setShotA4] = useState([]);
const [shotA5, setShotA5] = useState([]);
const [shotA6, setShotA6] = useState([]);
const [shotA7, setShotA7] = useState([]);
const [shotA8, setShotA8] = useState([]);
const [shotA9, setShotA9] = useState([]);
const [shotB1, setShotB1] = useState([]);
const [shotB2, setShotB2] = useState([]);
const [shotB3, setShotB3] = useState([]);
const [shotB4, setShotB4] = useState([]);
const [shotB5, setShotB5] = useState([]);
const [shotB6, setShotB6] = useState([]);
const [shotB7, setShotB7] = useState([]);
const [shotB8, setShotB8] = useState([]);
const [shotB9, setShotB9] = useState([]);
const [shotC1, setShotC1] = useState([]);
const [shotC2, setShotC2] = useState([]);
const [shotC3, setShotC3] = useState([]);
const [shotC4, setShotC4] = useState([]);
const [shotC5, setShotC5] = useState([]);
const [shotC6, setShotC6] = useState([]);
const [shotC7, setShotC7] = useState([]);
const [shotC8, setShotC8] = useState([]);
const [shotC9, setShotC9] = useState([]);
const [shotD1, setShotD1] = useState([]);
const [shotD2, setShotD2] = useState([]);
const [shotD3, setShotD3] = useState([]);
const [shotD4, setShotD4] = useState([]);
const [shotD5, setShotD5] = useState([]);
const [shotD6, setShotD6] = useState([]);
const [shotD7, setShotD7] = useState([]);
const [shotD8, setShotD8] = useState([]);
const [shotD9, setShotD9] = useState([]);
const [shotE1, setShotE1] = useState([]);
const [shotE2, setShotE2] = useState([]);
const [shotE3, setShotE3] = useState([]);
const [shotE4, setShotE4] = useState([]);
const [shotE5, setShotE5] = useState([]);
const [shotE6, setShotE6] = useState([]);
const [shotE7, setShotE7] = useState([]);
const [shotE8, setShotE8] = useState([]);
const [shotE9, setShotE9] = useState([]);
const [shotF1, setShotF1] = useState([]);
const [shotF2, setShotF2] = useState([]);
const [shotF3, setShotF3] = useState([]);
const [shotF4, setShotF4] = useState([]);
const [shotF5, setShotF5] = useState([]);
const [shotF6, setShotF6] = useState([]);
const [shotF7, setShotF7] = useState([]);
const [shotF8, setShotF8] = useState([]);
const [shotF9, setShotF9] = useState([]);
const [shotG1, setShotG1] = useState([]);
const [shotG2, setShotG2] = useState([]);
const [shotG3, setShotG3] = useState([]);
const [shotG4, setShotG4] = useState([]);
const [shotG5, setShotG5] = useState([]);
const [shotG6, setShotG6] = useState([]);
const [shotG7, setShotG7] = useState([]);
const [shotG8, setShotG8] = useState([]);
const [shotG9, setShotG9] = useState([]);
const [shotH1, setShotH1] = useState([]);
const [shotH2, setShotH2] = useState([]);
const [shotH3, setShotH3] = useState([]);
const [shotH4, setShotH4] = useState([]);
const [shotH5, setShotH5] = useState([]);
const [shotH6, setShotH6] = useState([]);
const [shotH7, setShotH7] = useState([]);
const [shotH8, setShotH8] = useState([]);
const [shotH9, setShotH9] = useState([]);
const [shotI1, setShotI1] = useState([]);
const [shotI2, setShotI2] = useState([]);
const [shotI3, setShotI3] = useState([]);
const [shotI4, setShotI4] = useState([]);
const [shotI5, setShotI5] = useState([]);
const [shotI6, setShotI6] = useState([]);
const [shotI7, setShotI7] = useState([]);
const [shotI8, setShotI8] = useState([]);
const [shotI9, setShotI9] = useState([]);

const fireTorpedo = () => {
  console.log('attack')
  
}

//posicionar barcos enemigos**************************//
const placeEnemyShips = () => {
  setEnemyShips([ships,...enemyShips])
}//posicionar Mis barcos*************************************************************************************//
const placeMyShips = (e) => {
setMyShips(e.target.value)
} 
const placeMyShips1 = (e) => {
  setMyShips1(e.target.value)
  } 
const placeMyShips2 = (e) => {
    setMyShips2(e.target.value)
    } 
const placeMyShips3 = (e) => {
  setMyShips3(e.target.value)
  } 
const placeMyShips4 = (e) => {
    setMyShips4(e.target.value)
}
const sendMyShips = () => {
setSendShips([myShips])
}
const sendMyShip1 = () => {
  setSendShip1([myShips1])
  }
const sendMyShip2 = () => {
  setSendShip2([myShips2])
  }
const sendMyShip3 = () => {
  setSendShip3([myShips3])
 }
const sendMyShip4 = () => {
  setSendShip4([myShips4])
 }



let letter = ['A','B','C','D','E','F','G','H','I'];
let number = ['1','2','3','4','5','6','7','8','9'];
let ships = [];

  ships += letter[Math.floor(Math.random() * letter.length)] + number[Math.floor(Math.random() * number.length)];




console.log(enemyShips)
console.log(shotA3)
console.log(shotA4)
console.log(ships)
//en orden descendente://
//inputs para colocar los barcos//
//botón para colocar los barcos enemigos//
//tablero del jugador//
//tablero enemigo//
  return (<div>
    <div className='instrucciones'>Ingresa coordenadas para cada barco. Presiona el botón hasta 5 veces para agregar enemigos</div>
    <input onChange={placeMyShips}></input>
    <button onClick={sendMyShips}>submit</button>
    <input onChange={placeMyShips1}></input>
    <button onClick={sendMyShip1}>submit</button>
    <input onChange={placeMyShips2}></input>
    <button onClick={sendMyShip2}>submit</button>
    <input onChange={placeMyShips3}></input>
    <button onClick={sendMyShip3}>submit</button>
    <input onChange={placeMyShips4}></input>
    <button onClick={sendMyShip4}>submit</button>

    <button onClick={placeEnemyShips}>Enemigos</button>

    <div className="container d-flex">
    <div className="row row-cols-3">
      <div className="col-1 gridborder top side"></div>
      <div className="col-1 gridborder top">1</div>
      <div className="col-1 gridborder top">2</div>
      <div className="col-1 gridborder top">3</div>
      <div className="col-1 gridborder top">4</div>
      <div className="col-1 gridborder top">5</div>
      <div className="col-1 gridborder top">6</div>
      <div className="col-1 gridborder top">7</div>
      <div className="col-1 gridborder top">8</div>
      <div className="col-1 gridborder top">9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">A</div>
      <div className={"col-1 A1" + (sendShips == "A1" ? " ship" : sendShip1 == "A1" ? " ship" : sendShip2 == "A1" ? " ship" : sendShip3 == "A1" ? " ship" : sendShip4 == "A1" ? " ship" :   "")}>A1</div>
      <div className={"col-1 A2" + (sendShips == "A2" ? " ship" : sendShip1 == "A2" ? " ship" : sendShip2 == "A2" ? " ship" : sendShip3 == "A2" ? " ship" : sendShip4 == "A2" ? " ship" :   "")}>A2</div>
      <div className={"col-1 A3" + (sendShips == "A3" ? " ship" : sendShip1 == "A3" ? " ship" : sendShip2 == "A3" ? " ship" : sendShip3 == "A3" ? " ship" : sendShip4 == "A3" ? " ship" :   "")}>A3</div>
      <div className={"col-1 A4" + (sendShips == "A4" ? " ship" : sendShip1 == "A4" ? " ship" : sendShip2 == "A4" ? " ship" : sendShip3 == "A4" ? " ship" : sendShip4 == "A4" ? " ship" :   "")}>A4</div>
      <div className={"col-1 A5" + (sendShips == "A5" ? " ship" : sendShip1 == "A5" ? " ship" : sendShip2 == "A5" ? " ship" : sendShip3 == "A5" ? " ship" : sendShip4 == "A5" ? " ship" :   "")}>A5</div>
      <div className={"col-1 A6" + (sendShips == "A6" ? " ship" : sendShip1 == "A6" ? " ship" : sendShip2 == "A6" ? " ship" : sendShip3 == "A6" ? " ship" : sendShip4 == "A6" ? " ship" :   "")}>A6</div>
      <div className={"col-1 A7" + (sendShips == "A7" ? " ship" : sendShip1 == "A7" ? " ship" : sendShip2 == "A7" ? " ship" : sendShip3 == "A7" ? " ship" : sendShip4 == "A7" ? " ship" :   "")}>A7</div>
      <div className={"col-1 A8" + (sendShips == "A8" ? " ship" : sendShip1 == "A8" ? " ship" : sendShip2 == "A8" ? " ship" : sendShip3 == "A8" ? " ship" : sendShip4 == "A8" ? " ship" :   "")}>A8</div>
      <div className={"col-1 A9" + (sendShips == "A9" ? " ship" : sendShip1 == "A9" ? " ship" : sendShip2 == "A9" ? " ship" : sendShip3 == "A9" ? " ship" : sendShip4 == "A9" ? " ship" :   "")}>A9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">B</div>
      <div className={"col-1 B1" + (sendShips == "B1" ? " ship" : sendShip1 == "B1" ? " ship" : sendShip2 == "B1" ? " ship" : sendShip3 == "B1" ? " ship" : sendShip4 == "B1" ? " ship" :   "")}>B1</div>
      <div className={"col-1 B2" + (sendShips == "B2" ? " ship" : sendShip1 == "B2" ? " ship" : sendShip2 == "B2" ? " ship" : sendShip3 == "B2" ? " ship" : sendShip4 == "B2" ? " ship" :   "")}>B2</div>
      <div className={"col-1 B3" + (sendShips == "B3" ? " ship" : sendShip1 == "B3" ? " ship" : sendShip2 == "B3" ? " ship" : sendShip3 == "B3" ? " ship" : sendShip4 == "B3" ? " ship" :   "")}>B3</div>
      <div className={"col-1 B4" + (sendShips == "B4" ? " ship" : sendShip1 == "B4" ? " ship" : sendShip2 == "B4" ? " ship" : sendShip3 == "B4" ? " ship" : sendShip4 == "B4" ? " ship" :   "")}>B4</div>
      <div className={"col-1 B5" + (sendShips == "B5" ? " ship" : sendShip1 == "B5" ? " ship" : sendShip2 == "B5" ? " ship" : sendShip3 == "B5" ? " ship" : sendShip4 == "B5" ? " ship" :   "")}>B5</div>
      <div className={"col-1 B6" + (sendShips == "B6" ? " ship" : sendShip1 == "B6" ? " ship" : sendShip2 == "B6" ? " ship" : sendShip3 == "B6" ? " ship" : sendShip4 == "B6" ? " ship" :   "")}>B6</div>
      <div className={"col-1 B7" + (sendShips == "B7" ? " ship" : sendShip1 == "B7" ? " ship" : sendShip2 == "B7" ? " ship" : sendShip3 == "B7" ? " ship" : sendShip4 == "B7" ? " ship" :   "")}>B7</div>
      <div className={"col-1 B8" + (sendShips == "B8" ? " ship" : sendShip1 == "B8" ? " ship" : sendShip2 == "B8" ? " ship" : sendShip3 == "B8" ? " ship" : sendShip4 == "B8" ? " ship" :   "")}>B8</div>
      <div className={"col-1 B9" + (sendShips == "B9" ? " ship" : sendShip1 == "B9" ? " ship" : sendShip2 == "B9" ? " ship" : sendShip3 == "B9" ? " ship" : sendShip4 == "B9" ? " ship" :   "")}>B9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">C</div>
      <div className={"col-1 C1" + (sendShips == "C1" ? " ship" : sendShip1 == "C1" ? " ship" : sendShip2 == "C1" ? " ship" : sendShip3 == "C1" ? " ship" : sendShip4 == "C1" ? " ship" :   "")}>C1</div>
      <div className={"col-1 C2" + (sendShips == "C2" ? " ship" : sendShip1 == "C2" ? " ship" : sendShip2 == "C2" ? " ship" : sendShip3 == "C2" ? " ship" : sendShip4 == "C2" ? " ship" :   "")}>C2</div>
      <div className={"col-1 C3" + (sendShips == "C3" ? " ship" : sendShip1 == "C3" ? " ship" : sendShip2 == "C3" ? " ship" : sendShip3 == "C3" ? " ship" : sendShip4 == "C3" ? " ship" :   "")}>C3</div>
      <div className={"col-1 C4" + (sendShips == "C4" ? " ship" : sendShip1 == "C4" ? " ship" : sendShip2 == "C4" ? " ship" : sendShip3 == "C4" ? " ship" : sendShip4 == "C4" ? " ship" :   "")}>C4</div>
      <div className={"col-1 C5" + (sendShips == "C5" ? " ship" : sendShip1 == "C5" ? " ship" : sendShip2 == "C5" ? " ship" : sendShip3 == "C5" ? " ship" : sendShip4 == "C5" ? " ship" :   "")}>C5</div>
      <div className={"col-1 C6" + (sendShips == "C6" ? " ship" : sendShip1 == "C6" ? " ship" : sendShip2 == "C6" ? " ship" : sendShip3 == "C6" ? " ship" : sendShip4 == "C6" ? " ship" :   "")}>C6</div>
      <div className={"col-1 C7" + (sendShips == "C7" ? " ship" : sendShip1 == "C7" ? " ship" : sendShip2 == "C7" ? " ship" : sendShip3 == "C7" ? " ship" : sendShip4 == "C7" ? " ship" :   "")}>C7</div>
      <div className={"col-1 C8" + (sendShips == "C8" ? " ship" : sendShip1 == "C8" ? " ship" : sendShip2 == "C8" ? " ship" : sendShip3 == "C8" ? " ship" : sendShip4 == "C8" ? " ship" :   "")}>C8</div>
      <div className={"col-1 C9" + (sendShips == "C9" ? " ship" : sendShip1 == "C9" ? " ship" : sendShip2 == "C9" ? " ship" : sendShip3 == "C9" ? " ship" : sendShip4 == "C9" ? " ship" :   "")}>C9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">D</div>
      <div className={"col-1 D1" + (sendShips == "D1" ? " ship" : sendShip1 == "D1" ? " ship" : sendShip2 == "D1" ? " ship" : sendShip3 == "D1" ? " ship" : sendShip4 == "D1" ? " ship" :   "")} onClick={fireTorpedo}>D1</div>
      <div className={"col-1 D2" + (sendShips == "D2" ? " ship" : sendShip1 == "D2" ? " ship" : sendShip2 == "D2" ? " ship" : sendShip3 == "D2" ? " ship" : sendShip4 == "D2" ? " ship" :   "")} onClick={fireTorpedo}>D2</div>
      <div className={"col-1 D3" + (sendShips == "D3" ? " ship" : sendShip1 == "D3" ? " ship" : sendShip2 == "D3" ? " ship" : sendShip3 == "D3" ? " ship" : sendShip4 == "D3" ? " ship" :   "")} onClick={fireTorpedo}>D3</div>
      <div className={"col-1 D4" + (sendShips == "D4" ? " ship" : sendShip1 == "D4" ? " ship" : sendShip2 == "D4" ? " ship" : sendShip3 == "D4" ? " ship" : sendShip4 == "D4" ? " ship" :   "")} onClick={fireTorpedo}>D4</div>
      <div className={"col-1 D5" + (sendShips == "D5" ? " ship" : sendShip1 == "D5" ? " ship" : sendShip2 == "D5" ? " ship" : sendShip3 == "D5" ? " ship" : sendShip4 == "D5" ? " ship" :   "")} onClick={fireTorpedo}>D5</div>
      <div className={"col-1 D6" + (sendShips == "D6" ? " ship" : sendShip1 == "D6" ? " ship" : sendShip2 == "D6" ? " ship" : sendShip3 == "D6" ? " ship" : sendShip4 == "D6" ? " ship" :   "")} onClick={fireTorpedo}>D6</div>
      <div className={"col-1 D7" + (sendShips == "D7" ? " ship" : sendShip1 == "D7" ? " ship" : sendShip2 == "D7" ? " ship" : sendShip3 == "D7" ? " ship" : sendShip4 == "D7" ? " ship" :   "")} onClick={fireTorpedo}>D7</div>
      <div className={"col-1 D8" + (sendShips == "D8" ? " ship" : sendShip1 == "D8" ? " ship" : sendShip2 == "D8" ? " ship" : sendShip3 == "D8" ? " ship" : sendShip4 == "D8" ? " ship" :   "")} onClick={fireTorpedo}>D8</div>
      <div className={"col-1 D9" + (sendShips == "D9" ? " ship" : sendShip1 == "D9" ? " ship" : sendShip2 == "D9" ? " ship" : sendShip3 == "D9" ? " ship" : sendShip4 == "D9" ? " ship" :   "")} onClick={fireTorpedo}>D9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">E</div>
      <div className={"col-1 E1" + (sendShips == "E1" ? " ship" : sendShip1 == "E1" ? " ship" : sendShip2 == "E1" ? " ship" : sendShip3 == "E1" ? " ship" : sendShip4 == "E1" ? " ship" :   "")} onClick={fireTorpedo}>E1</div>
      <div className={"col-1 E2" + (sendShips == "E2" ? " ship" : sendShip1 == "E2" ? " ship" : sendShip2 == "E2" ? " ship" : sendShip3 == "E2" ? " ship" : sendShip4 == "E2" ? " ship" :   "")} onClick={fireTorpedo}>E2</div>
      <div className={"col-1 E3" + (sendShips == "E3" ? " ship" : sendShip1 == "E3" ? " ship" : sendShip2 == "E3" ? " ship" : sendShip3 == "E3" ? " ship" : sendShip4 == "E3" ? " ship" :   "")} onClick={fireTorpedo}>E3</div>
      <div className={"col-1 E4" + (sendShips == "E4" ? " ship" : sendShip1 == "E4" ? " ship" : sendShip2 == "E4" ? " ship" : sendShip3 == "E4" ? " ship" : sendShip4 == "E4" ? " ship" :   "")} onClick={fireTorpedo}>E4</div>
      <div className={"col-1 E5" + (sendShips == "E5" ? " ship" : sendShip1 == "E5" ? " ship" : sendShip2 == "E5" ? " ship" : sendShip3 == "E5" ? " ship" : sendShip4 == "E5" ? " ship" :   "")} onClick={fireTorpedo}>E5</div>
      <div className={"col-1 E6" + (sendShips == "E6" ? " ship" : sendShip1 == "E6" ? " ship" : sendShip2 == "E6" ? " ship" : sendShip3 == "E6" ? " ship" : sendShip4 == "E6" ? " ship" :   "")} onClick={fireTorpedo}>E6</div>
      <div className={"col-1 E7" + (sendShips == "E7" ? " ship" : sendShip1 == "E7" ? " ship" : sendShip2 == "E7" ? " ship" : sendShip3 == "E7" ? " ship" : sendShip4 == "E7" ? " ship" :   "")} onClick={fireTorpedo}>E7</div>
      <div className={"col-1 E8" + (sendShips == "E8" ? " ship" : sendShip1 == "E8" ? " ship" : sendShip2 == "E8" ? " ship" : sendShip3 == "E8" ? " ship" : sendShip4 == "E8" ? " ship" :   "")} onClick={fireTorpedo}>E8</div>
      <div className={"col-1 E9" + (sendShips == "E9" ? " ship" : sendShip1 == "E9" ? " ship" : sendShip2 == "E9" ? " ship" : sendShip3 == "E9" ? " ship" : sendShip4 == "E9" ? " ship" :   "")} onClick={fireTorpedo}>E9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">F</div>
      <div className={"col-1 F1" + (sendShips == "F1" ? " ship" : sendShip1 == "F1" ? " ship" : sendShip2 == "F1" ? " ship" : sendShip3 == "F1" ? " ship" : sendShip4 == "F1" ? " ship" :   "")} onClick={fireTorpedo}>F1</div>
      <div className={"col-1 F2" + (sendShips == "F2" ? " ship" : sendShip1 == "F2" ? " ship" : sendShip2 == "F2" ? " ship" : sendShip3 == "F2" ? " ship" : sendShip4 == "F2" ? " ship" :   "")} onClick={fireTorpedo}>F2</div>
      <div className={"col-1 F3" + (sendShips == "F3" ? " ship" : sendShip1 == "F3" ? " ship" : sendShip2 == "F3" ? " ship" : sendShip3 == "F3" ? " ship" : sendShip4 == "F3" ? " ship" :   "")} onClick={fireTorpedo}>F3</div>
      <div className={"col-1 F4" + (sendShips == "F4" ? " ship" : sendShip1 == "F4" ? " ship" : sendShip2 == "F4" ? " ship" : sendShip3 == "F4" ? " ship" : sendShip4 == "F4" ? " ship" :   "")} onClick={fireTorpedo}>F4</div>
      <div className={"col-1 F5" + (sendShips == "F5" ? " ship" : sendShip1 == "F5" ? " ship" : sendShip2 == "F5" ? " ship" : sendShip3 == "F5" ? " ship" : sendShip4 == "F5" ? " ship" :   "")} onClick={fireTorpedo}>F5</div>
      <div className={"col-1 F6" + (sendShips == "F6" ? " ship" : sendShip1 == "F6" ? " ship" : sendShip2 == "F6" ? " ship" : sendShip3 == "F6" ? " ship" : sendShip4 == "F6" ? " ship" :   "")} onClick={fireTorpedo}>F6</div>
      <div className={"col-1 F7" + (sendShips == "F7" ? " ship" : sendShip1 == "F7" ? " ship" : sendShip2 == "F7" ? " ship" : sendShip3 == "F7" ? " ship" : sendShip4 == "F7" ? " ship" :   "")} onClick={fireTorpedo}>F7</div>
      <div className={"col-1 F8" + (sendShips == "F8" ? " ship" : sendShip1 == "F8" ? " ship" : sendShip2 == "F8" ? " ship" : sendShip3 == "F8" ? " ship" : sendShip4 == "F8" ? " ship" :   "")} onClick={fireTorpedo}>F8</div>
      <div className={"col-1 F9" + (sendShips == "F9" ? " ship" : sendShip1 == "F9" ? " ship" : sendShip2 == "F9" ? " ship" : sendShip3 == "F9" ? " ship" : sendShip4 == "F9" ? " ship" :   "")} onClick={fireTorpedo}>F9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">G</div>
      <div className={"col-1 G1" + (sendShips == "G1" ? " ship" : sendShip1 == "G1" ? " ship" : sendShip2 == "G1" ? " ship" : sendShip3 == "G1" ? " ship" : sendShip4 == "G1" ? " ship" :   "")} onClick={fireTorpedo}>G1</div>
      <div className={"col-1 G2" + (sendShips == "G2" ? " ship" : sendShip1 == "G2" ? " ship" : sendShip2 == "G2" ? " ship" : sendShip3 == "G2" ? " ship" : sendShip4 == "G2" ? " ship" :   "")} onClick={fireTorpedo}>G2</div>
      <div className={"col-1 G3" + (sendShips == "G3" ? " ship" : sendShip1 == "G3" ? " ship" : sendShip2 == "G3" ? " ship" : sendShip3 == "G3" ? " ship" : sendShip4 == "G3" ? " ship" :   "")} onClick={fireTorpedo}>G3</div>
      <div className={"col-1 G4" + (sendShips == "G4" ? " ship" : sendShip1 == "G4" ? " ship" : sendShip2 == "G4" ? " ship" : sendShip3 == "G4" ? " ship" : sendShip4 == "G4" ? " ship" :   "")} onClick={fireTorpedo}>G4</div>
      <div className={"col-1 G5" + (sendShips == "G5" ? " ship" : sendShip1 == "G5" ? " ship" : sendShip2 == "G5" ? " ship" : sendShip3 == "G5" ? " ship" : sendShip4 == "G5" ? " ship" :   "")} onClick={fireTorpedo}>G5</div>
      <div className={"col-1 G6" + (sendShips == "G6" ? " ship" : sendShip1 == "G6" ? " ship" : sendShip2 == "G6" ? " ship" : sendShip3 == "G6" ? " ship" : sendShip4 == "G6" ? " ship" :   "")} onClick={fireTorpedo}>G6</div>
      <div className={"col-1 G7" + (sendShips == "G7" ? " ship" : sendShip1 == "G7" ? " ship" : sendShip2 == "G7" ? " ship" : sendShip3 == "G7" ? " ship" : sendShip4 == "G7" ? " ship" :   "")} onClick={fireTorpedo}>G7</div>
      <div className={"col-1 G8" + (sendShips == "G8" ? " ship" : sendShip1 == "G8" ? " ship" : sendShip2 == "G8" ? " ship" : sendShip3 == "G8" ? " ship" : sendShip4 == "G8" ? " ship" :   "")} onClick={fireTorpedo}>G8</div>
      <div className={"col-1 G9" + (sendShips == "G9" ? " ship" : sendShip1 == "G9" ? " ship" : sendShip2 == "G9" ? " ship" : sendShip3 == "G9" ? " ship" : sendShip4 == "G9" ? " ship" :   "")} onClick={fireTorpedo}>G9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">H</div>
      <div className={"col-1 H1" + (sendShips == "H1" ? " ship" : sendShip1 == "H1" ? " ship" : sendShip2 == "H1" ? " ship" : sendShip3 == "H1" ? " ship" : sendShip4 == "H1" ? " ship" :   "")} onClick={fireTorpedo}>H1</div>
      <div className={"col-1 H2" + (sendShips == "H2" ? " ship" : sendShip1 == "H2" ? " ship" : sendShip2 == "H2" ? " ship" : sendShip3 == "H2" ? " ship" : sendShip4 == "H2" ? " ship" :   "")} onClick={fireTorpedo}>H2</div>
      <div className={"col-1 H3" + (sendShips == "H3" ? " ship" : sendShip1 == "H3" ? " ship" : sendShip2 == "H3" ? " ship" : sendShip3 == "H3" ? " ship" : sendShip4 == "H3" ? " ship" :   "")} onClick={fireTorpedo}>H3</div>
      <div className={"col-1 H4" + (sendShips == "H4" ? " ship" : sendShip1 == "H4" ? " ship" : sendShip2 == "H4" ? " ship" : sendShip3 == "H4" ? " ship" : sendShip4 == "H4" ? " ship" :   "")} onClick={fireTorpedo}>H4</div>
      <div className={"col-1 H5" + (sendShips == "H5" ? " ship" : sendShip1 == "H5" ? " ship" : sendShip2 == "H5" ? " ship" : sendShip3 == "H5" ? " ship" : sendShip4 == "H5" ? " ship" :   "")} onClick={fireTorpedo}>H5</div>
      <div className={"col-1 H6" + (sendShips == "H6" ? " ship" : sendShip1 == "H6" ? " ship" : sendShip2 == "H6" ? " ship" : sendShip3 == "H6" ? " ship" : sendShip4 == "H6" ? " ship" :   "")} onClick={fireTorpedo}>H6</div>
      <div className={"col-1 H7" + (sendShips == "H7" ? " ship" : sendShip1 == "H7" ? " ship" : sendShip2 == "H7" ? " ship" : sendShip3 == "H7" ? " ship" : sendShip4 == "H7" ? " ship" :   "")} onClick={fireTorpedo}>H7</div>
      <div className={"col-1 H8" + (sendShips == "H8" ? " ship" : sendShip1 == "H8" ? " ship" : sendShip2 == "H8" ? " ship" : sendShip3 == "H8" ? " ship" : sendShip4 == "H8" ? " ship" :   "")} onClick={fireTorpedo}>H8</div>
      <div className={"col-1 H9" + (sendShips == "H9" ? " ship" : sendShip1 == "H9" ? " ship" : sendShip2 == "H9" ? " ship" : sendShip3 == "H9" ? " ship" : sendShip4 == "H9" ? " ship" :   "")} onClick={fireTorpedo}>H9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">I</div>
      <div className={"col-1 I1" + (sendShips == "I1" ? " ship" : sendShip1 == "I1" ? " ship" : sendShip2 == "I1" ? " ship" : sendShip3 == "I1" ? " ship" : sendShip4 == "I1" ? " ship" :   "")} onClick={fireTorpedo}>I1</div>
      <div className={"col-1 I2" + (sendShips == "I2" ? " ship" : sendShip1 == "I2" ? " ship" : sendShip2 == "I2" ? " ship" : sendShip3 == "I2" ? " ship" : sendShip4 == "I2" ? " ship" :   "")} onClick={fireTorpedo}>I2</div>
      <div className={"col-1 I3" + (sendShips == "I3" ? " ship" : sendShip1 == "I3" ? " ship" : sendShip2 == "I3" ? " ship" : sendShip3 == "I3" ? " ship" : sendShip4 == "I3" ? " ship" :   "")} onClick={fireTorpedo}>I3</div>
      <div className={"col-1 I4" + (sendShips == "I4" ? " ship" : sendShip1 == "I4" ? " ship" : sendShip2 == "I4" ? " ship" : sendShip3 == "I4" ? " ship" : sendShip4 == "I4" ? " ship" :   "")} onClick={fireTorpedo}>I4</div>
      <div className={"col-1 I5" + (sendShips == "I5" ? " ship" : sendShip1 == "I5" ? " ship" : sendShip2 == "I5" ? " ship" : sendShip3 == "I5" ? " ship" : sendShip4 == "I5" ? " ship" :   "")} onClick={fireTorpedo}>I5</div>
      <div className={"col-1 I6" + (sendShips == "I6" ? " ship" : sendShip1 == "I6" ? " ship" : sendShip2 == "I6" ? " ship" : sendShip3 == "I6" ? " ship" : sendShip4 == "I6" ? " ship" :   "")} onClick={fireTorpedo}>I6</div>
      <div className={"col-1 I7" + (sendShips == "I7" ? " ship" : sendShip1 == "I7" ? " ship" : sendShip2 == "I7" ? " ship" : sendShip3 == "I7" ? " ship" : sendShip4 == "I7" ? " ship" :   "")} onClick={fireTorpedo}>I7</div>
      <div className={"col-1 I8" + (sendShips == "I8" ? " ship" : sendShip1 == "I8" ? " ship" : sendShip2 == "I8" ? " ship" : sendShip3 == "I8" ? " ship" : sendShip4 == "I8" ? " ship" :   "")} onClick={fireTorpedo}>I8</div>
      <div className={"col-1 I9" + (sendShips == "I9" ? " ship" : sendShip1 == "I9" ? " ship" : sendShip2 == "I9" ? " ship" : sendShip3 == "I9" ? " ship" : sendShip4 == "I9" ? " ship" :   "")} onClick={fireTorpedo}>I9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
    </div>
    <div className="row row-cols-3">
    <div className="col-1 gridborder top side"></div>
      <div className="col-1 gridborder top">1</div>
      <div className="col-1 gridborder top">2</div>
      <div className="col-1 gridborder top">3</div>
      <div className="col-1 gridborder top">4</div>
      <div className="col-1 gridborder top">5</div>
      <div className="col-1 gridborder top">6</div>
      <div className="col-1 gridborder top">7</div>
      <div className="col-1 gridborder top">8</div>
      <div className="col-1 gridborder top">9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">A</div>
      <div className={"col-1 A1" + (shotA1 == "hit" ? " hit" : shotA1 == "miss" ? " miss": " ")} onClick={() => setShotA1(enemyShips.includes("A1") ? "hit" : "miss")}>A1</div>
      <div className={"col-1 A2" + (shotA2 == "hit" ? " hit" : shotA2 == "miss" ? " miss": " ")} onClick={() => setShotA2(enemyShips.includes("A2") ? "hit" : "miss")}>A2</div>
      <div className={"col-1 A3" + (shotA3 == "hit" ? " hit" : shotA3 == "miss" ? " miss": " ")} onClick={() => setShotA3(enemyShips.includes("A3") ? "hit" : "miss")}>A3</div>
      <div className={"col-1 A4" + (shotA4 == "hit" ? " hit" : shotA4 == "miss" ? " miss": " ")} onClick={() => setShotA4(enemyShips.includes("A4") ? "hit" : "miss")}>A4</div>
      <div className={"col-1 A5" + (shotA5 == "hit" ? " hit" : shotA5 == "miss" ? " miss": " ")} onClick={() => setShotA5(enemyShips.includes("A5") ? "hit" : "miss")}>A5</div>
      <div className={"col-1 A6" + (shotA6 == "hit" ? " hit" : shotA6 == "miss" ? " miss": " ")} onClick={() => setShotA6(enemyShips.includes("A6") ? "hit" : "miss")}>A6</div>
      <div className={"col-1 A7" + (shotA7 == "hit" ? " hit" : shotA7 == "miss" ? " miss": " ")} onClick={() => setShotA7(enemyShips.includes("A7") ? "hit" : "miss")}>A7</div>
      <div className={"col-1 A8" + (shotA8 == "hit" ? " hit" : shotA8 == "miss" ? " miss": " ")} onClick={() => setShotA8(enemyShips.includes("A8") ? "hit" : "miss")}>A8</div>
      <div className={"col-1 A9" + (shotA9 == "hit" ? " hit" : shotA9 == "miss" ? " miss": " ")} onClick={() => setShotA9(enemyShips.includes("A9") ? "hit" : "miss")}>A9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">B</div>
      <div className={"col-1 B1" + (shotB1 == "hit" ? " hit" : shotB1 == "miss" ? " miss": " ")} onClick={() => setShotB1(enemyShips.includes("B1") ? "hit" : "miss")}>B1</div>
      <div className={"col-1 B2" + (shotB2 == "hit" ? " hit" : shotB2 == "miss" ? " miss": " ")} onClick={() => setShotB2(enemyShips.includes("B2") ? "hit" : "miss")}>B2</div>
      <div className={"col-1 B3" + (shotB3 == "hit" ? " hit" : shotB3 == "miss" ? " miss": " ")} onClick={() => setShotB3(enemyShips.includes("B3") ? "hit" : "miss")}>B3</div>
      <div className={"col-1 B4" + (shotB4 == "hit" ? " hit" : shotB4 == "miss" ? " miss": " ")} onClick={() => setShotB4(enemyShips.includes("B4") ? "hit" : "miss")}>B4</div>
      <div className={"col-1 B5" + (shotB5 == "hit" ? " hit" : shotB5 == "miss" ? " miss": " ")} onClick={() => setShotB5(enemyShips.includes("B5") ? "hit" : "miss")}>B5</div>
      <div className={"col-1 B6" + (shotB6 == "hit" ? " hit" : shotB6 == "miss" ? " miss": " ")} onClick={() => setShotB6(enemyShips.includes("B6") ? "hit" : "miss")}>B6</div>
      <div className={"col-1 B7" + (shotB7 == "hit" ? " hit" : shotB7 == "miss" ? " miss": " ")} onClick={() => setShotB7(enemyShips.includes("B7") ? "hit" : "miss")}>B7</div>
      <div className={"col-1 B8" + (shotB8 == "hit" ? " hit" : shotB8 == "miss" ? " miss": " ")} onClick={() => setShotB8(enemyShips.includes("B8") ? "hit" : "miss")}>B8</div>
      <div className={"col-1 B9" + (shotB9 == "hit" ? " hit" : shotB9 == "miss" ? " miss": " ")} onClick={() => setShotB9(enemyShips.includes("B9") ? "hit" : "miss")}>B9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">C</div>
      <div className={"col-1 C1" + (shotC1 == "hit" ? " hit" : shotC1 == "miss" ? " miss": " ")} onClick={() => setShotC1(enemyShips.includes("C1") ? "hit" : "miss")}>C1</div>
      <div className={"col-1 C2" + (shotC2 == "hit" ? " hit" : shotC2 == "miss" ? " miss": " ")} onClick={() => setShotC2(enemyShips.includes("C2") ? "hit" : "miss")}>C2</div>
      <div className={"col-1 C3" + (shotC3 == "hit" ? " hit" : shotC3 == "miss" ? " miss": " ")} onClick={() => setShotC3(enemyShips.includes("C3") ? "hit" : "miss")}>C3</div>
      <div className={"col-1 C4" + (shotC4 == "hit" ? " hit" : shotC4 == "miss" ? " miss": " ")} onClick={() => setShotC4(enemyShips.includes("C4") ? "hit" : "miss")}>C4</div>
      <div className={"col-1 C5" + (shotC5 == "hit" ? " hit" : shotC5 == "miss" ? " miss": " ")} onClick={() => setShotC5(enemyShips.includes("C5") ? "hit" : "miss")}>C5</div>
      <div className={"col-1 C6" + (shotC6 == "hit" ? " hit" : shotC6 == "miss" ? " miss": " ")} onClick={() => setShotC6(enemyShips.includes("C6") ? "hit" : "miss")}>C6</div>
      <div className={"col-1 C7" + (shotC7 == "hit" ? " hit" : shotC7 == "miss" ? " miss": " ")} onClick={() => setShotC7(enemyShips.includes("C7") ? "hit" : "miss")}>C7</div>
      <div className={"col-1 C8" + (shotC8 == "hit" ? " hit" : shotC8 == "miss" ? " miss": " ")} onClick={() => setShotC8(enemyShips.includes("C8") ? "hit" : "miss")}>C8</div>
      <div className={"col-1 C9" + (shotC9 == "hit" ? " hit" : shotC9 == "miss" ? " miss": " ")} onClick={() => setShotC9(enemyShips.includes("C9") ? "hit" : "miss")}>C9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">D</div>
      <div className={"col-1 D1" + (shotD1 == "hit" ? " hit" : shotD1 == "miss" ? " miss": " ")} onClick={() => setShotD1(enemyShips.includes("D1") ? "hit" : "miss")}>D1</div>
      <div className={"col-1 D2" + (shotD2 == "hit" ? " hit" : shotD2 == "miss" ? " miss": " ")} onClick={() => setShotD2(enemyShips.includes("D2") ? "hit" : "miss")}>D2</div>
      <div className={"col-1 D3" + (shotD3 == "hit" ? " hit" : shotD3 == "miss" ? " miss": " ")} onClick={() => setShotD3(enemyShips.includes("D3") ? "hit" : "miss")}>D3</div>
      <div className={"col-1 D4" + (shotD4 == "hit" ? " hit" : shotD4 == "miss" ? " miss": " ")} onClick={() => setShotD4(enemyShips.includes("D4") ? "hit" : "miss")}>D4</div>
      <div className={"col-1 D5" + (shotD5 == "hit" ? " hit" : shotD5 == "miss" ? " miss": " ")} onClick={() => setShotD5(enemyShips.includes("D5") ? "hit" : "miss")}>D5</div>
      <div className={"col-1 D6" + (shotD6 == "hit" ? " hit" : shotD6 == "miss" ? " miss": " ")} onClick={() => setShotD6(enemyShips.includes("D6") ? "hit" : "miss")}>D6</div>
      <div className={"col-1 D7" + (shotD7 == "hit" ? " hit" : shotD7 == "miss" ? " miss": " ")} onClick={() => setShotD7(enemyShips.includes("D7") ? "hit" : "miss")}>D7</div>
      <div className={"col-1 D8" + (shotD8 == "hit" ? " hit" : shotD8 == "miss" ? " miss": " ")} onClick={() => setShotD8(enemyShips.includes("D8") ? "hit" : "miss")}>D8</div>
      <div className={"col-1 D9" + (shotD9 == "hit" ? " hit" : shotD9 == "miss" ? " miss": " ")} onClick={() => setShotD9(enemyShips.includes("D9") ? "hit" : "miss")}>D9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">E</div>
      <div className={"col-1 E1" + (shotE1 == "hit" ? " hit" : shotE1 == "miss" ? " miss": " ")} onClick={() => setShotE1(enemyShips.includes("E1") ? "hit" : "miss")}>E1</div>
      <div className={"col-1 E2" + (shotE2 == "hit" ? " hit" : shotE2 == "miss" ? " miss": " ")} onClick={() => setShotE2(enemyShips.includes("E2") ? "hit" : "miss")}>E2</div>
      <div className={"col-1 E3" + (shotE3 == "hit" ? " hit" : shotE3 == "miss" ? " miss": " ")} onClick={() => setShotE3(enemyShips.includes("E3") ? "hit" : "miss")}>E3</div>
      <div className={"col-1 E4" + (shotE4 == "hit" ? " hit" : shotE4 == "miss" ? " miss": " ")} onClick={() => setShotE4(enemyShips.includes("E4") ? "hit" : "miss")}>E4</div>
      <div className={"col-1 E5" + (shotE5 == "hit" ? " hit" : shotE5 == "miss" ? " miss": " ")} onClick={() => setShotE5(enemyShips.includes("E5") ? "hit" : "miss")}>E5</div>
      <div className={"col-1 E6" + (shotE6 == "hit" ? " hit" : shotE6 == "miss" ? " miss": " ")} onClick={() => setShotE6(enemyShips.includes("E6") ? "hit" : "miss")}>E6</div>
      <div className={"col-1 E7" + (shotE7 == "hit" ? " hit" : shotE7 == "miss" ? " miss": " ")} onClick={() => setShotE7(enemyShips.includes("E7") ? "hit" : "miss")}>E7</div>
      <div className={"col-1 E8" + (shotE8 == "hit" ? " hit" : shotE8 == "miss" ? " miss": " ")} onClick={() => setShotE8(enemyShips.includes("E8") ? "hit" : "miss")}>E8</div>
      <div className={"col-1 E9" + (shotE9 == "hit" ? " hit" : shotE9 == "miss" ? " miss": " ")} onClick={() => setShotE9(enemyShips.includes("E9") ? "hit" : "miss")}>E9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">F</div>
      <div className={"col-1 F1" + (shotF1 == "hit" ? " hit" : shotF1 == "miss" ? " miss": " ")} onClick={() => setShotF1(enemyShips.includes("F1") ? "hit" : "miss")}>F1</div>
      <div className={"col-1 F2" + (shotF2 == "hit" ? " hit" : shotF2 == "miss" ? " miss": " ")} onClick={() => setShotF2(enemyShips.includes("F2") ? "hit" : "miss")}>F2</div>
      <div className={"col-1 F3" + (shotF3 == "hit" ? " hit" : shotF3 == "miss" ? " miss": " ")} onClick={() => setShotF3(enemyShips.includes("F3") ? "hit" : "miss")}>F3</div>
      <div className={"col-1 F4" + (shotF4 == "hit" ? " hit" : shotF4 == "miss" ? " miss": " ")} onClick={() => setShotF4(enemyShips.includes("F4") ? "hit" : "miss")}>F4</div>
      <div className={"col-1 F5" + (shotF5 == "hit" ? " hit" : shotF5 == "miss" ? " miss": " ")} onClick={() => setShotF5(enemyShips.includes("F5") ? "hit" : "miss")}>F5</div>
      <div className={"col-1 F6" + (shotF6 == "hit" ? " hit" : shotF6 == "miss" ? " miss": " ")} onClick={() => setShotF6(enemyShips.includes("F6") ? "hit" : "miss")}>F6</div>
      <div className={"col-1 F7" + (shotF7 == "hit" ? " hit" : shotF7 == "miss" ? " miss": " ")} onClick={() => setShotF7(enemyShips.includes("F7") ? "hit" : "miss")}>F7</div>
      <div className={"col-1 F8" + (shotF8 == "hit" ? " hit" : shotF8 == "miss" ? " miss": " ")} onClick={() => setShotF8(enemyShips.includes("F8") ? "hit" : "miss")}>F8</div>
      <div className={"col-1 F9" + (shotF9 == "hit" ? " hit" : shotF9 == "miss" ? " miss": " ")} onClick={() => setShotF9(enemyShips.includes("F9") ? "hit" : "miss")}>F9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">G</div>
      <div className={"col-1 G1" + (shotG1 == "hit" ? " hit" : shotG1 == "miss" ? " miss": " ")} onClick={() => setShotG1(enemyShips.includes("G1") ? "hit" : "miss")}>G1</div>
      <div className={"col-1 G2" + (shotG2 == "hit" ? " hit" : shotG2 == "miss" ? " miss": " ")} onClick={() => setShotG2(enemyShips.includes("G2") ? "hit" : "miss")}>G2</div>
      <div className={"col-1 G3" + (shotG3 == "hit" ? " hit" : shotG3 == "miss" ? " miss": " ")} onClick={() => setShotG3(enemyShips.includes("G3") ? "hit" : "miss")}>G3</div>
      <div className={"col-1 G4" + (shotG4 == "hit" ? " hit" : shotG4 == "miss" ? " miss": " ")} onClick={() => setShotG4(enemyShips.includes("G4") ? "hit" : "miss")}>G4</div>
      <div className={"col-1 G5" + (shotG5 == "hit" ? " hit" : shotG5 == "miss" ? " miss": " ")} onClick={() => setShotG5(enemyShips.includes("G5") ? "hit" : "miss")}>G5</div>
      <div className={"col-1 G6" + (shotG6 == "hit" ? " hit" : shotG6 == "miss" ? " miss": " ")} onClick={() => setShotG6(enemyShips.includes("G6") ? "hit" : "miss")}>G6</div>
      <div className={"col-1 G7" + (shotG7 == "hit" ? " hit" : shotG7 == "miss" ? " miss": " ")} onClick={() => setShotG7(enemyShips.includes("G7") ? "hit" : "miss")}>G7</div>
      <div className={"col-1 G8" + (shotG8 == "hit" ? " hit" : shotG8 == "miss" ? " miss": " ")} onClick={() => setShotG8(enemyShips.includes("G8") ? "hit" : "miss")}>G8</div>
      <div className={"col-1 G9" + (shotG9 == "hit" ? " hit" : shotG9 == "miss" ? " miss": " ")} onClick={() => setShotG9(enemyShips.includes("G9") ? "hit" : "miss")}>G9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">H</div>
      <div className={"col-1 H1" + (shotH1 == "hit" ? " hit" : shotH1 == "miss" ? " miss": " ")} onClick={() => setShotH1(enemyShips.includes("H1") ? "hit" : "miss")}>H1</div>
      <div className={"col-1 H2" + (shotH2 == "hit" ? " hit" : shotH2 == "miss" ? " miss": " ")} onClick={() => setShotH2(enemyShips.includes("H2") ? "hit" : "miss")}>H2</div>
      <div className={"col-1 H3" + (shotH3 == "hit" ? " hit" : shotH3 == "miss" ? " miss": " ")} onClick={() => setShotH3(enemyShips.includes("H3") ? "hit" : "miss")}>H3</div>
      <div className={"col-1 H4" + (shotH4 == "hit" ? " hit" : shotH4 == "miss" ? " miss": " ")} onClick={() => setShotH4(enemyShips.includes("H4") ? "hit" : "miss")}>H4</div>
      <div className={"col-1 H5" + (shotH5 == "hit" ? " hit" : shotH5 == "miss" ? " miss": " ")} onClick={() => setShotH5(enemyShips.includes("H5") ? "hit" : "miss")}>H5</div>
      <div className={"col-1 H6" + (shotH6 == "hit" ? " hit" : shotH6 == "miss" ? " miss": " ")} onClick={() => setShotH6(enemyShips.includes("H6") ? "hit" : "miss")}>H6</div>
      <div className={"col-1 H7" + (shotH7 == "hit" ? " hit" : shotH7 == "miss" ? " miss": " ")} onClick={() => setShotH7(enemyShips.includes("H7") ? "hit" : "miss")}>H7</div>
      <div className={"col-1 H8" + (shotH8 == "hit" ? " hit" : shotH8 == "miss" ? " miss": " ")} onClick={() => setShotH8(enemyShips.includes("H8") ? "hit" : "miss")}>H8</div>
      <div className={"col-1 H9" + (shotH9 == "hit" ? " hit" : shotH9 == "miss" ? " miss": " ")} onClick={() => setShotH9(enemyShips.includes("H9") ? "hit" : "miss")}>H9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">I</div>
      <div className={"col-1 I1" + (shotI1 == "hit" ? " hit" : shotI1 == "miss" ? " miss": " ")} onClick={() => setShotI1(enemyShips.includes("I1") ? "hit" : "miss")}>I1</div>
      <div className={"col-1 I2" + (shotI2 == "hit" ? " hit" : shotI2 == "miss" ? " miss": " ")} onClick={() => setShotI2(enemyShips.includes("I2") ? "hit" : "miss")}>I2</div>
      <div className={"col-1 I3" + (shotI3 == "hit" ? " hit" : shotI3 == "miss" ? " miss": " ")} onClick={() => setShotI3(enemyShips.includes("I3") ? "hit" : "miss")}>I3</div>
      <div className={"col-1 I4" + (shotI4 == "hit" ? " hit" : shotI4 == "miss" ? " miss": " ")} onClick={() => setShotI4(enemyShips.includes("I4") ? "hit" : "miss")}>I4</div>
      <div className={"col-1 I5" + (shotI5 == "hit" ? " hit" : shotI5 == "miss" ? " miss": " ")} onClick={() => setShotI5(enemyShips.includes("I5") ? "hit" : "miss")}>I5</div>
      <div className={"col-1 I6" + (shotI6 == "hit" ? " hit" : shotI6 == "miss" ? " miss": " ")} onClick={() => setShotI6(enemyShips.includes("I6") ? "hit" : "miss")}>I6</div>
      <div className={"col-1 I7" + (shotI7 == "hit" ? " hit" : shotI7 == "miss" ? " miss": " ")} onClick={() => setShotI7(enemyShips.includes("I7") ? "hit" : "miss")}>I7</div>
      <div className={"col-1 I8" + (shotI8 == "hit" ? " hit" : shotI8 == "miss" ? " miss": " ")} onClick={() => setShotI8(enemyShips.includes("I8") ? "hit" : "miss")}>I8</div>
      <div className={"col-1 I9" + (shotI9 == "hit" ? " hit" : shotI9 == "miss" ? " miss": " ")} onClick={() => setShotI9(enemyShips.includes("I9") ? "hit" : "miss")}>I9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
    </div>
    </div>
    </div>);
}

export default App;
