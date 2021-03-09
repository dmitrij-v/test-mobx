import React from "react"
import { makeAutoObservable } from "mobx"

class Timer {
  match = {}

  constructor() {
    makeAutoObservable(this)
  }

  async getList() {
    let url = 'https://full-stats-start.herokuapp.com/api/v1/basketball/match/1';
    let response = await fetch(url);

    console.log(response)
    this.match = response;
  }
}

const myTimer = new Timer()
myTimer.getList();


function App() {
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
