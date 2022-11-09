import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import frontPhoto from "../public/Photo.png";
import Image from "next/image"

const Aboutus = () => {
  return (
<div>
      <Head>
        <title>Wuertz Media</title>
        <meta
          name="About us"
          content="Meet the team."
        />
        <link rel="icon" href="/favicond.ico" />
      </Head>
      <Navbar />
      <div>
        <section className="items-center sm:mr-32 sm:ml-32 mt-32 flex justify-center xl:text-left text-center">
          <div>
            <h1 className="font-bold sm:text-5xl sm:max-w-2xl text-3xl">
              Meet <span className="text-rose-500">our team</span>,
              we will take care of you.
            </h1>
            <p className="mt-6 max-w-2xl font-medium text-slate-100">
              Your goals are our goals. It's as simple as that. We work to ensure that every project, no matter how big or small, gets the resources it needs to succeed.
            </p>
          </div>
          <div className="xl:block hidden">
            <Image src={frontPhoto} height="500px" width="500px" />
          </div>
          </section>
</div>
      <Footer />
    </div>
  );
};

export default Aboutus;
