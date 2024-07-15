import React from 'react'
import banner from '../assets/banner.jpg'
import curso1 from '../assets/curso1.jpg'
import curso2 from '../assets/curso2.jpg'
import curso3 from '../assets/curso3.jpg'


const Main = () => {

    const handleNavigate = () => {
        window.location.href = 'https://faculdadefaita.com.br/sys/';
    }

    const handleBook = () => {
        window.location.href = 'https://bdsolucto.librarika.com/search/catalogs';
    }

  return (
    <>
        <main>
            <div className="left">
                <h1>Conheça sua <br /> <span>faculdade.</span></h1>
                <p>A FAITA atua há 25 anos na área da educação, localizada na região do Litoral Sul do Estado de São Paulo, abrangendo os municípios de Praia Grande, Mongaguá, Itanhaém, Peruíbe, Itariri e Pedro de Toledo. A Faculdade oferece cursos superiores em Adminstração, Logística e Pedagogia. Cursos de Pós-Graduação nas Áreas: Educação, Administração e Logística.</p>
            </div>
            <div className="right">
                <img src={banner} alt="imagem" />
            </div>
        </main>
        <div className="card-info">
            <div className="text-info">
                <h2>Não existe investimento <br />maior do que <span id='italic'>investir no <br />seu futuro.</span></h2>
                <p>#ofuturoéFAITA</p>
                <button className="btn-sign">Inscreva-se</button>
            </div>
        </div>
        <div className="enrollment">
            <h1>Matriculas <span className="remove">Abertas!</span></h1>
        </div>
        <div className="enrollment-open">
            <div className="bg">
                <h2>Pedagogia</h2>
                <p>O curso de Pedagogia é voltado para a área da educação com ênfase nos processos de aprendizagem.</p>
                <button className="btn-sign">Inscreva-se</button>
            </div>
            <div className="bg">
                <h2>Administração</h2>
                <p>O curso de Administração constrói um excelente caminho para aqueles que sonham em ter o próprio negócio.</p>
                <button className="btn-sign">Inscreva-se</button>
            </div>
            <div className="bg">
                <h2>Logística</h2>
                <p>O curso de Logística capacita profissionais para avaliar, projetar e implementar sistemas de transporte, armazenamento distribuição e entrega de produtos de uma empresa ou instituição.</p>
                <button className="btn-sign">Inscreva-se</button>
            </div>
        </div>
        <div className="portal">
            <div className="portal-aluno">
                <div className="portal-left">
                    <h1>Portal do Aluno:</h1>
                    <p>Tenha acesso a tudo que é <br />relevante para sua geração!</p>
                </div>
                <div className="portal-right">
                    <button onClick={handleNavigate} className="access">
                        Acessar Portal
                    </button>
                </div>
            </div>
        </div>
        <div className="course">
            <div className="text-course">
                <h1>CURSOS</h1>
                <p>Por área de atuação!</p>
            </div>
            <div className="card-course">
                <span>
                    <img src={curso1} alt="image" />
                </span>
                <span className='course-text'>
                    <h2>Pedagogia</h2>
                    <p>Com o setor da Educação em constante expansão e a rápida evolução da tecnologia, torna-se imperativo mobilizar profissionais para atuarem além das tradicionais salas de aula. A transformação digital e as novas metodologias de ensino exigem que educadores, administradores e especialistas se adaptem a novos papéis e desafios.  Assim, a capacitação contínua e a flexibilidade profissional são essenciais para atender às demandas emergentes e garantir um futuro educacional dinâmico e inovador.</p>
                </span>
                <a href="#">Ver grade <br />curricular</a>
            </div>
            <div className="card-course">
                <span>
                    <img src={curso2} alt="image" />
                </span>
                <span className='course-text'>
                    <h2>Administração</h2>
                    <p>O curso de Administração é projetado para desenvolver profissionais empreendedores, críticos e criativos, capacitando-os com habilidades de liderança e realização excepcionais. Além de uma sólida formação teórica, o curso oferece uma abordagem prática, preparando os alunos para enfrentar desafios reais do mercado.</p>
                </span>
                <a href="#">Ver grade <br />curricular</a>
            </div>
            <div className="card-course">
                <span>
                    <img src={curso3} alt="image" />
                </span>
                <span className='course-text'>
                    <h2>Logística</h2>
                    <p>Esta área permite o desenvolvimento de competências essenciais para uma gestão moderna, sustentável e inovadora, assegurando o alto desempenho do trabalho em equipe. Ao focar na integração de práticas sustentáveis e no uso de tecnologias avançadas, os profissionais são preparados para liderar organizações de maneira eficiente e responsável. Além disso, é enfatizada a importância da comunicação eficaz, da colaboração interdisciplinar e da adaptabilidade às mudanças do mercado.</p>
                </span>
                <a href="#">Ver grade <br />curricular</a>
            </div>
        </div>
        <div className="portal">
            <div className="portal-aluno">
                <div className="portal-right">
                    <button onClick={handleBook} className="access">
                        Acessar Bibliotecas
                    </button>
                </div>
                <div className="portal-left">
                    <h1>Biblioteca:</h1>
                    <p>Acesse sua biblioteca aqui!</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main