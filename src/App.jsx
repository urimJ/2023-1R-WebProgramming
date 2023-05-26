import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
  const [row, setRow] = useState([]);

  const click = () =>{
    if( row.length === 0 ) {
      fetch("http://openAPI.seoul.go.kr:8088/78636e4e496269673634556a795559/json/RealtimeCityAir/1/25/")
      .then(function(res2) {
          res2.json()
          .then(function(res3) {
            setRow(res3.RealtimeCityAir.row);
          })
        })
    }
  };
  

  
  console.log(row);

  // const res = await fetch("http://openAPI.seoul.go.kr:8088/78636e4e496269673634556a795559/json/RealtimeCityAir/1/25/");
  // const res2 = await res.json();
  // console.log(res2.RealtimeCityAir.row);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick = {click}>LOAD</button>
      <table>
        <thead>
          <th>이름</th>
          <th>PM10</th>
          <th>O3</th>
          <th>상태</th>
        </thead>
        <tbody>
          {
          row.map((gu, index)=>{
            return (<tr key={index}>
              <td>{gu.MSRSTE_NM}</td>
              <td>{gu.PM10}</td>
              <td>{gu.O3}</td>
              <td>{gu.IDEX_NM}</td>
              </tr>)
          })
          }
        </tbody>
      </table>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
