import Icon from '../IconsGenerator';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/">
        <Icon name="logo"></Icon>
      </Link>
    </div>
  );
};

export default Footer;
