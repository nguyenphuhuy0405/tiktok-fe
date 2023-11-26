import Following from '~/pages/Following'
import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import { HeaderLayout } from '~/component/Layout'
import Search from '~/pages/Search'
import routesConfig from '~/config/routes'

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload, layout: HeaderLayout },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.profile, component: Profile },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
