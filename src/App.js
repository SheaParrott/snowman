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

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      snowman: snowman_7,
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

  generateRandomWord = event => {
    // create a function that breaks apart the random word into
    // an array of letters
    //   - need to turn an string or object into an array
    //   - then slice each character
    // display for now or console log
    const newSecretWord = 'snowman'
    this.setState(
      {
        secretWord: newSecretWord,
        secretWordLetters: newSecretWord.split(''),
        correctLetters: ['_', '_', '_', '_', '_', '_', '_']
      },
      () => {
        this.generateRandomLetters()
      }
    )
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
    this.setState({
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

  check = event => {
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
      //
      // this gem right here was holding me back a while
      // replaces the letter with a empty string so my while loop will
      // check and add all the same letters
      this.state.secretWordLetters[matchedLetterIndex] = ''
      console.log(this.state.secretWordLetters)

      this.setState({
        correctLetters: this.state.correctLetters
      })
    }

    // to make this work right i need a for loop that takes the index +1
    // then goes back through the secret word up until the length of the
    // secret word array
  }

  won = () => {
    // once all letters have been filled declare a win
    // and suggest a play again
    //
  }

  render() {
    return (
      <div className="App">
        <header>snowman!</header>
        <h4>Enjoy the game</h4>
        <button className="newGame" onClick={this.generateRandomWord}>
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
