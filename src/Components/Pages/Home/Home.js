import Layout from "./Layout";
import FoodMenu from "../../Core/FoodMenu";
import Navbar from '../../Core/Navbar'
import '../../../Resources/styles/styles.css'

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
