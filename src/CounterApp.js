import React, {useState} from 'react';
import PropTypes from  'prop-types';

const CounterApp = ({ title, value }) => {

    const [counter, setCounter] = useState(value);

    // HandleSubstract
    const handleSubstract = () => { 
        if (counter <= 0) {
            return;
        } else {
            setCounter(counter - 1);
        }
    }

    // HandleReset
    const handleReset = () => { 
        setCounter(value);
    }

    // HandleAdd
    const handleAdd = () => { 
        setCounter(counter + 1);
    }

    return (
        <>
            <h1> {title} </h1>
            <h2> {counter} </h2>

            <hr></hr>
            <button onClick={ handleSubstract }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleAdd }> +1 </button>
        </>
    );
}

CounterApp.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;