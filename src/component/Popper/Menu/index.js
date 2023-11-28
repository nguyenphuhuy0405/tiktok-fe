import TippyHeadless from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import PropTypes from 'prop-types'

import MenuItem from './MenuItem'
import MenuHeader from './MenuHeader'
import { Wrapper as PopperWrapper } from '~/component/Popper/index'
import { useState } from 'react'

const cx = classNames.bind(styles)

const defaultFn = () => {
    console.log('Menu change')
}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    let current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = item.children ? true : false
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }
    console.log('history: ', history)

    return (
        <div>
            <TippyHeadless
                interactive="true"
                delay={[0, 700]}
                placement="bottom-end"
                hideOnClick={hideOnClick}
                onHide={() => {
                    setHistory((prev) => prev.slice(0, 1))
                }}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {history.length > 1 && (
                                <MenuHeader
                                    title={current.title}
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1))
                                    }}
                                />
                            )}
                            <div className={cx('menu-body')}>{renderItems()}</div>
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </TippyHeadless>
        </div>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Menu
