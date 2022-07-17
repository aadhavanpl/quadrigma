import styles from './text.module.css'

export default function Test(placeholder) {
    return(
        <form>
            <input className={styles['frame3']} type="text" placeholder={placeholder}></input>
        </form>
    )
}