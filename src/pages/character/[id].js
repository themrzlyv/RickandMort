import Layout from "../../Components/Layout/Layout";
import styles from './character.module.scss'

const Character = ({character}) => {
    return (
        <Layout title={character.name}>
            <div className={styles.container}>
                <div className={styles.imagebox}>
                    <img src={character.image}/>
                </div>
                <div className={styles.mainText}>
                    <h2>
                    <i 
                        className={character.species==="Human" ? "far fa-user human" : "fab green fa-reddit-alien alien"}>
                    </i>
                    {character.name}</h2>
                    <h4>{character.status}</h4>
                    <h4>{character.species}</h4>
                    <h4>
                    <i 
                        className={character.gender==="Male" ? "fas fa-mars human" : "fas fa-venus alien"}>
                    </i>
                    {character.gender}</h4>
                </div>
                <div className={styles.secondaryText}>
                    <p>Location: {character.location.name}</p>
                    <p>Created: {character.created}</p>
                </div>
            </div>
        </Layout>
        
    );
}


export default Character;

export const getServerSideProps = async ({params}) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    const character = await res.json();
    return {
        props: {
            character
        }
    }
}