import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaAngleDown, FaBars } from "react-icons/fa";

const Header = () => {
    const [isActive, setActive] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setActive(prevState => !prevState);
    };

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <header>
                <nav>
                    <div className="logo-container">
                        <img id='logo' src={logo} alt="imagem" />
                        <button className="hamburger" onClick={toggleMenu}>
                            <FaBars color='#fff' fontSize={24} />
                        </button>
                    </div>
                    <ul className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
                        <li><a href="#">Ínicio</a></li>
                        <li className="dropdown">
                            <a href="https://faculdadefaita.com.br/sessao-2?tutors=0&courses=0">Cursos</a>
                            <ul className="dropdown-content">
                                <li><a href="#">Pedagogia</a></li>
                                <li><a href="#">Administração</a></li>
                                <li><a href="#">Logística</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Mural</a></li>
                        <li className="dropdown">
                            <span id='btn-down'>
                                <a href="#">Graduação</a>
                            </span>
                            <ul className="dropdown-content">
                                <li><a href="#">Presencial</a></li>
                                <li><a href="#">EAD</a></li>
                            </ul>
                        </li>
                        <li><a href="https://bdsolucto.librarika.com/search/catalogs">Biblioteca</a></li>
                        <li><a href="#">Contato</a></li>
                        <li>
                            <span id='aluno'>
                                <a href="https://faculdadefaita.com.br/sys/">Portal do Aluno</a>
                            </span>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
