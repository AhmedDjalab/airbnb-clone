import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MeduimCard from "../components/MeduimCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-26">
        <section className="pt-5">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Api endpoints */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2
           lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData?.map((item) => (
              <SmallCard
                key={item.image}
                location={item.location}
                img={item.img}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-4xl 
          font-semibold py-8"
          >
            Live Anywhere
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 ">
            {cardsData?.map((item) => (
              <MeduimCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          description="Wishlists curated by Airbnb."
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
