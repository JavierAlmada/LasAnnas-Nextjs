import Layout from "../components/Layout"
import Link from "next/dist/client/link"
import Images from "next/dist/client/image"

export default function about() {
  return (
    <>
    <Layout
    title="About | Las Annas"
    description="Lo que necesitas saber de nosotras">
      <h1>Este es el About</h1>
    </Layout>
    <Images src="/images/1annas.jpg"
    width={100}
    height={100}
    alt="2nd image"></Images>
    <Link href="/">
      <a>Inicio</a>
    </Link>
    </>
  )
}
