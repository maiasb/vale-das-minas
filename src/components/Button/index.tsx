import './index.css'

type ButtonProps = {
  fullWidth?: boolean,
  text: string,
  onClick(): void
}

function Button({fullWidth = false, text, onClick}:ButtonProps) {

  return (
    <button style={{width: `${fullWidth ? '100%' : ''}`}} onClick={onClick}>{text}</button>
  )
}

export { Button }
