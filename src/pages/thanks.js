import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";
import { BsFillSendFill } from "react-icons/bs";

export default function Thanks(){

    return(
        <>
        <Head>
          <title>Děkujeme</title>
          <meta name="description" content="Děkujeme vám za odeslání poptávky" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <RootLayout header="header3" footer="footer3">
      <section style={{padding: "10vh 30vw", display: "flex", flexDirection: "column", gap: "5vh", justifyContent: "center", alignItems: "center"}}>
      <BsFillSendFill style={{fontSize: "10rem"}} />
      <h1 style={{textAlign: "center"}}>Děkujeme za zaslaní vaší poptávky</h1>
      <p>Vážíme si vašeho zájmu. Do 48 hodin vás kontaktuje náš obchodní zástupce buďto skrz email nebo telefon. Pokud byste měli nějaké problémy obraťte se na náš na telefonním čísle <a href="tel:+420 608 270 754">608 270 754</a> nebo na <a href="mailto:info@bytedev.cz">info@bytedev.cz</a></p>
      <DigitalAgencyCTA title={"Naše služby"} description={"Pokud vás ještě zajímá více službách"} button={"Mrkňete sem"} />
      </section>
          
          </RootLayout>
        </main>
      </>
    )
}