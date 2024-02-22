import styles from '../styles/introduction.module.css';
import { useState, useEffect } from 'react';
import Typewriter from './Typewriter';
import { useRouter } from 'next/navigation';

const Introduction = () => {
    const router = useRouter();

    const [showFirstText, setShowFirstText] = useState(false);
    const [showSecondText, setShowSecondText] = useState(false);
    const [showThirdText, setShowThirdText] = useState(false);
    const [showFourthText, setShowFourthText] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowFirstText(true), 1000);
        const timer2 = setTimeout(() => setShowSecondText(true), 2000);
        const timer3 = setTimeout(() => setShowThirdText(true), 3500);
        const timer4 = setTimeout(() => setShowFourthText(true), 7000);
        const timer5 = setTimeout(() => {router.push('/about')}, 13000);

        return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        } 
    }, []);
    return (
        <div className={styles.containershell}>
            <div className={styles.topbarpc}>
            <div className={styles.exitbar}>
                <div className={styles.buttonconsolepc}>
                <div className={styles.exitButton}></div>
                <div className={styles.minimizeButton}></div>
                <div className={styles.greenButton}></div>
                </div>
                <span>Portfolio</span>
            </div>
            </div>
            <div className={styles.shellContent}>
            {showFirstText && <div className={styles.firstText}>
                <span>$</span>
                <Typewriter text="whoami" delay={100} />
            </div>}
            {showSecondText && <div className={styles.firstText}>
                <Typewriter text="$" delay={100} />
                <Typewriter text="Hi!" delay={150} />
            </div>}
            {showThirdText && <div className={styles.firstText}>
                <Typewriter text="$" delay={100} />
                <Typewriter text="I'm Juan Manuel" delay={150} />
            </div>}
            {showFourthText && <div className={styles.firstText}>
                <Typewriter text="$" delay={100} />
                <Typewriter text="Full Stack Developer" delay={150} />
            </div>}
            </div>
        </div>
    )
}

export default Introduction;