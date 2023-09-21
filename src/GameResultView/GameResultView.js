import {
  ResultCon,
  UserContainer,
  UserOpponentContainer,
  ResultPara,
  ResultImage,
  PlayAgainBtn,
} from './styledComponents'

const GameResultView = props => {
  const {btnDetails, randomNumber, updateGameResult} = props
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
          <ResultImage src={randomNumber.imageUrl} alt="your choice" />
        </UserContainer>
      </UserOpponentContainer>
      <PlayAgainBtn onClick={onClickPlayAgain}>PLAY AGAIN</PlayAgainBtn>
    </ResultCon>
  )
}

export default GameResultView
