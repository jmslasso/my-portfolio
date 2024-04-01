import styles from '../../styles/projects.module.css'
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import Link from 'next/link';

const ProjectPage = () => {

    return (
        <section className={styles.timelineContainer}>
            <h1 className={styles.titleContainer}>Employment History</h1>
            <ul>
                <li>
                    <div className={styles.icon}>
                        <FaJava
                            size={30}
                            color="white"
                        />
                    </div>
                    <div className={styles.box}>
                        <h3 className={styles.title}>
                            <span className={styles.year}>2020 - Present</span>
                            <span className={styles.company}>Freelancer Developer</span>
                        </h3>
                        <p className={styles.functions}><b>Projects</b></p>
                        <p className={styles.functions}>Website improvements on images, headers, footers and        products, displaying pricing with plugins of Woocommerce using Wordpress and custom CSS. Link: <Link href="https://new-u.co.uk/"> View Page </Link></p>
                        <p className={styles.functions}>Application Java-based for a restaurant system of monitoring inventary of products, orders on real-time, also billing system.</p>
                        <p className={styles.functions}>Next.JS application for an electronical commerce, for inventary of electronical devices, warranties, payments, technitian information, task assignments, and advanced statistic of sales. Also integrating Asterisk and Whatsapp API for managing clients. PM2 used for Monitoring, MySQL as database, and deploying with Bitbucket, designing pipelines with Python and connections with SSH to the environments.</p>
                    </div>
                </li>
                <li>
                    <div className={styles.icon}>
                        <FaPython
                            size={30}
                            color="white"
                        />
                    </div>
                    <div className={styles.box}>
                        <h3 className={styles.title}>
                            <span className={styles.year}>2020-2022</span>
                            <span className={styles.company}>Universidad del Cauca</span>
                        </h3>
                        <p className={styles.functions}>Implementation of Machine Learning Algorithm with Deep Learning to meet Quality of Service metrics on a simulated 5G Network. Link:<Link href="http://repositorio.unicauca.edu.co:8080/handle/123456789/5494"> View Project </Link></p>
                    </div>
                </li>
                <li>
                    <div className={styles.icon}>
                        <FaJava
                            size={30}
                            color="white"
                        />
                    </div>
                    <div className={styles.box}>
                        <h3 className={styles.title}>
                            <span className={styles.year}>2021-2022</span>
                            <span className={styles.company}>Hospital Universitario San José</span>
                        </h3>
                        <p className={styles.functions}>Designing, and developing HUSJ web application integrating Excel for managing cleaning implements, schedules of people that worked on the cleaning sector, control of payments, vacations anda days off, also improving the system of hours reports. Application designed on Java, integrating Excel sheets.</p>
                    </div>
                </li>
                <li>
                    <div className={styles.icon}>
                        <FaReact
                            size={30}
                            color="white"
                        />
                    </div>
                    <div className={styles.box}>
                        <h3 className={styles.title}>
                            <span className={styles.year}>2022-Present</span>
                            <span className={styles.company}>NEXER</span>
                        </h3>
                        <p className={styles.functions}>Designing, implementing, monitoring, deploying and optimizing websites for swedish and english clients. Solid experience on creating and designing environments using Next.js combined with PM2 Monitoring. Also, using Headless CMS Architecture, with PHP and custom themes and plugins, integrating this with Wordpress. Involved on migration of Wordpress sites, and retrieving data using GraphQL API. Managing styles of frontend development with Bootstrap, Tailwind CSS, Modular Styles. For deploying apps, experienced using on AWS, PM2, Kinsta, Loopia, Hostinger, WPEngine.</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default ProjectPage