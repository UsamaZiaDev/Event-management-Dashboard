import NavSidebar from "../../core/fakeData/NavSidebar"
import { Link } from "react-router-dom"

const Sidebar = ({width}) => {  

  return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100" style={{'width':`${width}px`}} >
            
            {/* Brand */}
            <Link to="/" className="mb-3 mb-md-0 text-center text-white text-decoration-none">
                <h1 className="fw-bold mb-0 text-secondary">H<span className="text-light">UZ</span></h1>
            </Link>
            <hr/>

            {/* Nav */}
            <ul className="nav nav-pills flex-column mb-auto">
                { NavSidebar?.map( nav =>
                    <li  className="nav-item rounded" key={nav?.name}>
                        <Link to={nav?.slug} 
                                className={`nav-link text-white  ${ nav?.active && ' active '} fs-5 d-flex align-items-center`}
                        >
                            <span className="nav-icon me-2 mb-1 d-block"> {nav?.icon} </span>
                            <span> {nav?.name} </span>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
  )
}

export default Sidebar