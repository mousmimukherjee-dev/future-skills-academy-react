
import styles from  "./title.module.css"

export const Title = ({title,subTitle}) => {
  return (
    <div className={styles.title}>
      <p>{title}</p>
      <h2>{subTitle}</h2>
    </div>
  )
}

