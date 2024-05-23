import Footer from "home/footer"
import Head from "./header/head"
import Taskbar from "./header/taskbar"
import Review from "./body/review"
import Suggest from "./body/suggest"

import ProductList1 from "./body/product"
import { initalProductList } from "constants/product"




type Props = {}

const ProducDetail = (props: Props) => {
  return <>
  <Head/>
  <Taskbar/>
  <ProductList1 products={initalProductList}/>
  <Review/>
  <Suggest/>
  <Footer/>
  </>
}

export default ProducDetail