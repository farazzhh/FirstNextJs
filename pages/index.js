import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>First myNext.Js App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <section className="h-96 bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-xl"> This is HomePage</h1>
          </div>
        </section>
      </body>
    </div>
  );
}
