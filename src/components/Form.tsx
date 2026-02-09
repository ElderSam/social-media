interface InputGroupProps {
  inputTitle: string;
  name: string;
  placeholder: string;
  value: any;
  setValue: Function;
}

export function FormTitle({text }: { text: string }) {
  return <p className="modal-title">{text}</p>
}

export function InputTitle({text }: { text: string }) {
  return <p className="input-title">{text}</p>
}

export function InputGroup({
    inputTitle,
    name,
    placeholder='',
    value,
    setValue
  }: InputGroupProps) {
  return (
    <>
      <InputTitle text={inputTitle} />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        autoFocus
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  )
}

