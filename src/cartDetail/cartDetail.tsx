import Footer from "home/footer"
import Head from "home/Head"
import Taskbar from "productDetail/header/taskbar"
import Body from "./body"
type Props = {}

function cartDetail({}: Props) {
  return (
    <>
    <Head />
    <Taskbar />
    <Body/>
    <Footer />
    </>
  )
}

export default cartDetail