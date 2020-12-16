import styles from './CharacterTable.module.scss'
import Link from 'next/link'

const CharacterTable = ({characters}) => {
    return (
        <div className={styles.container}>
            {characters.map(character => (
                <div key={character.id} className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src={character.image}/>
                    </div>
                    <div className={styles.cardText}>
                        <Link href={`/character/${character.id}`}>
                            <button className={styles.headerText}>
                                <i 
                                className={character.species==="Human" ? "far fa-user human" : "fab green fa-reddit-alien alien"}>
                                </i>
                            {character.name}
                            </button>
                        </Link>
                        <button className={styles.secondary}>
                            {character.status} - {character.species}
                            <p>
                            <i className="fas fa-location-arrow"></i>
                            {character.location.name}</p>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CharacterTable;