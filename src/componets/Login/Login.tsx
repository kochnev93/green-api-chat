import {FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Login.module.scss'
import { Container } from '../Container/Container';

type Props = {
    children?: ReactNode;
    className?: string;
};

export const Login: FC<Props> = ({children, className}) => {
  return (
    <Container>
      <div className={styles.login}>
        <ul className={styles.login__manual}>
            <li>The official WhatsApp colors </li>
            <li>The official WhatsApp colors </li>
            <li>The official WhatsApp colors </li>
        </ul>

        <form className={styles.login__form}>
            <label htmlFor="login">Логин</label>
            <input id='login' type="text" />

            <label htmlFor="login">Логин</label>
            <input id='login' type="text" />

            <input type="submit" />
        </form>
      </div>
    </Container>

  );
}
