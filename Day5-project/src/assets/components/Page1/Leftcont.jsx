import styles from './main1.module.css'
import 'remixicon/fonts/remixicon.css'
import Herotext from './Herotext'
import Arrow from './Arrow'
 const Leftcont = () => {
   return (
     <div className={styles.leftCont}>
      <Herotext/>
      <Arrow/>
    </div>
   )
 }
 
 export default Leftcont