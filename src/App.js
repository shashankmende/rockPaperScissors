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

let gameText = ''

const GenerateRandomNumber = () => {
  const number = Math.floor(Math.random() * 3)
  return number
}

class App extends Component {
  state = {
    btnDetails: choicesList[0],
    gameResultView: true,
    score: 0,
    gameResultText: '',
    randomNumber: choicesList[GenerateRandomNumber()],
  }

  updatingScoreFunction = result => {
    let {score} = this.state
    switch (result) {
      case 'YOU WON':
        score += 1
        return score
      case 'YOU LOSE':
        score -= 1
        return score
      case 'IT IS DRAW':
        return score

      default:
        return null
    }
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

  resultTextFunction = () => {
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

  onClickRockBtn = () => {
    const updatedScore = this.updatingScoreFunction(this.resultTextFunction())
    this.setState(prevState => ({
      gameResultView: !prevState.gameResultView,
      score: updatedScore,
      btnDetails: choicesList[0],
      randomNumber: choicesList[GenerateRandomNumber()],
      gameResultText: this.resultTextFunction(),
    }))
  }

  onClickPaperButton = () => {
    const updatedScore = this.updatingScoreFunction(this.resultTextFunction())
    this.setState(prevState => ({
      gameResultView: !prevState.gameResultView,
      score: updatedScore,
      btnDetails: choicesList[2],
      gameResultText: this.resultTextFunction(),
      randomNumber: choicesList[GenerateRandomNumber()],
    }))
  }

  onClickScissorBtn = () => {
    const updatedScore = this.updatingScoreFunction(this.resultTextFunction())
    this.setState(prevState => ({
      gameResultView: !prevState.gameResultView,
      score: updatedScore,
      btnDetails: choicesList[1],
      randomNumber: choicesList[GenerateRandomNumber()],
      gameResultText: this.resultTextFunction(),
    }))
  }

  updateGameResult = text => {
    if (text === 'YOU WON') {
      this.setState(prevState => ({
        gameResultView: !prevState.gameResultView,
        score: prevState.score + 1,
      }))
    } else if (text === 'YOU LOSE') {
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

  render() {
    const {
      gameResultView,
      randomNumber,
      btnDetails,
      score,
      gameResultText,
    } = this.state

    console.log('randome number', GenerateRandomNumber())

    return (
      <RockPaperScissors>
        <TopContainer>
          <TextContainer>
            <Heading>ROCK</Heading>
            <Heading>PAPER</Heading>
            <Heading>SCISSORS</Heading>
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
            gameResultText={gameResultText}
          />
        )}
      </RockPaperScissors>
    )
  }
}
export default App
