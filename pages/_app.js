import "@/styles/globals.css";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* favicons  */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* favicons  */}

        <meta
          name="description"
          content="Discover the Organized Web Personal Portfolio HTML Template - Your Gateway to a Stunning Online Portfolio! Ideal for Showcasing Your Creativity."
        />
        <meta
          name="keywords"
          content="Organized Web, Personal Portfolio, HTML Template, Web Design, Responsive, Creative Showcase, Portfolio Website, Professional, Clean Design, Modern, Minimalist, CSS3, jQuery, Bootstrap, Mobile-friendly, Cross-browser Compatibility, One Page Template, Multi-page, Freelancer, Web Developer, Graphic Designer, UX/UI Designer, Digital Artist, Online Resume, Creative Portfolio,"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <title>Organized Web | Personal Porfolio HTML Template</title>
      </Head>
      <div className="App">
        <Component {...pageProps} />
      </div>
    </>
  );
}
