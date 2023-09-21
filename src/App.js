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

class App extends Component {
  state = {
    btnDetails: choicesList[0],
    gameResultView: true,
    score: 0,
    randomNumber: choicesList[GenerateRandomNumber()],
  }

  onClickRockBtn = () => {
    this.setState(prevState => ({
      gameResultView: !prevState.gameResultView,
      btnDetails: choicesList[0],
      randomNumber: choicesList[GenerateRandomNumber()],
    }))
  }

  onClickPaperButton = () => {
    this.setState(prevState => ({
      gameResultView: !prevState.gameResultView,
      btnDetails: choicesList[2],
      randomNumber: choicesList[GenerateRandomNumber()],
    }))
  }

  onClickScissorBtn = () => {
    this.setState(prevState => ({
      gameResultView: !prevState.gameResultView,
      btnDetails: choicesList[1],
      randomNumber: choicesList[GenerateRandomNumber()],
    }))
  }

  updateGameResult = () => {
    this.setState(prevState => ({
      gameResultView: !prevState.gameResultView,
    }))
  }

  render() {
    const {gameResultView, randomNumber, btnDetails} = this.state

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
            <ScoreText>1</ScoreText>
          </ScoreContainer>
        </TopContainer>
        {gameResultView ? (
          <>
            <BottomContainer>
              <ScissorAndRockContainer>
                <Button data-testid="rockButton" onClick={this.onClickRockBtn}>
                  <BtnImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
                    alt="rockButton"
                  />
                </Button>
                <Button
                  data-testid="scissorsButton"
                  onClick={this.onClickScissorBtn}
                >
                  <BtnImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
                    alt="scissorsButton"
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
                    alt="paperButton"
                  />
                </Button>
              </PaperContainer>
            </BottomContainer>
            <PopupContainer>
              <Popup modal trigger={<ScoreText>Rules</ScoreText>}>
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
