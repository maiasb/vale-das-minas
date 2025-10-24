type InputProps = {
  text?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextField({text, onChange}:InputProps) {
  return (
    <>
      <input onChange={onChange} value={text} />
    </>
  )
}
