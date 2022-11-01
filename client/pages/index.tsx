import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Head>
              <title>Student Manager</title>
              <meta name="description" content="A manager for all students" />
            </Head>
            <h1>Student Manager</h1>
            <p>
                This is an app designed to manage student enrolments in a
                course.
            </p>
        </div>
    );
}
