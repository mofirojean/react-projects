import logo from '../assets/react.svg'

function Header() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-item">
                    <img src={logo} className="nav-img" alt="react-logo"/>
                    <h3>ReactFacts</h3>
                </div>
                <h4>React Course</h4>
            </nav>
        </>
    )
}

export default Header;
