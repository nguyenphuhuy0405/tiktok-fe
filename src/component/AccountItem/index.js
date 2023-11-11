import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/121c8f1f720a8b9a8b6729457abe2d42~c5_100x100.jpeg?x-expires=1699794000&x-signature=Imt8muc%2ByI8bmY0s54n9xfuzuWc%3D"
                alt="Avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon class={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    )
}

export default AccountItem
