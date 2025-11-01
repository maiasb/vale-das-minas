import './index.css'

type FormProps = {
  nome: string
  profissao: string
  telefone: string
  email: string
  renda: string
  estado: string
  veiculo: string
}

type SelectProps = {
  label?: string,
  options: string[],
  onClick(value: string): void,
  form: FormProps
}

function Select({label, options, onClick, form}:SelectProps) {

  return (
    <div className='div-select'>
      {label ?? (<label>{label}</label>)}
      <div className='div-options'>
        {
          options.map((option) => {
            return (
              <button className={`button-select ${form.estado == option ? 'focus' : ''} ${form.renda == option ? 'focus' : ''}`} onClick={() => onClick(option)} style={{width: '100%'}} key={option}>{option}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export { Select }
