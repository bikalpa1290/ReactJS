
import Leftcont from './Leftcont';
import RightCont from './Rightcont';
import styles from './main1.module.css';
const Content1 = (props) => {
  return (
    <div className={styles.content1}>
      <Leftcont />
      <RightCont professionals={props.professionals}/>
    </div>
  )
}

export default Content1