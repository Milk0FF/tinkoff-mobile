import {initializeApp} from 'firebase/app'
import {getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyACjhZ2kRY-3euv7PgUHifZ6JBCm_HzvrI",
  authDomain: "tinkoff-479ed.firebaseapp.com",
  projectId: "tinkoff-479ed",
  storageBucket: "tinkoff-479ed.appspot.com",
  messagingSenderId: "698597780592",
  appId: "1:698597780592:web:564f04a4b87fcf968918b5"
}
 
const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth,email,password)
export const login = (email: string, password: string) => signInWithEmailAndPassword(auth,email,password)
export const logout = () => signOut(auth)
export const db = getFirestore()