
import page from './page.module.css'

type Props = {}

const Page = (props: Props) => {
  return <nav>
    <div className={page.heading}>
        <div className={page.flexContainer}>
                <h1 className={page.title}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className={page.description}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className={page.button}>Shop Now</button>
                <div className={page.ContainerOfNum}>
                    <div className={page.columnContainer}>
                      <h1 className={page.contentA}>200+</h1>
                      <p className={page.contentR}>International Brands</p>
                    </div>
                    <div className={page.columnContainer}>
                      <h1 className={page.contentA}>2,000+</h1>
                      <p className={page.contentR}>High-Quality Products</p>
                    </div>
                    <div className={page.columnContainer}>
                      <h1 className={page.contentA}>30,000+</h1>
                      <p className={page.contentR}>Happy Customers</p>
                    </div>
                </div>
        </div>
     </div>   
  </nav>
  
}

export default Page;