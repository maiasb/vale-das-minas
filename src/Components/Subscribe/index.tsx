import { Button } from '../Button'
import './index.css'

type SubscribeProps = {
  onClick?(): void
}

export function Subscribe({onClick}:SubscribeProps) {

  return (
    <div>
      <h1>Subscribe</h1>
      <Button text="CADASTRAR" onClick={onClick} />
    </div>
  )
}
