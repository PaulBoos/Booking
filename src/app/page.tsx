import {signIn, signOut, useSession} from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import {api} from "~/utils/api";
import styles from "./index.module.css";
import React from "react";
import Image from "next/image";

export default function Page() {
	//const hello = api.post.hello.useQuery({text: "from tRPC"});
	return (
		<h1>Index Page</h1>
	);
}

function AuthShowcase() {
	const {data: sessionData} = useSession();

	const {data: secretMessage} = api.post.getSecretMessage.useQuery(
		undefined, // no input
		{enabled: sessionData?.user !== undefined}
	);

	return (
		<div className={styles.authContainer}>
			<p className={styles.showcaseText}>
				{sessionData && <span>Logged in as {sessionData.user?.name}</span>}
				{secretMessage && <span> - {secretMessage}</span>}
			</p>
			<button
				className={styles.loginButton}
				onClick={sessionData ? () => void signOut() : () => void signIn()}
			>
				{sessionData ? "Sign out" : "Sign in"}
			</button>
		</div>
	);
}
