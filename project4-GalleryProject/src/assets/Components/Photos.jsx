import React from 'react'
import styles from  '../../App.module.css';
const Photos = (props) => {
  return (
        <a href={props.elem.url} target="_blank">
            <div className={styles.imgDiv}>
                <img src={props.elem.download_url} alt="No image found" />
                <h3 style={{display:"inline"}}>{props.elem.author}</h3>
            </div>
        </a>
  )
}

export default Photos