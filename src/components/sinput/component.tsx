import styles from './sinput.module.css'

export default function SInput (props: { placeholder: string, type: string }) {
  return (
    <input type={props.type} className={styles.input} placeholder={props.placeholder} />
  )
}