import { FaTimes } from 'react-icons/fa'
// FaTimes means x icon like we use to show delete.

const Task = ({task , onDelete , onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''   }`} onDoubleClick= { ()=> onToggle(task.id)}>
            {/* <h3> my task </h3> */}
            <h3>{task.text}  <FaTimes  style={{ color : 'red', cursor : 'pointer' }}
             onClick= { () => onDelete(task.id)}  /> </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task