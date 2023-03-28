import * as esbuild from 'esbuild-wasm';
import * as ReactDOMClient from 'react-dom/client';
import { useState, useEffect} from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    const service = await esbuild.initialize({
      worker: true,
      wasmURL: '/esbuild.wasm',
    });
    console.log(service);
  };

  useEffect(() => {
    startService();
  }, [])

  const onClick = () => {
    console.log(input);
  };
  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
