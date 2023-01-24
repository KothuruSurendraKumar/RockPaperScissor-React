import {Button, Image} from './styledComponent'

const GameItem = props => {
  const {item, getResult} = props
  const {imageUrl, id} = item

  const sendId = () => {
    getResult(id, imageUrl)
  }

  const testid = `${id.toLowerCase()}Button`

  return (
    <li>
      <Button onClick={sendId} data-testid={testid}>
        <Image src={imageUrl} alt={id} />
      </Button>
    </li>
  )
}

export default GameItem
