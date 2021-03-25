import '../../../App.css';
import Banner from './components/Banner';
import CompanyNav from './components/CompanyNav';
import Product from './components/Product';

function Home({ onAddCartItem , products}) {
    return (
        <div>
            <Banner />
            <CompanyNav />
            <Product onAddCartItem={onAddCartItem}  products={products}/>
        </div>
    );
}

export default Home;