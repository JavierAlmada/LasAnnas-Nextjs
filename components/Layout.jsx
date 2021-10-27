import Head from "next/head"
import Image from 'next/image'
import Link from "next/dist/client/link"
import styles from '../styles/Layout.module.css'




export default function Layout({children, title, description, home, name}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="decription" content={description}/>
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/lasAnnas.jpg"
              className={styles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={styles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/lasAnnas.jpg"
                  className={styles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={styles.headingLg}>
              <Link href="/">
                <a className={styles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <nav>Navbar</nav>
      
      
      <main>{ children }</main>

      <footer>Footer</footer>

    </div>
  )
}

Layout.defaultProps = {
  title: "Las Annas",
  description: "Moda femenina, ropa de diseño",
  name: "Las Annas"
}
