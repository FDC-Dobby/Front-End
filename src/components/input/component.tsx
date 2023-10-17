import styles from './input.module.css'

export default function Input (props: { placeholder: string }) {
  return (
    <input type="text" className={styles.input} placeholder={props.placeholder} />
  )
}