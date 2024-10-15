import React from 'react'

const Ban = (props) => {
    return (
        <div className='ban'>
          <h2>Banned</h2>
          <div className='catalog'>
            {props.Bandata.map((ele, index) => (
              <button key={index} onClick={() => props.removeBan(index)}>{ele}</button>
            ))}
          </div>
        </div>
      );
}

export default Ban