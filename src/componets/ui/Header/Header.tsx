import { FC } from 'react';
import { Container } from '../../Container/Container';

import styles from './Header.module.scss'
import logo from './WhatsApp.svg'

export const Header : FC = () => {
  return (
      <header className={styles.header}>
        <Container className={styles.header__container}>
            <span className={styles.logo}>
                <img src={logo} alt="logo" />
            </span>
            Green API Chat  
        </Container>
      </header>
  );
}

