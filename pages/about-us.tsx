import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import frontPhoto from "../public/sitePic2ndRev.png";
import Image from "next/image"

const Aboutus = () => {
  return (
<div>
      <Head>
        <title>Wuertz Media</title>
        <meta
          name="description"
          content="Sit back, relax, and watch the numbers roll in."
        />
        <link rel="icon" href="/favicond.ico" />
      </Head>
      <Navbar />
      <div>
        <section className="items-center sm:mr-32 sm:ml-32 mt-32 flex justify-center xl:text-left text-center">
          <div>
            <h1 className="font-bold sm:text-5xl sm:max-w-2xl text-3xl">
              Meet <span className="text-rose-500">our team</span>,
              that will take care of you.
            </h1>
            <p className="mt-6 max-w-2xl font-medium text-slate-100">
              We can manage everything for you, from creatives, to social media
              and advertisement management. Just sit back, relax and watch the
              numbers roll in.
            </p>
          </div>
          <div className="xl:block hidden">
            <Image src={About us.png} height="700px" width="900px" />
          </div>
          </section>
</div>
      <Footer />
    </div>
  );
};

export default Aboutus;
