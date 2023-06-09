import { useEffect, useState } from 'react';
import { emitServerEvent, onServerEvent } from './scripts/socket-io';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    emitServerEvent('TEST', []);
    onServerEvent('TEST', () => {
      console.log('YAY');
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/images/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + Reacttttt</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
