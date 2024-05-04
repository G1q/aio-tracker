import './Button.css'
import clsx from 'clsx'

const Button = ({onClick, text, variant, size, disabled, className, ...rest}) => {
  return (
    <button type="button" className={clsx('btn', className)} onClick={onClick} disabled={disabled} data-variant={variant} data-size={size} {...rest}>
      {text}
    </button>
  )
}

export default Button