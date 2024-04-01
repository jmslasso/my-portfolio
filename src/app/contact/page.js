import styles from '../../styles/contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { SiGmail } from "react-icons/si";

const ContactPage = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.networkContainer}>
                <h2>Social Networks</h2>
                <div className={styles.socialNetworks}>
                    <span><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</span>
                    <span><FontAwesomeIcon icon={faGithub} /> GitHub</span>
                    <span><FontAwesomeIcon icon={faInstagram} /> Instagram</span>
                    <span><SiGmail /> Gmail</span>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;