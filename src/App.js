
import './App.css';
import { useContext, useEffect } from 'react';
import HandDiv from './components/Handdiv';
import Message from './components/Message';
import { PageStatusContext } from './components/providers/PageStatusProvider';

function App() {
  const Status = useContext(PageStatusContext)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Janken</h1>
      </header>
      <body>
        <Message context = {"手を選んでください"}></Message>
        <HandDiv status = {Status}></HandDiv>
      </body>
    </div>
  );
}

export default App;
