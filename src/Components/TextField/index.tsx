import './index.css'

type InputProps = {
  label?: string,
  name?: string,
  type?: string,
  text?: string,
  placeholder?: string,
  errorMessage?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export function TextField({label, name, type, text, placeholder, errorMessage, onChange, onBlur}:InputProps) {
  return (
    <div className={`textField ${errorMessage ? 'error' : ''}`}>
      {label ?? (<label>{label}</label>)}
      <input name={name} type={type} value={text} placeholder={placeholder} onChange={onChange} onBlur={onBlur} />
      {errorMessage ?? (<span>{errorMessage}</span>)}
    </div>
  )
}
