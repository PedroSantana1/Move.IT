import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/PedroSantana1.png" alt="Pedro Santana"></img>
            <div>
                <strong>Pedro Santana</strong>
                <p>
                    <img src="icons/level.svg" alt=" Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}