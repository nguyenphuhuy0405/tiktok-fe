import Following from '~/pages/Following'
import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import { HeaderLayout } from '~/layouts'
import Search from '~/pages/Search'
import config from '~/config'

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderLayout },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.profile, component: Profile },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
