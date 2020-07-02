import React  from 'react';
import './App.css';


// 주의할점. 클래스 컴포넌트만 불러올 수 있음.
class App extends React.Component {

  state = {
    SplitMe: null,
  };

  handleClick = async () => {
    const loadedModule = await import('./components/SplitMe');
    this.setState({ SplitMe: loadedModule.default})
  }
  render() {
    const { SplitMe } = this.state;

    return (
      <div className="App">
        <h1>코드 스플리팅</h1>
        <h3>
          일반 자바스크립트 함수 동적으로 import 하기
        </h3>
        <main>
          <button onClick={this.handleClick}>불러오기</button>
          {SplitMe && <SplitMe/>}
        </main>
      </div>
    );
  }
}

export default App;
