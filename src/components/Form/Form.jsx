import './index.css';

const Form = ({value, onChange, onClick}) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    }

    const handleClick = (e) => {
        onClick(e.preventDefault());
    }

    return (
            <div className='Form'>
                <input value={value} onChange={handleChange} type="text" id='text' placeholder='Add a Task...'/>
                <button id='submit' value="Add" onClick={handleClick}> Add </button> 
            </div>
    )
}

export default Form;