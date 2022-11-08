import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbar from "../next/head";

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
              Reach <span className="text-rose-500">exponential growth</span>,
              without needing to touch your ads manager.
            </h1>
            <p className="mt-6 max-w-2xl font-medium text-slate-100">
              We can manage everything for you, from creatives, to social media
              and advertisement management. Just sit back, relax and watch the
              numbers roll in.
            </p>
          </div>
          <div className="xl:block hidden">
            <Image src={frontPhoto} height="700px" width="900px" />
          </div>
</div>
      <Footer />
    </div>
  );
};

export default Aboutus;
