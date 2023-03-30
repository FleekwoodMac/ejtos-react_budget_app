import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FcPlus } from 'react-icons/fc';
import { FaMinusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {

    const { Currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };



    const increaseAllocation = (name) => {


        console.log("hello plus");

        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }


    const reduceAllocation = (name) => {

        console.log("hello minus");
        const expense = {
            name: name,
            cost: 10,
            
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }




    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.cost}</td>
        <td><FcPlus size='1.5em' onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
        <td><FaMinusCircle color='red'size='1.5em' onClick={event=> reduceAllocation(props.name)}></FaMinusCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
    
       
        </tr>
    );
};

export default ExpenseItem;
