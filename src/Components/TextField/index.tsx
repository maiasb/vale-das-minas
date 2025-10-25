type InputProps = {
  label?: string,
  name?: string,
  type?: string,
  text?: string,
  errorMessage?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextField({label, name, type, text, errorMessage, onChange}:InputProps) {
  return (
    <>
      {label ?? (<label>{label}</label>)}
      <input name={name} type={type} onChange={onChange} value={text} />
      {errorMessage ?? (<span>{errorMessage}</span>)}
    </>
  )
}
