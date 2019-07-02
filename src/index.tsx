import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import Test from './components/Test';
import './index.scss';

class TestMain {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public testFun() {
    console.log(this.name + '---' + this.age);
  }
}

const testMain = new TestMain('Miss D', 18);
testMain.testFun();

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        app222
        <Test color="#ff0" />
        <Hello compiler="aa" framework="work" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
