import React, { useState, Suspense }  from 'react';
import './App.css';


function App() {
  const [visible, setVisible] = useState(false);

  const handleClick =  () => {
    setVisible(!visible)
  }

  // 주의: lazy()는 리액트 컴포넌트 만 불러올 수 있음!
  const SplitMe = React.lazy(() => import('./components/SplitMe'));

    return (
      <div className="App">
        <h1>코드 스플리팅</h1>
        <h3>
          일반 자바스크립트 함수 동적으로 import 하기
        </h3>
        <main>
          <button onClick={handleClick}>show/hide</button>
          <Suspense fallback={<div>Loading...</div>}>
            {visible && <SplitMe /> }
          </Suspense>
        </main>
      </div>
    );
}

export default App;
