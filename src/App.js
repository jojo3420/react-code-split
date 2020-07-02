import React, {useState } from 'react';
import './App.css';
import loadable from '@loadable/component';



function App() {
  const [visible, setVisible] = useState(false);

  // React Component import
  const SplitMe = loadable(
    () => import('./components/SplitMe'), {
      fallback: <div>loading..</div>
  });


  return (
    <div className="App">
      <h1>코드 스플리팅</h1>
      <h3>
        lazy, Suspense 이용하여 codsplit
      </h3>
      <main>

        <button onClick={() => setVisible(!visible)}>가시성 조절</button>
        {visible && <SplitMe/>}
      </main>
    </div>
  );
}

export default App;
