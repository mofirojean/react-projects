import logo from '../assets/react.svg'

function Header() {
    return (
        <>
            <nav>
                <div>
                    <img src={logo} alt="react-logo"/>
                    <h3>ReactFacts</h3>
                </div>
                <h4>React Course</h4>
            </nav>
        </>
    )
}

export default Header;
