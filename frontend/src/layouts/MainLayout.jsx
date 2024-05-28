import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header/Header'

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            {/* TODO: Footer */}
        </>
    )
}

export default MainLayout