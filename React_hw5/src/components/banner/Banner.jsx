import styles from "./Banner.module.css";
import { OnClick } from "./Functions/OnClick";

export function Banner({ title, backgroundImageUrl, commentCount }) {
  return (
    <div className={styles.boxBanner} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>      
      <div className={styles.boxMenu}>
        <OnClick />
        <h4 className={styles.commentCount}>{commentCount}</h4>        
      </div>
      
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>   
    </div>
  );
}