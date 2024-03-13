

import { FaCalendarAlt } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { IoMenu } from "react-icons/io5"
import { MdChurch, MdHomeFilled, MdNaturePeople, MdPhone } from "react-icons/md"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
    <a href='/' className="logo"><Link to='/'><img src="/img/Logo.png" alt=''/></Link></a>
    <input type='checkbox' id="check"/>
    <label htmlFor="check" className="icons">
        <IoMenu id="menu-icon"/>
        <IoMdClose id="close-icon"/>
    </label>
    <nav className="nav-bar">
        <a href='https://www.DreamScape-inicio.com' style={{"--i":0}}><Link to='/'><MdHomeFilled className="icon"/>Inicio</Link></a>
        <a href='https://www.DreamScape-pueblos-magicos.com' style={{"--i":1}}><Link to='/pueblos-magicos' className="active"><MdChurch className="icon"/>Pueblos Mágicos</Link></a>
        <a href='https://www.DreamScape-eventos-internacionales.com' style={{"--i":2}}><Link to='/eventos-internacionales'><FaCalendarAlt className="icon"/>Eventos Internacionales</Link></a>
        <a href='https://www.DreamScape-ecoturismo.com' style={{"--i":3}}><Link to='/ecoturismo'><MdNaturePeople className="icon"/>Ecoturismo</Link></a>
        <a href='https://www.DreamScape-contacto.com' style={{"--i":4}}><Link to='/contacto'><MdPhone className="icon"/>Contacto</Link></a>
    </nav>
</header>
  )
}

export default Header