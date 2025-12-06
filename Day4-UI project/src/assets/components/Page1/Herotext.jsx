import styles from "./main1.module.css"
const Herotext = () => {
  return (
    <div>
        <div style={{padding:"5vh",marginBottom:"5px"}}>
          <h3 className={styles.lefth1} style={{display:"flex",flexDirection:"column"}}>Prospective <span> consumer</span>segmentation</h3>
          <p className={styles.leftp}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, reiciendis quidem? Non modi laborum laudantium nulla praesentium voluptatum doloremque facilis?</p>
        </div>
    </div>
  )
}

export default Herotext