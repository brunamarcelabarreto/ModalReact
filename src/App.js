import React, {useState} from 'react';
import './App.css';

import Modal from './components/Modal'

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="App">
     <button onClick={ () => setIsModalVisible(true) }>Open</button>
     {isModalVisible ? (
     <Modal onClose={ () => setIsModalVisible(false) }>
       <h2>Modal do App</h2>
     </Modal> 
     ) : null}
     
    </div>
  );
}

export default App;
