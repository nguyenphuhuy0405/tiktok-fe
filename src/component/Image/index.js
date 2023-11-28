import { useState } from 'react'
import { forwardRef } from 'react'
import classNames from 'classnames/bind'
import styles from './Image.module.scss'
import images from '~/assets/images'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('')
    const handleError = () => {
        setFallback(customFallback)
    }

    return <img className={cx(className)} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image
