import React, { useState }  from 'react';
import './App.css';
import loadable from '@loadable/component'


function App() {
  const [visible, setVisible] = useState(false);

  const handleClick =  () => {
    setVisible(!visible)
  }

  // loadable
  const SplitMe = loadable(
    () => import('./components/SplitMe'), {
    fallback: <div>loading...</div>
  });

  // preload
  const onMouseOver = () => {
    SplitMe.preload();
  }

  return (
      <div className="App">
        <h1>코드 스플리팅</h1>
        <h3 onMouseOver={onMouseOver}>
          loadable/component 를 이용한 동적 컴포넌트 import
        </h3>
        <main>
          <button onClick={handleClick}>show/hide</button>
          {visible && <SplitMe /> }
        </main>
      </div>
    );
}

export default App;
