import React, { Component } from 'react'
import './App.css'
import snowman_0 from './assets/step_0.png'
import snowman_1 from './assets/step_1.png'
import snowman_2 from './assets/step_2.png'
import snowman_3 from './assets/step_3.png'
import snowman_4 from './assets/step_4.png'
import snowman_5 from './assets/step_5.png'
import snowman_6 from './assets/step_6.png'
import snowman_7 from './assets/step_7.png'
import wordList from './wordList.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameStatus: 'Enjoy the game',
      snowman: snowman_0,
      snowmanArray: [],
      secretWord: '',
      secretWordLetters: ['_', '_', '_', '_', '_', '_', '_'],
      correctLetters: ['_', '_', '_', '_', '_', '_', '_'],
      randomLetter: [
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️',
        '❄️'
      ]
    }
  }
  // (x) create the layout
  // (x) create new gane on new game button click, click should
  // (x) need to split the words into individual characters and add
  //    to list of random buttons
  // () display the characters when correctly selected in order
  // () buttons dissaper when clicked in correct order
  //
  //
  //
  //

  newGame = event => {
    // create a function that breaks apart the random word into
    // an array of letters
    //   - need to turn an string or object into an array
    //   - then slice each character

    //generate random word
    // let random = alphabet.map(letter => {
    //   return alphabet[Math.floor(Math.random() * alphabet.length)]
    let randomIndex = Math.floor(Math.random() * 1024)
    this.setState({
      gameStatus: 'Enjoy the game',
      snowman: snowman_0,
      snowmanArray: [],
      secretWord: wordList[randomIndex],
      secretWordLetters: this.state.secretWord.split(''),
      correctLetters: ['_', '_', '_', '_', '_', '_', '_'],
      randomLetter: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ]
    })
  }

  generateRandomLetters = () => {
    // then need those letters from the random word to replace the random letter state
    // as well as other random letters generated in there
    // let alphabet = [
    //   'a',
    //   'b',
    //   'c',
    //   'd',
    //   'e',
    //   'f',
    //   'g',
    //   'h',
    //   'i',
    //   'j',
    //   'k',
    //   'l',
    //   'm',
    //   'n',
    //   'o',
    //   'p',
    //   'q',
    //   'r',
    //   's',
    //   't',
    //   'u',
    //   'v',
    //   'w',
    //   'x',
    //   'y',
    //   'z'
    // ]
    // let random = alphabet.map(letter => {
    //   return alphabet[Math.floor(Math.random() * alphabet.length)]
    // })
  }

  check = event => {
    if (!this.state.secretWordLetters.includes(event.target.value)) {
      this.addNextImage()
      return
    }
    // then onlclick needs to determine if that matches one
    // of the letters
    // use of some is probably needed
    // compare the letter to the secretwordsletter array
    //want to slice the matching letter and keep index position

    while (this.state.secretWordLetters.includes(event.target.value)) {
      // this find the index position of the matched letter
      let matchedLetterIndex = this.state.secretWordLetters.indexOf(
        event.target.value
      )

      // this takes the index and puts the target value in the new array
      // in the same index position
      this.state.correctLetters.splice(
        matchedLetterIndex,
        1,
        event.target.value
      )
      // this gem right here was holding me back a while
      // replaces the letter with a empty string so my while loop will
      // check and add all the same letters
      this.state.secretWordLetters[matchedLetterIndex] = ''

      this.state.snowmanArray.push('')
      this.setState({
        correctLetters: this.state.correctLetters,
        snowmanArray: this.state.snowmanArray,
        secretWordLetters: this.state.secretWordLetters
      })
    }
    // to make this work right i need a for loop that takes the index +1
    // then goes back through the secret word up until the length of the
    // secret word array
  }
  addNextImage = () => {
    if (this.state.snowman === snowman_0) {
      this.setState({
        snowman: snowman_1
      })
      return
    }
    if (this.state.snowman === snowman_1) {
      this.setState({
        snowman: snowman_2
      })
      return
    }
    if (this.state.snowman === snowman_2) {
      this.setState({
        snowman: snowman_3
      })
      return
    }
    if (this.state.snowman === snowman_3) {
      this.setState({
        snowman: snowman_4
      })
      return
    }
    if (this.state.snowman === snowman_4) {
      this.setState({
        snowman: snowman_5
      })
      return
    }
    if (this.state.snowman === snowman_5) {
      this.setState({
        snowman: snowman_6
      })
      return
    }
    if (this.state.snowman === snowman_6) {
      this.setState({
        snowman: snowman_7,
        gameStatus: 'Coolin it, Great job! Play again?'
      })
    }
  }
  won = () => {
    // once all letters have been filled declare a win
    // and suggest a play again
    //
  }

  render() {
    return (
      <div className="App">
        <header>
          <span className="headerSnowflake" role="img" aria-label="snowflake">
            ❄️
          </span>
          snowman!
          <span className="headerSnowflake" role="img" aria-label="snowflake">
            ❄️
          </span>
        </header>
        <h4>{this.state.gameStatus}</h4>
        <button className="newGame" onClick={this.newGame}>
          New Game
        </button>
        <br />
        <img className="snowmanImage" src={this.state.snowman} alt="snowman" />
        <section>
          {this.state.correctLetters.map((value, index) => {
            return (
              <p key={index} value={value} className="correctLetters">
                {value}
              </p>
            )
          })}
        </section>
        <div>
          {this.state.randomLetter.map((letter, letterIndex) => {
            return (
              <button key={letterIndex} value={letter} onClick={this.check}>
                {letter}
              </button>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App
