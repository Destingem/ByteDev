import RootLayout from '@/components/common/layout/RootLayout';
import Head from 'next/head';

export default function Hello() {
    return (
        <>
            <Head>
                <title>Ahoj, tady BYTEDEV</title>
                <meta name="description" content="Converse site for ads" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
            <RootLayout header="header1" footer="footer3">
                <div style={{padding: "15vh 20vw", display: "flex", flexDirection: "column", gap: "5vh", justifyContent: "center", alignItems: "center"}}>
                <section className='text' style={{textAlign: "center"}}>
                <h1>Chci mít nejlepší webovky?</h1>
                <p>Díky týmu odborníků zajišťujeme, aby Vaše digitální prezentace odrovnala konkurenci a posunula Vás na další úroveň pomocí Next.js, Wordpress, Electron atd., zajišťující nejmodernější a nejatraktivnější řešení na míru.
Nyní je to již na Vás… Jste připraveni zvítězit?</p>
                </section>
                <section className='AIDrivenAnalysis'></section>
                <section className='services (pricing)'></section>
                <section className='optimalServices'></section>
                <section className='reviews'></section>
                <section className='caseStudies'></section>
                <section className='contact'></section>
                </div>
                </RootLayout>
            </main>
        </>
    );
}
