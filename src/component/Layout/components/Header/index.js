import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEllipsisVertical,
    faLightbulb,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { faUser, faBookmark } from '@fortawesome/free-regular-svg-icons'
import TippyTooltip from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional
import classNames from 'classnames/bind'

import styles from './Header.module.scss'
import Button from '~/component/Button'
import Menu from '~/component/Popper/Menu'
import Image from '~/component/Image'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { MessageIcon, NotificationIcon, TiktokIcon, UploadIcon } from '~/component/Icons'
import Search from '~/component/Layout/components/Search'

const cx = classNames.bind(styles)

const MENU_LIST = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm nhà sáng tạo',
        to: '/creator',
    },
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
]

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle language change
                break
            default:
        }
    }

    const currentUser = true
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Yêu thích',
            to: '/favorite',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_LIST,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <TiktokIcon />
                </div>

                <Search />

                <div className={cx('action')}>
                    <Button leftIcon={<UploadIcon />}>Tải lên</Button>
                    {currentUser ? (
                        <>
                            <TippyTooltip content="Tin nhắn" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </TippyTooltip>
                            <TippyTooltip content="Thông báo" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <NotificationIcon />
                                    <span className={cx('notification-number')}>33</span>
                                </button>
                            </TippyTooltip>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_LIST} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                fallback="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                alt="Nguyễn Văn A"
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/121c8f1f720a8b9a8b6729457abe2d42~c5_100x100.jpeg?x-expires=1699794000&x-signature=Imt8muc%2ByI8bmY0s54n9xfuzuWc%"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
