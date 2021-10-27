import Link  from "next/link"
import Images from "next/image"
import Layout from "../../components/Layout"



export default function primerPost({data}) {
  return (
    <Layout>
      
      <h1>{data.id} {data.title}</h1>
      <p>{data.body}</p>

      <Images src="/images/lasAnnas.jpg"
      width={100}
      height={100}
      alt="esta es la imagen">
      </Images>
      
      <Link href="/">
        <a>pag inicio</a>
      </Link>
      
    </Layout>
  )
}


export async function getStaticPaths () {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const paths = data.map(({id}) => ({params: {id:`${id}`}}))
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticProps (params) {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts' + params.id)
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