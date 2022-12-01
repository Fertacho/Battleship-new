import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';


function App() {

const [myShips,setMyShips] = useState('');
const [sendShips,setSendShips] = useState([]);


const fireTorpedo = () => {
  console.log('attack')
}

const placeMyShips = (e) => {
setMyShips(e.target.value)
} 

const sendMyShips = () => {
setSendShips(myShips,...sendShips)
}

const placeEnemyShips = () => {

}


  console.log(sendShips)
  return (<div>
    <div>ingresa coordenadas</div>
    <input onChange={placeMyShips}></input>
    <button onClick={sendMyShips}>submit</button>
    

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
      <div className={"col-1 A1" + (sendShips == "A1" ? " ship" : "")} onClick={fireTorpedo}>A1</div>
      <div className="col-1 A2" onClick={fireTorpedo}>A2</div>
      <div className="col-1 A3" onClick={fireTorpedo}>A3</div>
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
      <div className="col-1 A1" onClick={fireTorpedo}>A1</div>
      <div className="col-1 A2" onClick={fireTorpedo}>A2</div>
      <div className="col-1 A3" onClick={fireTorpedo}>A3</div>
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
