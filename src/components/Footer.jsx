import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
        <footer>
        <div className="footer-info">
            <div className="info">
                <p>EAD Semipresencial e EAD com aulas ao vivo são <br />metodologias do Ensino a Distância <br />Politicas de Privacidade | Politica de Cookies</p>
                <p>@COPYRIGHT 2024 | Todos os direitos reservados <br />Faculdade FAITA - Criado e Desenvolvido por Leandro Castro.</p>
            </div>
            <div className="socials">
                <p>Acesse nossas redes!</p>
                <span className="icons">
                    <a href="https://www.instagram.com/faculdadefaita/"><FiInstagram color='#fff' fontSize={30}/></a>
                    <a href="https://www.facebook.com/profile.php?id=100092343487862"><FaFacebookF color='#fff'fontSize={30}/></a>
                    <a href="https://contate.me/faculdadefaita"><FaWhatsapp color='#fff'fontSize={30}/></a>
                    <a href="contato@cfep.org.br"><MdOutlineMail color='#fff' fontSize={30}/></a>
                </span>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer