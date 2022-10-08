import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './button-link.module.scss'

const ButtonLink = ({ children, size, to, linkContent, isButton, onClick }) => {
  const getButtonSize = (buttonSize) => {
    const buttonSizes = {
      large: styles['button-link-large'],
      small: styles['button-link-small'],
      default: styles['button-link-small'],
    }
    return buttonSize ? buttonSizes[buttonSize] : buttonSizes.default
  }
  const buttonSize = getButtonSize(size)

  return isButton ? (
    <button className={`${buttonSize}`} onClick={onClick} type="button">
      {children}
      <span>{linkContent}</span>
    </button>
  ) : (
    <Link href={to}>
      <a className={buttonSize}>
        <span>{linkContent}</span>
        {children}
      </a>
    </Link>
  )
}

ButtonLink.defaultProps = {
  children: '',
  size: '',
  linkContent: '',
  isButton: false,
  onClick: () => {},
  to: '/',
}

ButtonLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  size: PropTypes.string,
  linkContent: PropTypes.string,
  isButton: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string,
}

export default ButtonLink
