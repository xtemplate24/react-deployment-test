//import React from 'react' //--------------> THIS IS IF USING CLASS
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"

//EXAMPLE OF DEFAULT
// function App() {
//   const name = "brad"
//   const x = false
//   return ( //cannot use class for jsx, classname is a standin for that
//     //jsx can only have one parent component, in this case the div
//     //can use a <> if dont even want a div
//     <div className="Container"> 
//       <h1>Hello From react</h1>
//       <h1>Hello {name}</h1>
//       <p>This is a test of the functions {x ? 'Yes': 'No'}</p>
//       <p>{1+2}</p>
//       <Header />
//     </div>
//   );
// }    

//---------------COMPONENT--------------------------

const App = () => {
  const [showAddTask, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState( //States are immutable, this is how to store values within a component
    //need a setter function too
    [
        {
            text:'do smth',
            id: 1,
            day: "21/6/2021",
            reminder: true
        },
        {
          text:'do another',
            id:2,
            day: "22/6/2021",
            reminder: false
        },
        {
          text:'one more',
          id:3,
          day: "23/6/2021",
          reminder: true
      }
    ]
)

//Show add task
  const onShowAddTasks = () => {
    setShowAddTasks(!showAddTask)
  }


//Add task
  const addTask = (task) =>{
    console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }


//Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) //just hides the task that the user deletes
  }

//Toggle reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className = 'container'>
      <Header onAdd={onShowAddTasks} showAdd = {showAddTask}/> 
      {showAddTask && <AddTask onAdd ={addTask}/>} {/*&& just means if true, if not nothing will show*/}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : "No tasks"} {/*Putting a function through the prop*/}
      
    </div>
  )
}

//---------------CLASS VERSION---------------------

// class App extends React.Component {
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;



