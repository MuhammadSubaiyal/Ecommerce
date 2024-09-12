import Hero from '../components/hero/hero';
import Popular from '../components/popular/Popular';
import Offers from '../components/offers/Offers';
import NewCollections from '../components/new collection/NewCollections';
import NewsLetter from '../components/news letter/NewsLetter';
import Reviews from '../components/Reviews/Reviews';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections/>
      <NewsLetter/>
    <Reviews/>

    </div>
  )
}

export default Shop