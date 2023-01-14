import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Alert from "../../components/Alert";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Next.jpのチュートリアルページだよ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>Next.js tutorial</h1>
      <h2>clsx</h2>
      <h3>Alert component</h3>
      <Alert type={"success"}>success</Alert>
      <Alert type={"error"}>error</Alert>
      <h2>First post</h2>
      <Link href={"/"}>TOPに戻る</Link>
      <h2>static files</h2>
      <Image
        src="/images/sakura.jpg"
        alt="かわいい"
        width={1080}
        height={810}
      />
    </Layout>
  );
}
