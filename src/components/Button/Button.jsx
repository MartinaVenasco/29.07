import './index.css';

const Button = ({btnTextContent="Click", color="ghostwhite", className="Button", type="button", onHandleClick=(() => {})}) => {
  return (
    <button onClick={onHandleClick} type={type} className={className} style={{ backgroundColor: color }}>{ btnTextContent }</button>
  )
}

export default Button;