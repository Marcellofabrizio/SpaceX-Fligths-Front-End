import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

import LaunchesTable from "../components/LaunchesTable";
import { getLaunches } from "../shared/services/api";

export default function Home() {
    const [launches, setLaunches] = useState(null);

    useEffect(() => {
        getLaunches({
            limit: 10,
            page: 0,
            search: "",
        })
            .then((result) => {
                setLaunches(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Space X Flights</title>
                <meta name="description" content="Space X flights dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <LaunchesTable data={launches ? launches.results : []} />
            </main>
        </div>
    );
}
