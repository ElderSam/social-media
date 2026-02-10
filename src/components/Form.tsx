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
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
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

export function Button({ text, disabled = false, onClick, className = '', type = 'submit' }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      <p>{text}</p>
    </button>
  )
}