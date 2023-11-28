import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    small = false,
    large = false,
    disabled = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Component = 'button'
    const props = {
        onClick,
        ...passProps,
    }

    //Remove event if disable
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') || typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    const classnames = cx('wrapper', {
        [className]: className,
        primary,
        leftIcon,
        rightIcon,
        outline,
        rounded,
        small,
        large,
        disabled,
    })
    if (to) {
        props.to = to
        Component = Link
    } else if (href) {
        props.href = href
        Component = 'a'
    }

    return (
        <Component className={classnames} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {children && <span className={cx('title')}>{children}</span>}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    )
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button
