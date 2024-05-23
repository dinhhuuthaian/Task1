import style from'./head.module.css';

type Props = {}

const head = (props: Props) => {
  return <>
  <div className={style.container}>
    <div className={style.containerCenter}>
        <p className={style.content}>Sign up and get 20% off to your first order. Sign Up Now</p>
    </div>
  </div>
  </>
}

export default head