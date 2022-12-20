import Head from "next/head";

function title(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

export default title;
