import React, { useState } from 'react';
import './App.css';
import History from './components/History';
import Ban from './components/Ban';
import Discovery from './components/Discovery';

function App() {
  const [historyData, setHistoryData] = useState([]);
  const [bandata, setBandata] = useState([]);

  const generateNew = (object) => {
    setHistoryData([...historyData, object]);
  };

  const updateBandata = (inputStr) => {
    setBandata([...bandata, inputStr]);
  };

  const removeBan = (index) => {
    const updatedBandata = bandata.filter((_, i) => i !== index);
    setBandata(updatedBandata); 
  };


  return (
    <div className='cover'>
      <History history={historyData} />
      <Discovery history={historyData} bandata={bandata} generateNew={generateNew} updateBan={updateBandata}/>
      <Ban Bandata={bandata} removeBan={removeBan} />
    </div>
  );
}

export default App;
