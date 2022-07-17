import styles from './button.module.css'
import firebasee from './firebase'

export default function Button() {

    const signInWithFirebase = () => {
        var google_provider = new firebasee.auth.GoogleAuthProvider();
        firebasee.auth().signInWithPopup(google_provider)
        .then((re) => {
            console.log(re)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        // <div className={styles['frame7']} onClick = {signInWithFirebase}>
        //     <span className={styles['text15']}>Login</span>
        // </div>
        <div>
            <button onClick = {signInWithFirebase}>login</button>
        </div>
    )
}