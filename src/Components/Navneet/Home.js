import Layout from "./Layout";
import FoodMenu from "../Prem/FoodMenu";
import Navbar from './Navbar'
import './Styles.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Layout title="" description="" className="">
        <FoodMenu />
      </Layout>
    </div>
  );
};

export default Home;
