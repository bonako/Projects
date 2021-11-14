import logo from './logo.svg';
// import './App.css';
import "./styles.css";
import { useState, useEffect } from "react";
// import axios from "axios";

export default function App() {
  const [count, setCount] = useState(0);
  const [students, setStudents] = useState([]);

  const [sum, setSum] = useState(0);
  const [aver, setAver] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // we will use async/await to fetch this data
  async function getData() {
    const res = await fetch("https://api.hatchways.io/assessment/students");
    const data = await res.json();

    // store the data into our books variable
    const newInfo = [...students, data.students[count]];

    setStudents(newInfo);
    setCount(count + 1);

    const newAver = [students[count], ave(data.students[count].grades)];
    setAver(newAver);
  }

  const ave = (gra) => gra.reduce((a, b) => a + b, 0) / gra.length;

  function getAve(array) {
    var sum = 0;

    for (var elem = 0; elem < array.length; elem++) {
      sum += parseInt(array[elem], 10);
    }
    return sum / array.length;
  }

  function readMore(idx) {
    if (document.getElementById(idx).style.display === 'none') {
      document.getElementById(idx).style.display = 'block'
    } else {
      document.getElementById(idx).style.display = 'none'
    }
    
  }

  return (
    <div className="App">
      <button onClick={getData}>Get data</button>
      <input id="inp" placeholder="Search by name..." />
 
      {/* <ul> */}
      {students
        .filter((name) =>
          (name.firstName+name.lastName).includes(document.querySelector("#inp").value)
        )
        .map((book, idx) => (
          <>
            <table className="stu">
            <tbody>
              <tr>
                <td>
                  <img key={book.id} src={book.pic} alt="img"></img>
                </td>
                <td>
                  <h1 key={book.id}>
                    {book.firstName.toUpperCase()} {book.lastName.toUpperCase()}
                  </h1>
                  <p>
                    Email: {book.email} <br />
                    Company: {book.company} <br />
                    Skill: {book.skill} <br />
                    Average: {getAve(book.grades)}% <br />
                  </p>
                    <ul id={book.id.toString()} >
                      {book.grades.map(grade => (
                        <li>{grade}</li>))}
                    </ul>
                </td>
                <td>
                  <button onClick={readMore(book.id)}>+</button>
                </td>
              </tr>
            </tbody>
            </table>
            <hr />

          </>
        ))}
      {/* </ul> */}

      {/* {books.map((book, index) => (
        <div key={index}>
          <h2>{book.name.last}</h2>
        </div>
      ))} */}

    </div>
  );
}

