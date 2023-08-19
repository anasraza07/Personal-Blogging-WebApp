import Blog from "@/components/Blog";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>Personal Blog Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <h2>Personal Blog Web App</h2>
          <button>
            <Link href={"./signin"}>Login</Link>
          </button>
        </nav>
      </header>
      <main>
        <div>
          <h1>Good Morning Readers!</h1>
        </div>

        <div>
          <h2>All Blogs</h2>
          {blogs.map((blog) => {
            const { id, title, name, date, text } = blog;
            return (
              <div key={id}>
                <h2>{title}</h2>
                <h4>
                  {name} - {date}
                </h4>
                <p>{text}</p>
                <a href="">see all from this user</a>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api");
  const data = await response.json();

  return {
    props: {
      blogs: data,
    },
  };
}