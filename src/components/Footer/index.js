import Icon from '../IconsGenerator';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="/">
        <Icon name="logo" />
      </a>
    </div>
  );
};

export default Footer;
