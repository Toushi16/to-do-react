import './index.css';

const ToDoList = ({children}) => {
    return (
        <div className='ToDoList'>
            {children}
        </div>
    )
}

export default ToDoList;