import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [ taskList, setTaskList ] = useState([]);

  // Efectos: consumir datos de una API
  useEffect ( () => {
    async function fechData() {
      const tasks=[	
        { 
          "label": "Esta es mi Vigesima cuarta Tarea", 
          "done": false 
        },
        { 
          "label": "Esta es mi Vigesina quinta Tarea", 
          "done": false 
        },
        { 
          "label": "Esta es mi Vigesima sexta Tarea", 
          "done": false 
        }
      ]

      const additionalSetting = {
        headers: {
          "Content-Type": "application/json"
        },
        method: "PUT",
          body: JSON.stringify(tasks)
      }

      // JSON a Text = JSON.stringify() // Text a JSON = JSON.parse()
      fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/alejojimenez",
        additionalSetting )
        .then(response => response.text() )
        .then(newResponse => {
          console.log(newResponse);
          setTaskList(JSON.stringify(newResponse))
          console.log(setTaskList(JSON.stringify(newResponse)))
        })
        .catch((error) => console.log(error));
    }
    fechData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List Using Fetch</h1>
      </header>
    </div>
  );
}

export default App;
