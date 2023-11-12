import TippyHeadless from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { Wrapper as PopperWrapper } from '~/component/Popper/index'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem data={item} key={index} />
        })
    }

    return (
        <TippyHeadless
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItems()}</PopperWrapper>
                </div>
            )}
            interactive="true"
            delay={[0, 700]}
            visible
            placement="bottom-end"
        >
            {children}
        </TippyHeadless>
    )
}

export default Menu
