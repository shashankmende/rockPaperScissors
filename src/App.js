import './App.css'
import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameResultView from './GameResultView/GameResultView'
import {
  RockPaperScissors,
  TopContainer,
  TextContainer,
  Heading,
  ScoreContainer,
  ScoreText,
  BottomContainer,
  ScissorAndRockContainer,
  PaperContainer,
  Button,
  BtnImg,
  PopupContainer,
  RulesContainer,
  RulesImg,
  CloseBtn,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const GenerateRandomNumber = () => {
  const number = Math.floor(Math.random() * 3)
  return number
}
let gameText = ''

class App extends Component {
  state = {
    btnDetails: choicesList[0],
    gameResultView: true,
    score: 0,
    randomNumber: choicesList[GenerateRandomNumber()],
  }

  callRockFunction = () => {
    const {randomNumber} = this.state
    if (randomNumber.id === 'PAPER') {
      gameText = 'YOU LOSE'

      return gameText
    }
    gameText = 'YOU WON'

    return gameText
  }

  callPaperFunction = () => {
    const {randomNumber} = this.state
    if (randomNumber.id === 'ROCK') {
      gameText = 'YOU WON'

      return gameText
    }

    gameText = 'YOU LOSE'
    return gameText
  }

  callScissorFunction = () => {
    const {randomNumber} = this.state
    if (randomNumber.id === 'ROCK') {
      gameText = 'YOU LOSE'
      return gameText
    }

    gameText = 'YOU WON'
    return gameText
  }

  GameResultTextFunction = () => {
    const {btnDetails, randomNumber} = this.state
    switch (btnDetails.id) {
      case randomNumber.id:
        return 'IT IS DRAW'
      case 'ROCK':
        return this.callRockFunction()

      case 'PAPER':
        return this.callPaperFunction()

      case 'SCISSORS':
        return this.callScissorFunction()

      default:
        return null
    }
  }

  updatingScoreFunction = () => {
    const updatedScore = this.GameResultTextFunction()

    if (updatedScore === 'YOU WON') {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score + 1,
      }))
    } else if (updatedScore === 'YOU LOSE') {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score - 1,
      }))
    } else {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score,
      }))
    }
  }

  onClickRockBtn = () => {
    const updatedScore = this.GameResultTextFunction()
    if (updatedScore === 'YOU WON') {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score + 1,
        btnDetails: choicesList[0],
      }))
    } else if (updatedScore === 'YOU LOSE') {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score - 1,
        btnDetails: choicesList[0],
      }))
    } else if (updatedScore === 'IT IS DRAW') {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score,
        btnDetails: choicesList[0],
      }))
    }
  }

  onClickPaperButton = () => {
    const updatedScore = this.GameResultTextFunction()
    if (updatedScore === 'YOU WON') {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score + 1,
        btnDetails: choicesList[2],
      }))
    } else if (updatedScore === 'YOU LOSE') {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score - 1,
        btnDetails: choicesList[2],
      }))
    } else {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score,
        btnDetails: choicesList[2],
      }))
    }
  }

  onClickScissorBtn = () => {
    const updatedScore = this.GameResultTextFunction()
    if (updatedScore === 'YOU WON') {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score + 1,
        btnDetails: choicesList[1],
      }))
    } else if (updatedScore === 'YOU LOSE') {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score - 1,
        btnDetails: choicesList[1],
      }))
    } else {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score,
        btnDetails: choicesList[1],
      }))
    }
  }

  updateGameResult = () => {
    this.setState(prevState => ({
      gameResultView: !prevState.gameResultView,
      btnDetails: choicesList[1],
      randomNumber: choicesList[GenerateRandomNumber()],
    }))
  }

  render() {
    const {gameResultView, randomNumber, btnDetails, score} = this.state

    return (
      <RockPaperScissors>
        <TopContainer>
          <TextContainer>
            <Heading>ROCK PAPER SCISSORS</Heading>
          </TextContainer>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreText>{score}</ScoreText>
          </ScoreContainer>
        </TopContainer>
        {gameResultView ? (
          <>
            <BottomContainer>
              <ScissorAndRockContainer>
                <Button data-testid="rockButton" onClick={this.onClickRockBtn}>
                  <BtnImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
                    alt={choicesList[0].id}
                  />
                </Button>
                <Button
                  data-testid="scissorsButton"
                  onClick={this.onClickScissorBtn}
                >
                  <BtnImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
                    alt={choicesList[1].id}
                  />
                </Button>
              </ScissorAndRockContainer>
              <PaperContainer>
                <Button
                  data-testid="paperButton"
                  onClick={this.onClickPaperButton}
                >
                  <BtnImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
                    alt={choicesList[2].id}
                  />
                </Button>
              </PaperContainer>
            </BottomContainer>
            <PopupContainer>
              <Popup modal trigger={<Button>Rules</Button>}>
                {close => (
                  <RulesContainer>
                    <CloseBtn>
                      <RiCloseLine onClick={() => close()} />
                    </CloseBtn>
                    <RulesImg
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </RulesContainer>
                )}
              </Popup>
            </PopupContainer>
          </>
        ) : (
          <GameResultView
            updateGameResult={this.updateGameResult}
            randomNumber={randomNumber}
            btnDetails={btnDetails}
          />
        )}
      </RockPaperScissors>
    )
  }
}
export default App
