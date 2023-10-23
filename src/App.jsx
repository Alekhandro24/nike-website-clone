import Footer from "./sections/Footer";
import Subscribe from "./sections/Subscribe";
import CustomerReviews from "./sections/CustomerReviews";
import SpecialOffers from "./sections/SpecialOffers";
import Services from "./sections/Services";
import SuperQuality from "./sections/SuperQuality";
import PopularProducts from "./sections/PopularProducts";
import Hero from "./sections/Hero";
import Nav from "./sections/components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x bg-black padding-t pb-8 ">
        <Footer />
      </section>
    </main>
  );
};

export default App;
