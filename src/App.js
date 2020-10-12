import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [ taskList, setTaskList ] = useState([]);

  // Efectos: consumir datos de una API
  useEffect ( () => {
    async function fechData() {
      const additionalSetting = {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET",
          //body: JSON.stringify(tasks)
      }

      
      fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/alejojimenez",
        additionalSetting )
        .then(response => response.text() )
        .then(newResponse => {
          console.log(newResponse);
          
          // JSON a Text = JSON.stringify() // Text a JSON = JSON.parse()
          setTaskList(JSON.parse(newResponse))
          console.log(setTaskList(JSON.parse(newResponse)))
        })
        .catch((error) => console.log(error));
    }
    fechData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List Using Fetch</h1>
        <ul style={{fontSize:16, textAlign:'left'}}>
          {taskList.map((item, index) => (
            <li key={index} style={{listStyle:'none'}}>
              <h3>{item.label}</h3>
              <span>{item.done.toString()}</span>
            </li>
          ))}
        </ul>        
      </header>
    </div>
  );
}

export default App;
