import styles from './SearchCharacter.module.scss'

const SearchCharacter = ({...rest}) => {
    return (
        <div className={styles.container}>
            <input {...rest} />
        </div>
    );
}

export default SearchCharacter;