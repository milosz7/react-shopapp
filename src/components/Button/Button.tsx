import styles from './Button.module.scss';
import clsx from 'clsx';

interface Props {
  className: string;
  children: string | JSX.Element;
}

const Button: React.FC<Props> = ({className, children}) => {
    return (<button className={clsx(styles.button, className)}>{children}</button>);
};

export default Button;