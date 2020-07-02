import React from 'react';
import './App.css';


function App() {

  const handleClick = () => {
    import('./util/greenting')
      .then(result => result.default());
  }

  return (
    <div className="App">
      <h1>코드 스플리팅</h1>
      <h3>
        일반 자바스크립트 함수 동적으로 import 하기
      </h3>
      <main>
        <button onClick={handleClick}>불러오기
        </button>
      </main>
    </div>
  );
}

export default App;
