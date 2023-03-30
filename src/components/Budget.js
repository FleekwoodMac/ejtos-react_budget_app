import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';




const Budget = () => {
    // const { budget } = useContext(AppContext);
    const { budget,dispatch,expenses } = useContext(AppContext);
    const { Currency } = useContext(AppContext);
    const { remaining } = useContext(AppContext);
  
 


    const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

        // console.log("hello");
        console.log({remaining});
        
		if(val<totalExpenses) {
			alert("You cannot reduce the budget value lower that the spending!");
        } 
        
        else if (val>20000) {
            alert("The value cannot exceed remaining funds! "+ Currency+ remaining);

        }
        else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}
                    <input       
                        required='required'
                        type='number'
                        id='budget'
                        step="10"
                        value={budget}
                        style={{ marginLeft: '0rem' , size: 10}}
                        onInput={(event) => changeBudget(event.target.value)
                        }>
                    </input>

            </span>        


        </div>
    );
};
export default Budget;
