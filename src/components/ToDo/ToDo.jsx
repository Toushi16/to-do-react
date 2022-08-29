import './index.css';

const ToDo = ({el, onClick}) => {

    const handleClick = (e) => {
        onClick(e)
    }

    return (
        <div className='ToDo'>
            <span>{el}</span>
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default ToDo;