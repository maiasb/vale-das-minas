import './index.css'

type SelectProps = {
  label?: string,
  options: string[],
  onClick(value: string): void
}

function Select({label, options, onClick}:SelectProps) {

  return (
    <div className='div-select'>
      {label ?? (<label>{label}</label>)}
      <div className='div-options'>
        {
          options.map((option) => {
            return (
              <button onClick={() => onClick(option)} style={{width: '100%'}} key={option}>{option}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export { Select }
