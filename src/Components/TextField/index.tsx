type InputProps = {
  text?: string,
  onChange(newValue: string): void
}

export function TextField({text, onChange}:InputProps) {
  return (
    <>
      <input onChange={(e) => onChange(e.target.value)} value={text} />
    </>
  )
}
