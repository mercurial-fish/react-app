
//NOTE - Used Bootstrap to set up the navbar styling and functionality. The header and the list items
//all contain anchors and the capability to have links, but right now they do not lead anywhere

export function Navigation() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-primary bg-opacity-75">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">React App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}