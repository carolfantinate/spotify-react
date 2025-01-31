import './Sidebar.css';
import logo from '../assets/icons/logo-spotify.png'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar_navigation">
                <div className="logo">
                    <a href="">
                        <img src={logo} alt="logo Spotify" />
                    </a>
                </div>

                <ul>
                    <li>
                        <a href="">
                            <span className="material-icons li-icons">home</span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className="material-icons li-icons">search</span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="biblioteca">
                <div className="biblioteca_content">
                    <button className="biblioteca_button">
                        <span className="material-icons book">book_2</span>
                        <span>Sua Biblioteca</span>
                        <span className="material-icons add">add</span>
                    </button>
                </div>

                <section className="section-playlist">
                    <div className="section-playlist_content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist_button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>

                <section className="section-podcast">
                    <div className="section-podcast_content">
                        <span className="text title">Que tal seguir um podcast novo?</span>
                        <span className="text subtitle">Avisaremos você sobre novos episódios.</span>
                        <button className="section-podcast_button">
                            <span>Explore podcasts</span>
                        </button>
                    </div>
                </section>

                <div className="cookies">
                    <a href="">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages_button">
                        <span className="material-icons globe">languages</span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>

        </div>
    )
};

export default Sidebar;
