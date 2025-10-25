import './index.css'

type InputProps = {
  label?: string,
  name?: string,
  type?: string,
  text?: string,
  errorMessage?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export function TextField({label, name, type, text, errorMessage, onChange, onBlur}:InputProps) {
  return (
    <div className={`textField ${errorMessage ? 'error' : ''}`}>
      {label ?? (<label>{label}</label>)}
      <input name={name} type={type} onChange={onChange} onBlur={onBlur} value={text} />
      {errorMessage ?? (<span>{errorMessage}</span>)}
    </div>
  )
}
