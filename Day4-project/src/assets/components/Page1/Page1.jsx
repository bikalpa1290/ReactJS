import styles from './page1.module.css'
import Navbar from './Navbar'
import Content1 from './Content1'
const Page1 = (props) => {
  // console.log(props.professionals);
  return (
    <div className={styles.main}>
        <Navbar />
        <Content1 professionals={props.professionals}/>
    </div>
  )
}

export default Page1