import React from 'react';
import firebase from "firebase/app";


const auth = firebase.auth();

function SignIn() {

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    await auth.signInWithPopup(provider)
  }
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}
