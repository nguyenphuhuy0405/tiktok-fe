import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    leftIcon = false,
    rightIcon = false,
    outline = false,
    rounded = false,
    small = false,
    large = false,
    disabled = false,
    children,
    className,
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
            {leftIcon}
            <span>{children}</span>
            {rightIcon}
        </Component>
    )
}

export default Button
