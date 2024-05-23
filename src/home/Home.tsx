
import Taskbar from "productDetail/header/taskbar";
import Banner from "./banner";
import Browse from "./Browse";
import Footer from "./footer";
import Head from "./Head";
import NewArrival from "./New Arrivals";
import Page from "./Page";
import Review from "./review";



const Home = () => {
    return <>
    <Head/>
    <Taskbar/>

    <Page/>
    <Banner/>
    <NewArrival/>
    <Browse/>
    <Review/>
    <Footer/>
    </> 
}
 
export default Home;