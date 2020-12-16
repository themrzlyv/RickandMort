import styles from '../styles/Home.module.scss'
import Layout  from '../Components/Layout/Layout'
import SearchCharacter from '../Components/SearchCharacter/SearchCharacter'
import CharacterTable from '../Components/CharacterTable/CharacterTable'
import {useState} from 'react'

export default function Home({characters}) {

  const [keyword, setkeyword] = useState('');

  const filteredCharacters = characters.results.filter(character => character.name.toLowerCase().includes(keyword))

  const onInputChange = e => {
    setkeyword(e.target.value.toLowerCase());
    
  }

  return (
    <Layout>
        <div className={styles.container}>
            <SearchCharacter
              onChange={onInputChange}
            />
            <CharacterTable characters={filteredCharacters}/>
        </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch ('https://rickandmortyapi.com/api/character')
  const characters = await res.json()

  return {
    props: {
      characters,
    }
  }
}
