import React from 'react'
import MEC from '../assets/MEC.png'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
return (
<>
    <div className="contact_back" id='contact'>
        <h1> Entre em <span className='remove'>Contato</span></h1>
        <div className="grid_color">
            <div className="left">
                <div className="flex">
                    <form action="https://formsubmit.co/atendimento.faita@gmail.com" method="POST">
                        <fieldset>
                            <legend><b>Fórmulário de Contato</b></legend>
                            <br />
                            <div className="inputBox">
                                <input type="text" name="nome" id="nome" className="inputUser" required />
                                <label for="nome" class="labelInput">Nome completo</label>
                            </div>
                            <br /><br />
                            <div className="inputBox">
                                <input type="text" name="email" id="email" className="inputUser" required />
                                <label for="email" className="labelInput">O Email</label>
                            </div>
                            <br /><br />
                            <div className="inputBox">
                                <input type="tel" name="telefone" id="telefone" className="inputUser" required />
                                <label for="telefone" class="labelInput">Telefone</label>
                            </div>
                            <br /><br />
                            <div className="inputBox">
                                <textarea name="message" id="message" cols="10" rows="10" className='inputUser textArea'
                                    required>
                                </textarea>
                                <label for="message" class="labelInput labelArea">Mensagem...</label>
                            </div>
                            <br /><br />
                            <input type="submit" name="submit" id="submit" />
                        </fieldset>
                    </form>

                </div>
            </div>
            <div className="right_contact">
                <h1>Faita</h1>
                <p>@faita.edu.br</p>
                <p>Preencha todo o formulário e em breve entraremos em contato, seja Faita também!</p>
                <img src={MEC} alt="logo" />
            </div>
        </div>
    </div>
    <div />
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

export default Contact