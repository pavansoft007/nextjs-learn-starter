import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>My First Post</title>
            </Head>
            <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
            <h1>My first Post</h1>
            <Image src="/images/profile.jpg" height={144} width={144} alt="Profile Image" />
            <h2><Link href="/">Back To Home</Link></h2>
        </Layout>
    )
}