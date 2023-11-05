import Following from '~/pages/Following'
import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import { HeaderLayout } from '~/component/Layout'
import Search from '~/pages/Search'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderLayout },
    { path: '/search', component: Search, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
