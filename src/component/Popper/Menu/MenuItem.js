import Button from '~/component/Button'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    const classNames = cx('menu-item', {
        separate: data.separate,
    })

    return (
        <Button className={classNames} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    )
}

MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
}

export default MenuItem
