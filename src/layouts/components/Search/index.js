import TippyHeadless from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { useState, useRef, useEffect } from 'react'

import { Wrapper as PopperWrapper } from '~/component/Popper'
import AccountItem from '~/component/AccountItem'
import { LoadingIcon, RemoveIcon, SearchIcon } from '~/component/Icons'
import styles from './Search.module.scss'
import useDebounce from '~/hooks/useDebounce'
import * as searchService from '~/services/searchService'

const cx = classNames.bind(styles)

function Search() {
    const [visible, setVisible] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()

    const debounce = useDebounce(searchValue, 500)

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([])
            return
        }

        const fetchApi = async () => {
            setLoading(true)

            const result = await searchService.search(debounce)
            setSearchResult(result)

            setLoading(false)
        }
        fetchApi()
    }, [debounce])

    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    const handleChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }

    return (
        <div>
            <TippyHeadless
                interactive
                visible={visible && searchResult.length > 0}
                onClickOutside={hide}
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
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Tìm kiếm"
                        onFocus={visible ? hide : show}
                        onChange={handleChange}
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
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    )
}

export default Search
