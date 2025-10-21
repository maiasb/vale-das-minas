import './index.css'

type ButtonProps = {
    text?: string
};

function Button ({text}: ButtonProps) {
  return (
    <button className='button'>{text}</button>
  )
}

export { Button }
