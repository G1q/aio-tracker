import { Outlet } from 'react-router-dom'

const SimpleHeaderLayout = () => {
    return (
        <>
            <header>LOGO</header>
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default SimpleHeaderLayout