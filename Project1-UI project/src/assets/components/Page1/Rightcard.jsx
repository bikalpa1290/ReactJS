import styles from './right.module.css';
import Rightcardcont from './Rightcardcont';
// import img from '../Pictures/img1.jpg'
const Rightcard = (props) => {
  return (
    <div className={styles.card1}>
        <img src={props.image} className={styles.img} alt="Image" />
        <Rightcardcont tag={props.tag} id={props.id} intro={props.intro}/>
    </div>
  )
}

export default Rightcard