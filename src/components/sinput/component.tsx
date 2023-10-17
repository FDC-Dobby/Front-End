import styles from './sinput.module.css'

export default function SInput (props: { placeholder: string }) {
  return (
    <input type="text" className={styles.input} placeholder={props.placeholder} />
  )
}