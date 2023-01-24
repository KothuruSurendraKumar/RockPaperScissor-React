import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import GameItem from '../GameItem'
import './index.css'

import {
  Container,
  Heading,
  Paragraph,
  UnorderList,
  Button1,
  ChoiceListContainer,
  RulesButton,
  RulesImage,
  PopupContainer,
  CloseButton,
  ResultContainer,
  Result,
  Image1,
  AppContainer,
  Pcount,
  Pcount1,
} from './styledComponent'

class Game extends Component {
  state = {
    count: 0,
    showResult: false,
    userSelectedImage: '',
    userSelectedId: '',
    randomImage: '',
    randomId: '',
  }

  componentDidMount() {
    this.getChoiceList()
  }

  getResult = (id, imageUrl) => {
    const {choicesList} = this.props
    const getRandomChoice = choicesList[Math.floor(Math.random() * 3)]

    let result
    if (id === 'PAPER' && getRandomChoice.id === 'ROCK') {
      result = 'YOU WON'
    } else if (id === 'SCISSORS' && getRandomChoice.id === 'ROCK') {
      result = 'YOU LOSE'
    } else if (id === 'SCISSORS' && getRandomChoice.id === 'PAPER') {
      result = 'YOU WON'
    } else if (id === 'ROCK' && getRandomChoice.id === 'PAPER') {
      result = 'YOU LOSE'
    } else if (id === 'ROCK' && getRandomChoice.id === 'SCISSORS') {
      result = 'YOU WON'
    } else if (id === 'PAPER' && getRandomChoice.id === 'SCISSORS') {
      result = 'YOU LOSE'
    } else {
      result = 'IT IS DRAW'
    }

    switch (result) {
      case 'YOU WON':
        this.setState(prevState => ({
          count: prevState.count + 1,
          showResult: true,
          userSelectedImage: imageUrl,
          userSelectedId: id,
          randomImage: getRandomChoice.imageUrl,
          randomId: getRandomChoice.id,
          result,
        }))
        break
      case 'YOU LOSE':
        this.setState(prevState => ({
          count: prevState.count - 1,
          showResult: true,
          userSelectedImage: imageUrl,
          userSelectedId: id,
          randomImage: getRandomChoice.imageUrl,
          randomId: getRandomChoice.id,
          result,
        }))
        break
      case 'IT IS DRAW':
        this.setState({
          showResult: true,
          userSelectedImage: imageUrl,
          userSelectedId: id,
          randomImage: getRandomChoice.imageUrl,
          randomId: getRandomChoice.id,
          result,
        })
        break
      default:
        break
    }
  }

  getChoiceList = () => {
    const {choicesList} = this.props
    return (
      <ChoiceListContainer>
        <UnorderList>
          {choicesList.map(item => (
            <GameItem item={item} getResult={this.getResult} />
          ))}
        </UnorderList>
        <Popup
          modal
          trigger={<RulesButton>Rules</RulesButton>}
          className="popup-container"
        >
          {close => (
            <PopupContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </ChoiceListContainer>
    )
  }

  startAgain = () => {
    this.setState({
      showResult: false,
      userSelectedImage: '',
      userSelectedId: '',
      randomImage: '',
      randomId: '',
      result: '',
    })
  }

  renderGetResult = () => {
    const {userSelectedImage, randomImage, result} = this.state

    return (
      <ResultContainer>
        <div>
          <Heading>You</Heading>
          <Image1 src={userSelectedImage} alt="your choice" />
        </div>
        <Result>
          <p>{result}</p>
          <Button1 type="button" onClick={this.startAgain}>
            Play Again
          </Button1>
        </Result>
        <div>
          <Heading>Opponent</Heading>
          <Image1 src={randomImage} alt="opponent choice" />
        </div>
      </ResultContainer>
    )
  }

  render() {
    const {count, showResult} = this.state
    return (
      <AppContainer>
        <Container>
          <div>
            <Heading>
              ROCK <br /> PAPER <br /> SCISSORS
            </Heading>
          </div>
          <div>
            <Paragraph>
              <Pcount>Score</Pcount>
              <Pcount1>{count}</Pcount1>
            </Paragraph>
          </div>
        </Container>
        {showResult ? this.renderGetResult() : this.getChoiceList()}
      </AppContainer>
    )
  }
}
export default Game
