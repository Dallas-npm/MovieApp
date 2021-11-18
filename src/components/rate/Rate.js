import React, { useState } from "react";

import "./Rate.css";

const Rate = ({ callback }) => {
  const [value, setValue] = useState(5);

  return (
    <div className='rate'>
      <h4 className='rate-heading'>Rate Movie/Show</h4>
      <input
        className='slider'
        type='range'
        id='vol'
        name='vol'
        min='0'
        max='10'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <p className='value'>{value}</p>
      <p>
        <button className='rate-btn' onClick={() => callback(value)}>
          Rate
        </button>
      </p>
      <div className='rate-line'></div>
    </div>
  );
};

export default Rate;
