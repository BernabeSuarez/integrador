import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyCs-WbJSQGgB_1g4o_OdnuZl5ZS-RsNVaU",
    authDomain: "tienda-online-ed405.firebaseapp.com",
    projectId: "tienda-online-ed405",
    storageBucket: "tienda-online-ed405.appspot.com",
    messagingSenderId: "677059580652",
    appId: "1:677059580652:web:f11d1b379a71860e3b0bc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);


export const LoginWhitGoogle = () => {  //Autenticar usuario con Google
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            //const credential = GoogleAuthProvider.credentialFromResult(result);

            // ...

        }).catch((error) => {
            // Handle Errors here.

            const errorMessage = error.message;
            // The email of the user's account used.

            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(credential)
            console.log(errorMessage)
        });

}











