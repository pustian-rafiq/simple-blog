
import styles from '../styles/Home.module.css'
import Meta from '../components/Meta/Meta';
import HomePage from '../components/HomePage';
 

export default function Home() {
  return (
    <div className={styles.container}>
     <Meta/>
     <HomePage />
    </div>
  )
}
