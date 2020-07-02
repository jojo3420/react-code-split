import React, { useState, lazy, Suspense } from 'react';
import './App.css';



function App() {
  const [visible, setVisible] = useState(false);

  // React Component import
  const SplitMe = lazy(() => import('./components/SplitMe'));


  // Vanilla js import
  const callGreeting = async () => {
    const greeting = await import('./util/greenting');
    greeting.default();
    alert('1 + 2 => ' + greeting.sum(1, 2));
    alert('10 - 2 => ' + greeting.minus(10, 2));
  }

  return (
    <div className="App">
      <h1>코드 스플리팅</h1>
      <h3>
        lazy, Suspense 이용하여 codsplit
      </h3>
      <main>
        <button onClick={() => setVisible(!visible)}>가시성 조절</button>
        <button onClick={callGreeting}>call func</button>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
