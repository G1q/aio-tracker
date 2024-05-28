import { Outlet } from 'react-router-dom'
import Logo from '../components/layout/Logo/Logo'

const SimpleHeaderLayout = () => {
    return (
        <>
            <header>
                <Logo />
            </header>
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default SimpleHeaderLayout