import { ReactNode } from 'react'
import Footer from '../Footer'
import Navbar from '../NavBar'
import styles from '../..//styles/Home.module.css'

interface AuxProps {
  children: ReactNode
}

export default function Layout({ children }: AuxProps) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  )
}
