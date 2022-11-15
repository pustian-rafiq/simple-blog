import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from 'react-bootstrap';
import Meta from '../components/Meta/Meta';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Posts from '../components/blog/post/Posts';
import HomePage from '../components/HomePage';
 

export default function Home() {
  return (
    <div className={styles.container}>
     <Meta/>
     <HomePage />
    </div>
  )
}
