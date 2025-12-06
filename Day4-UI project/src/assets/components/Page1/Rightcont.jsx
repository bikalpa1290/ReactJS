import styles from './right.module.css'
import Rightcard from './Rightcard';
const Rightcont = (props) => {
  console.log(props);
  return (
      <div className={styles.main}>
        {props.professionals.map(function(elem){
          return <Rightcard key={elem.id} id={elem.id} image={elem.image} tag={elem.tag} intro={elem.intro}/>
        })}
      </div>
  )
}

export default Rightcont