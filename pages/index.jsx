import Layout from "../components/Layout"
import Link from "next/dist/client/link"


export default function index({data}) {
  return (
    <Layout
    title="Home | Las Annas"
    description="Este es tu sitio para comprar!">
      <section >
        
        <h1>Lista de Productos Las Annas</h1>
        <a href="http://localhost:3000/about">About</a>
          <br/>
          <a href="http://localhost:3000">Primer Post</a>
          <br/>
          <a href="http://localhost:3000/contact">Contact</a>
        {
          data.map(({id, title, body}) => (
            <div key={id}>
              <h3>
                <Link href={`/blog/${id}`}>
                  <a>{id}-{title}</a>
                </Link>
              </h3>
              <p>{body}</p>
            </div>
          )) 
        }
          
      </section>
    </Layout>
  )
}


export async function getStaticProps () {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
      props:{
        data
      }
    }
  } catch (error) {
    console.log(error)
  }
}


