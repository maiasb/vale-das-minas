type InputProps = {
  name?: string,
  text?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextField({name, text, onChange}:InputProps) {
  return (
    <>
      <input name={name} onChange={onChange} value={text} />
    </>
  )
}
