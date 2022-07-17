import { FcGoogle } from 'react-icons/fc'
import styles from './login-button.module.css'

export default function LoginButton() {
    return(
    <div className={styles['frame1']}>
        <FcGoogle></FcGoogle>
        <span className={styles['text04']}>Continue with Google</span>
    </div>
    )
}