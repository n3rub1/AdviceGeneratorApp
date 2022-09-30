import "./App.css";
import React from "react";
import pattern from "./images/pattern-divider-desktop.svg"
import dice from "./images/icon-dice.svg"

function App() {

  const [advice, setAdvice] = React.useState({
    id: Number,
    advice: String
  })

  React.useEffect(() => {
    getAdvice()
  }, [])

  async function getAdvice() {

    fetch("https://api.adviceslip.com/advice")
      .then(async function (response) {
        return JSON.parse(await response.text());
      }).then(function (data) {
        setAdvice(() => {
          console.log(data)
          return { id: data.slip.id, advice: data.slip.advice }
        })
      });
  }


  return (
    <main>
      <div className="top-div">

        <div className="text-div">
          <h1>Advice #{advice.id}</h1>
          <p>{advice.advice}</p>
          <img className="patternImage" src={pattern} alt="divider"></img>
        </div>

        <div className="img-div">
          <img onClick={getAdvice} className="diceImage" src={dice} alt="dice"></img>
        </div>

      </div>
    </main>
  )
}

export default App;
