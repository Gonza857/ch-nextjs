import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import styles from "./estilo.module.css";
import Image from "next/image";

// carpeta "views" para layouts más completos
// componentes, pedazos de pagina tengan o no lógica
// page integra componentes

// estatica
// export const metadata = {
//   title: "CoderHouse App",
//   description: "App de muestra en Next.JS",
//   keywords: ["palabra1", "palabra2"],
//   openGraph: {
//     title: "",
//     description: "",
//     type: "article", // sin este, jode
//     publishedTime: "",
//     authors: [""],
//   },
// };

// parent -> metadata de componente parent
// searchParams -> si tenemos
export const generateMetadata = async ({ params, searchParams }, partent) => {
  const id = params.id;
  const product = await fetch(`https://.../${id}`).then((res) => res.json);

  return {
    title: product.title,
    description: product.description,
  };
};

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      {/* <section className={styles.title}></section> */}

      <Image
        src={"/package.png"}
        width={300}
        height={300}
        alt="Package Image"
      />
      <Footer />
    </>
  );
}

// fill -> todo el tamaño del padre
