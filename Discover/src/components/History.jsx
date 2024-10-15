import React from 'react';

const History = (props) => {
  return (
    <div className='history'>
      <h2>History</h2>
      <div className='catalog'>
        {props.history.map((ele, index) => (
          <div key={index}>
            <h3>{ele.name}</h3>
            <img src={ele.img} alt="Exploration" />
            <p>{ele.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
