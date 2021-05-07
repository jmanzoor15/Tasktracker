import Header from './components/Header'
import AddTask  from  './components/AddTask'

import Tasks from './components/Tasks'
import React, { useState } from "react";
const App = () => {

  
 const onToggle = (id) => {

  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
   
  }

  
 const addTask  = (task) => {
const id =  Math.floor(Math.random() * 1000) + 1
const newTask = { id, ...task }
setTasks([...tasks, newTask])
 }
  


const [showAddTask, setShowAddTasks] = useState('falsej ')




  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id ))
  }
  const [tasks, setTasks] = useState ([

    {
            id : 1,
            text : 'Doctors Appointment',
            day : ' Feb 5th at 2:30pm',
            reminder : true,
        },
        {
            id : 2,
            text : 'Meeting at School',
            day : ' Feb 6th at 1:30pm',
            reminder : true,
        },
        {
            id : 3,
            text : 'Food Shopping',
            day : ' Feb 5th at 3:30pm',
            reminder : true,
        },

  ])

 return (
  <div className="container">
      <Header title = ' Task Tracker'
       />
   { showAddTask &&    <AddTask   onAdd={addTask} /> }
 { tasks.length > 0 ?     < Tasks   tasks={tasks}  onDelete={deleteTask} onToggle={onToggle} />
 : 'no tasks found'}

 </div>
)
}





export default App



