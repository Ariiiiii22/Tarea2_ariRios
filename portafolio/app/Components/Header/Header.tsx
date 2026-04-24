import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

let HeaderData:String = "Arantza Ilian Ríos Barrera"

export default function Header(){
    return(
        <>
            <header className={styles.header} id="header">
                <nav className={`container ${styles.nav}`}>
                    <Link href="#home" className={styles.nav__logo}>
                        <span className={styles.logo__bracket}>&lt;</span>{HeaderData}<span className={styles.logo__bracket}>/&gt;</span>
                    </Link>
                    
            
                    <input type="checkbox" id="nav-toggle" className={styles.checkbox} />
                    <label htmlFor="nav-toggle" className={styles.nav__toggle}>
                        <i className="fas fa-bars"></i>
                    </label>
                    
                    <div className={styles.nav__menu} id="nav-menu">
                        <label htmlFor="nav-toggle" className={styles.nav__close}>
                            <i className="fas fa-times"></i>
                        </label>
                        
                        <ul className={styles.nav__list}>
                            <li className={styles.nav__item}>
                                <label htmlFor="nav-toggle">
                                    <Link href="#home" className={styles.nav__link}>Inicio</Link>
                                </label>
                            </li>
                            <li className={styles.nav__item}>
                                <label htmlFor="nav-toggle">
                                    <Link href="#interests" className={styles.nav__link}>Intereses</Link>
                                </label>
                            </li>
                            <li className={styles.nav__item}>
                                <label htmlFor="nav-toggle">
                                    <Link href="#cv" className={styles.nav__link}>CV</Link>
                                </label>
                            </li>
                            <li className={styles.nav__item}>
                                <label htmlFor="nav-toggle">
                                    <Link href="#projects" className={styles.nav__link}>Proyectos</Link>
                                </label>
                            </li>
                            <li className={styles.nav__item}>
                                <label htmlFor="nav-toggle">
                                    <Link href="#contact" className={styles.nav__link}>Contacto</Link>
                                </label>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="main">
                <section className={styles.hero} id="home">
    <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__content}>
            <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
            <h1 className={styles.hero__title}>Arantza Ilian Ríos Barrera</h1>

            <h2 className={styles.hero__subtitle}>
                <span className={styles.highlight}>Ingeniero de Software</span> en Crecimiento
            </h2>

            <p className={styles.hero__description}>
                Recién egresado de Tecnologías de la Información apasionado por crear 
                soluciones digitales innovadoras. Combino creatividad técnica con un 
                enfoque orientado a resultados para transformar ideas en código funcional.
            </p>

            <div className={styles.hero__buttons}>
                <Link href="#projects" className={`${styles.btn} ${styles['btn--primary']}`}>
                    <i className="fas fa-rocket"></i> Ver mis proyectos
                </Link>

                <Link href="#contact" className={`${styles.btn} ${styles['btn--outline']}`}>
                    <i className="fas fa-envelope"></i> Contáctame
                </Link>
            </div>
        </div>

        <div className={styles.hero__image}>
            <div className={styles.hero__blob}>
                <div className={styles.hero__avatar}>
                    <i className="fas fa-user-astronaut"></i>
                </div>
            </div>

            <div className={`${styles.hero__decoration} ${styles['hero__decoration--1']}`}></div>
            <div className={`${styles.hero__decoration} ${styles['hero__decoration--2']}`}></div>
            <div className={`${styles.hero__decoration} ${styles['hero__decoration--3']}`}></div>
        </div>
    </div>

    <div className={styles.hero__scroll}>
        <Link href="#interests" className={styles.hero__scroll-Link}>
            <span>Scroll</span>
            <i className="fas fa-chevron-down"></i>
        </Link>
    </div>
</section>

<footer className={styles.footer} id="footer">
        <div className={`container ${styles.footer__container}`}>
            <div className={styles.footer__content}>
                <div className={styles.footer__brand}>
                    <Link href="#" className={styles.footer__logo}>
                        <span className={styles.logo__bracket}>&lt;</span>TuNombre<span className={styles.logo__bracket}>/&gt;</span>
                    </Link>
                    <p className={styles.footer__text}>
                        Gracias por visitar mi portfolio. ¡Espero que podamos trabajar juntos pronto!
                    </p>
                </div>
                
                <div className={styles.footer__social}>
                    <Link href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className={styles.footer__social-Link} aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://github.com/tu-usuario" className={styles.footer__social-Link} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </Link>
                    <Link href="mailto:tu@email.com" className={styles.footer__social-Link} aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </Link>
                </div>
            </div>
            
            <div className={styles.footer__bottom}>
                <p className={styles.footer__copyright}>
                    &copy; 2026 Tu Nombre. Todos los derechos reservados.
                </p>
                <p className={styles.footer__made}>
                    Hecho con <i className="fas fa-heart"></i> y mucho <i className="fas fa-coffee"></i>
                </p>
            </div>
        </div>
    </footer>
            </main>
        </>
    );

}

