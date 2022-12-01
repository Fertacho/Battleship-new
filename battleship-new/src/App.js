import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';


function App() {

const [myShips,setMyShips] = useState('');
const [myShips1,setMyShips1] = useState('');
const [myShips2,setMyShips2] = useState('');
const [myShips3,setMyShips3] = useState('');
const [myShips4,setMyShips4] = useState('');
const [sendShips,setSendShips] = useState([]);
const [sendShip1, setSendShip1] = useState([]);
const [sendShip2, setSendShip2] = useState([]);
const [sendShip3, setSendShip3] = useState([]);
const [sendShip4, setSendShip4] = useState([]);

const [enemyShips, setEnemyShips] = useState([]);

const [shot, setShot] = useState("");
const [square, setSquare] = useState("");

const fireTorpedo = () => {
  console.log('attack')
  
}

const attack = () => {
 setSquare([ships,...shot])
}

const placeEnemyShips = () => {
  setEnemyShips([ships,...enemyShips])
}

//Mis barcos*************************************************************************************//

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
  return (<div>
    <div>ingresa coordenadas</div>
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
      <div className="col-1 A1" onClick={attack}>A1</div>
      <div className={"col-1 A2" + (enemyShips.includes("A2") ? " enemy" : " ") + (square.includes("enemy" ? " hit" : "miss"))} onClick={attack}>A2</div>
      <div className={"col-1 A3" + (shot == "A3" ? " hit" : " miss")} onClick={() => setShot("A3", ...shot)}>A3</div>
      <div className="col-1 A4" onClick={fireTorpedo}>A4</div>
      <div className="col-1 A5" onClick={fireTorpedo}>A5</div>
      <div className="col-1 A6" onClick={fireTorpedo}>A6</div>
      <div className="col-1 A7" onClick={fireTorpedo}>A7</div>
      <div className="col-1 A8" onClick={fireTorpedo}>A8</div>
      <div className="col-1 A9" onClick={fireTorpedo}>A9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">B</div>
      <div className="col-1 B1" onClick={fireTorpedo}>B1</div>
      <div className="col-1 B2" onClick={fireTorpedo}>B2</div>
      <div className="col-1 B3" onClick={fireTorpedo}>B3</div>
      <div className="col-1 B4" onClick={fireTorpedo}>B4</div>
      <div className="col-1 B5" onClick={fireTorpedo}>B5</div>
      <div className="col-1 B6" onClick={fireTorpedo}>B6</div>
      <div className="col-1 B7" onClick={fireTorpedo}>B7</div>
      <div className="col-1 B8" onClick={fireTorpedo}>B8</div>
      <div className="col-1 B9" onClick={fireTorpedo}>B9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">C</div>
      <div className="col-1 C1" onClick={fireTorpedo}>C1</div>
      <div className="col-1 C2" onClick={fireTorpedo}>C2</div>
      <div className="col-1 C3" onClick={fireTorpedo}>C3</div>
      <div className="col-1 C4" onClick={fireTorpedo}>C4</div>
      <div className="col-1 C5" onClick={fireTorpedo}>C5</div>
      <div className="col-1 C6" onClick={fireTorpedo}>C6</div>
      <div className="col-1 C7" onClick={fireTorpedo}>C7</div>
      <div className="col-1 C8" onClick={fireTorpedo}>C8</div>
      <div className="col-1 C9" onClick={fireTorpedo}>C9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">D</div>
      <div className="col-1 D1" onClick={fireTorpedo}>D1</div>
      <div className="col-1 D2" onClick={fireTorpedo}>D2</div>
      <div className="col-1 D3" onClick={fireTorpedo}>D3</div>
      <div className="col-1 D4" onClick={fireTorpedo}>D4</div>
      <div className="col-1 D5" onClick={fireTorpedo}>D5</div>
      <div className="col-1 D6" onClick={fireTorpedo}>D6</div>
      <div className="col-1 D7" onClick={fireTorpedo}>D7</div>
      <div className="col-1 D8" onClick={fireTorpedo}>D8</div>
      <div className="col-1 D9" onClick={fireTorpedo}>D9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">E</div>
      <div className="col-1 E1" onClick={fireTorpedo}>E1</div>
      <div className="col-1 E2" onClick={fireTorpedo}>E2</div>
      <div className="col-1 E3" onClick={fireTorpedo}>E3</div>
      <div className="col-1 E4" onClick={fireTorpedo}>E4</div>
      <div className="col-1 E5" onClick={fireTorpedo}>E5</div>
      <div className="col-1 E6" onClick={fireTorpedo}>E6</div>
      <div className="col-1 E7" onClick={fireTorpedo}>E7</div>
      <div className="col-1 E8" onClick={fireTorpedo}>E8</div>
      <div className="col-1 E9" onClick={fireTorpedo}>E9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">F</div>
      <div className="col-1 F1" onClick={fireTorpedo}>F1</div>
      <div className="col-1 F2" onClick={fireTorpedo}>F2</div>
      <div className="col-1 F3" onClick={fireTorpedo}>F3</div>
      <div className="col-1 F4" onClick={fireTorpedo}>F4</div>
      <div className="col-1 F5" onClick={fireTorpedo}>F5</div>
      <div className="col-1 F6" onClick={fireTorpedo}>F6</div>
      <div className="col-1 F7" onClick={fireTorpedo}>F7</div>
      <div className="col-1 F8" onClick={fireTorpedo}>F8</div>
      <div className="col-1 F9" onClick={fireTorpedo}>F9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">G</div>
      <div className="col-1 G1" onClick={fireTorpedo}>G1</div>
      <div className="col-1 G2" onClick={fireTorpedo}>G2</div>
      <div className="col-1 G3" onClick={fireTorpedo}>G3</div>
      <div className="col-1 G4" onClick={fireTorpedo}>G4</div>
      <div className="col-1 G5" onClick={fireTorpedo}>G5</div>
      <div className="col-1 G6" onClick={fireTorpedo}>G6</div>
      <div className="col-1 G7" onClick={fireTorpedo}>G7</div>
      <div className="col-1 G8" onClick={fireTorpedo}>G8</div>
      <div className="col-1 G9" onClick={fireTorpedo}>G9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">H</div>
      <div className="col-1 H1" onClick={fireTorpedo}>H1</div>
      <div className="col-1 H2" onClick={fireTorpedo}>H2</div>
      <div className="col-1 H3" onClick={fireTorpedo}>H3</div>
      <div className="col-1 H4" onClick={fireTorpedo}>H4</div>
      <div className="col-1 H5" onClick={fireTorpedo}>H5</div>
      <div className="col-1 H6" onClick={fireTorpedo}>H6</div>
      <div className="col-1 H7" onClick={fireTorpedo}>H7</div>
      <div className="col-1 H8" onClick={fireTorpedo}>H8</div>
      <div className="col-1 H9" onClick={fireTorpedo}>H9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
      <div className="col-1 gridborder side">I</div>
      <div className="col-1 I1" onClick={fireTorpedo}>I1</div>
      <div className="col-1 I2" onClick={fireTorpedo}>I2</div>
      <div className="col-1 I3" onClick={fireTorpedo}>I3</div>
      <div className="col-1 I4" onClick={fireTorpedo}>I4</div>
      <div className="col-1 I5" onClick={fireTorpedo}>I5</div>
      <div className="col-1 I6" onClick={fireTorpedo}>I6</div>
      <div className="col-1 I7" onClick={fireTorpedo}>I7</div>
      <div className="col-1 I8" onClick={fireTorpedo}>I8</div>
      <div className="col-1 I9" onClick={fireTorpedo}>I9</div>
      <div className="col-1 blank"></div>
      <div className="col-1 blank"></div>
    </div>
    </div>
    </div>);
}

export default App;
