import styles from './input.module.css'

export default function Input (props: { placeholder: string, type: string }) {
  return (
    <input type={props.type} className={styles.input} placeholder={props.placeholder} />
  )
}