import './Form.css';

interface InputGroupProps {
  inputTitle: string;
  name: string;
  placeholder: string;
  value: any;
  setValue: Function;
}

interface InputProps {
  name: string;
  placeholder: string;
  value: any;
  setValue: Function;
}

interface ButtonProps {
  text: string;
  isPending: boolean;
  value: any;
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
      <Input {...{ name, placeholder, value, setValue }} />
    </>
  )
}

export function TextAreaGroup({
    inputTitle,
    name,
    placeholder='',
    value,
    setValue
  }: InputGroupProps) {
  return (
    <>
      <InputTitle text={inputTitle} />
      <TextArea {...{ name, placeholder, value, setValue }} />
    </>
  )
}


export function FormTitle({text }: { text: string }) {
  return <p className="container-title">{text}</p>
}

export function InputTitle({text }: { text: string }) {
  return <p className="input-title">{text}</p>
}

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      name={props.name}
      placeholder={props.placeholder}
      autoFocus
      required
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
  )
}

export function TextArea(props: InputProps) {
  return (
    <textarea
      name={props.name}
      placeholder={props.placeholder}
      autoFocus
      required
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
  )
}

export function Button({ text, isPending, value }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={isPending || !value.trim()}
    >
      <p>{isPending ? 'LOADING...' : text}</p>
    </button>
  )
}