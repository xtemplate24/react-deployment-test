import { FaTimes } from 'react-icons/fa' //this is an icon library from react
const Task = ({task, onDelete, onToggle}) => { // onDelete is passed as a prop through the various components
    return (
        //if task reminder is true, add reminder to the class name, "task reminder", else it will just be "task"
        <div className = {`task ${task.reminder ? 'reminder' : ''}`}  
        onClick= {() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style = {{color: 'red' , cursor: 'pointer'}} 
            onClick = {() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
