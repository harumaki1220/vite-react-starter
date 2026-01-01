import { useState } from 'react';
import { Button } from './components/Button/Button';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Vite + React + TS Starter</h1>
        <p className="text-lg text-gray-600 mb-8">A clean and robust starter template.</p>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-sm mx-auto">
          <div className="mb-6 flex justify-center">
            <Button onClick={handleClick}>count is {count}</Button>
          </div>
          <p className="text-sm text-gray-500">
            Edit{' '}
            <code className="font-mono bg-gray-100 px-1 py-0.5 rounded text-pink-500">
              src/App.tsx
            </code>{' '}
            and save to test HMR
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
