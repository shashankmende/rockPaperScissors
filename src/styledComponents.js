import styled from 'styled-components'

export const RockPaperScissors = styled.div`
  height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TopContainer = styled.div`
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 10px;
  margin-top: 40px;
  margin-left: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  color: #223a5f;
  color: black;
  text-align: center;
  padding: 20px;
`

export const ScoreText = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 40px;
  @media screen and (max-width: 576px) {
    width: 80%;
  }
  @media screen and (min-width: 577px) {
    width: 80%;
  }
`

export const ScissorAndRockContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;

  margin-bottom: 40px;
`

export const PaperContainer = styled.div`
  align-self: center;
`

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  height: 100px;
  width: 100px;
`

export const BtnImg = styled.img`
  height: 200px;
  width: 200px;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`

export const PopupContainer = styled.div`
  align-self: flex-end;
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 8px;
  padding: 8px;
  margin-right: 20px;
  cursor: pointer;
  outline: none;
`

export const RulesContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const RulesImg = styled.img`
  width: 100%;
`

export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
`
