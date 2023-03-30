import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch} = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div style={{backgroundColor:'#92E49A' , color:'white' }}className='alert alert-secondary'> Currency {
        <select name="Currency" id="Currency" className="styled-select" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">($)Dollar</option>
        <option value="£">(£)Pound</option>
        <option value="€">(€)Euro</option>
        <option value="₹">(₹)Ruppee</option>
 
        {/* <option value="CAD">Canada(CAD)</option> */}
      </select>	
      }	
    </div>

    );
};


export default Currency;