import Layout from "../components/Layout";
import Link from "next/dist/client/link";


export default function contact() {
  return (
    <>
    <Layout>
      <h1>Este es el contacto</h1>
    </Layout>
    <Link href="/">
      <a>Inicio</a>
    </Link>
    </>
  )
}
