/*
  variant: [blank (default)] | secondary | outline | ghost
  size: [blank (default)] | small | large | icon
  icon: [<icon_component />]
  iconPosition: before (default, blank) | after
*/

import './Button.css'
import clsx from 'clsx'

const Button = ({ onClick, text, variant, size, icon, iconPosition = 'before', disabled, className, ...rest }) => {
  return (
    <button type="button" className={clsx('btn', className)} onClick={onClick} disabled={disabled} data-variant={variant} data-size={size} {...rest}>
      {iconPosition === 'before' && icon}
      {size !== 'icon' && text}
      {iconPosition === 'after' && icon}
    </button>
  )
}

export default Button