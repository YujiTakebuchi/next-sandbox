import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Next.jpのチュートリアルページだよ</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Next.js tutorial</h1>
      <h2>First post</h2>
      <Link href={"/"}>TOPに戻る</Link>
      <h2>static files</h2>
      <Image
        src="/images/sakura.jpg"
        alt="かわいい"
        width={1080}
        height={810}
      />
    </>
  );
}
