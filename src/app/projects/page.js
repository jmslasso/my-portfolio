import React from 'react'
import styles from '../../styles/projects.module.css'
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const ProjectPage = () => {
    return (
        <section className={styles.timelineContainer}>
            <h1 className={styles.titleContainer}>My Experience</h1>
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
                            <span className={styles.year}>2019</span>
                            <span className={styles.company}>Universidad del Cauca</span>
                        </h3>
                        <p className={styles.functions}>Development and implementation of a CRUD System for a restaurant</p>
                        <button>Read More</button>
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
                        <p className={styles.functions}>Development and implementation of a Deep Q Network (Machine Learning) Algorithm for analyze and mitigate latency on the Core of simulated 5G Network</p>
                        <button>Read More</button>
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
                        <p className={styles.functions}>Design and develop of an Java based application for manage cleaning staff, payment of payroll, inventory of grooming instruments and schedule assignments</p>
                        <button>Read More</button>
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
                        <p className={styles.functions}>Design and develop of an Java based application for manage cleaning staff, payment of payroll, inventory of grooming instruments and schedule assignments</p>
                        <button>Read More</button>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default ProjectPage