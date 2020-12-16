import Head from 'next/head'
import styles from './Layout.module.scss'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Rick and Morty</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <header>
                i am nav js 
            </header>

            <section>
                {children}
            </section>

            <footer>
                i am footer js
            </footer>
        </div>
    );
}


export default Layout;