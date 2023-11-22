import TippyHeadless from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/component/Popper'
import AccountItem from '~/component/AccountItem'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { LoadingIcon, RemoveIcon, SearchIcon } from '~/component/Icons'
import styles from './Search.module.scss'
import { useRef } from 'react'
import { useEffect } from 'react'
import useDebounce from '~/hooks/useDebounce'
const cx = classNames.bind(styles)

function Search() {
    const [visible, setVisible] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()

    const debounce = useDebounce(searchValue, 500)

    useEffect(() => {
        setLoading(true)
        if (!searchValue.trim()) {
            setLoading(false)
            setSearchResult([])
            return
        }
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data)
                setLoading(false)
            })
    }, [debounce])

    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    return (
        <TippyHeadless
            interactive
            visible={visible && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={hide}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    className={cx('search-input')}
                    placeholder="Tìm kiếm"
                    onFocus={visible ? hide : show}
                    onChange={(e) => {
                        e.target.value = e.target.value.trimStart()
                        setSearchValue(e.target.value)
                    }}
                    onKeyUp={(e) => {
                        console.log('Tìm kiếm')
                    }}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <RemoveIcon />
                    </button>
                )}
                {loading && (
                    <button className={cx('loading')}>
                        <LoadingIcon />
                    </button>
                )}
                <span></span>
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    )
}

export default Search
