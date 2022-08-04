import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <div className={styles['container']} data-test-id="button">
      <h1>{props.children}</h1>
    </div>
  );
}

export default Button;
