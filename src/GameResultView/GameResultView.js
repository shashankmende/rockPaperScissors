import {
  ResultCon,
  UserContainer,
  UserOpponentContainer,
  ResultPara,
  ResultImage,
  PlayAgainBtn,
  ResultText,
} from './styledComponents'

let gameText = ''
const GameResultView = props => {
  const {btnDetails, randomNumber, updateGameResult} = props
  const {imageUrl} = btnDetails

  const callRockFunction = () => {
    if (randomNumber.id === 'PAPER') {
      gameText = 'YOU LOSE'
      return gameText
    }
    gameText = 'YOU WON'
    return gameText
  }

  const callPaperFunction = () => {
    if (randomNumber.id === 'ROCK') {
      gameText = 'YOU WON'
      return gameText
    }
    gameText = 'YOU LOSE'
    return gameText
  }

  const callScissorFunction = () => {
    if (randomNumber.id === 'ROCK') {
      gameText = 'YOU LOSE'
      return gameText
    }
    gameText = 'YOU WON'
    return gameText
  }

  const GameResultTextFunction = () => {
    switch (btnDetails.id) {
      case randomNumber.id:
        return 'IT IS DRAW'
      case 'ROCK':
        return callRockFunction()

      case 'PAPER':
        return callPaperFunction()

      case 'SCISSORS':
        return callScissorFunction()

      default:
        return null
    }
  }

  const onClickPlayAgain = () => {
    updateGameResult(gameText)
  }

  return (
    <ResultCon>
      <UserOpponentContainer>
        <UserContainer>
          <ResultPara>YOU</ResultPara>
          <ResultImage src={imageUrl} alt="your choice" />
        </UserContainer>
        <UserContainer>
          <ResultPara>OPPONENT</ResultPara>
          <ResultImage src={randomNumber.imageUrl} alt="opponent choice" />
        </UserContainer>
      </UserOpponentContainer>
      <ResultText>{GameResultTextFunction()}</ResultText>
      <PlayAgainBtn onClick={onClickPlayAgain}>PLAY AGAIN</PlayAgainBtn>
    </ResultCon>
  )
}

export default GameResultView
