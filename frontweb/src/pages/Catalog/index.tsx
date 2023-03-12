import NavBar from 'components/NavBar';
import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <>
      <NavBar />
      <div className="container my-4">
        <ProductCard />
      </div>
    </>
  );
};

export default Catalog;
