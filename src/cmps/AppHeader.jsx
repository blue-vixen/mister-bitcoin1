import { NavLink, withRouter } from "react-router-dom";

function _AppHeader(props) {

    return (
        <header className='app-header'>
            <section className='container'>
                <h1 className='logo'>Mitzster Bitcoin</h1>
                {/* <section className="back-container">
                    <button onClick={props.history.goBack}>Back</button>
                </section> */}
                <nav>
                    <NavLink activeClassName="my-active" exact to='/'>Home</NavLink>
                    <NavLink activeClassName="my-active" to='/contact'>Contacts</NavLink>
                    <NavLink activeClassName="my-active" to='/statistics'>Statistics</NavLink>
                </nav>
            </section>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)