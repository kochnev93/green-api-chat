import {FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Container.module.scss'

type Props = {
    children: ReactNode;
    className?: string;
};

export const Container: FC<Props> = ({children, className}) => {
  return (
      <div className={cn(styles.container, className ? className : '')}>
        {children}
      </div>
  );
}

