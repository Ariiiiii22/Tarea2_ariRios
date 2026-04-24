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
                <a href="#projects" className={`${styles.btn} ${styles['btn--primary']}`}>
                    <i className="fas fa-rocket"></i> Ver mis proyectos
                </a>

                <a href="#contact" className={`${styles.btn} ${styles['btn--outline']}`}>
                    <i className="fas fa-envelope"></i> Contáctame
                </a>
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
        <a href="#interests" className={styles.hero__scroll-Link}>
            <span>Scroll</span>
            <i className="fas fa-chevron-down"></i>
        </a>
    </div>
</section>
            </main>
        </>
    );

}

