import {
  ResultCon,
  UserContainer,
  UserOpponentContainer,
  ResultPara,
  ResultImage,
  PlayAgainBtn,
  ResultText,
} from './styledComponents'

const GameResultView = props => {
  const {btnDetails, randomNumber, updateGameResult, gameResultText} = props
  const {imageUrl} = btnDetails

  const onClickPlayAgain = () => {
    updateGameResult()
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
      <ResultText>{gameResultText}</ResultText>
      <PlayAgainBtn onClick={onClickPlayAgain}>PLAY AGAIN</PlayAgainBtn>
    </ResultCon>
  )
}

export default GameResultView
