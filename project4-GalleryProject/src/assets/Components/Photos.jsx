import React from 'react'
import styles from  '../../App.module.css';
const Photos = (props) => {
  return (
    <div>
        <a href={props.elem.url} target="_blank">
            <div className={styles.imgDiv} key={props.idx} >
                <img src={props.elem.download_url} alt="No image found" />
                <h3 style={{display:"inline"}}>{props.elem.author}</h3>
            </div>
        </a>
    </div>
  )
}

export default Photos