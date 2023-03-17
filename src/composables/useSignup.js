import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { projectFirestore } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName, fName, lName) => {
  error.value = null
  isPending.value = true

  try {

    if (email == "" && password == "" && displayName == "" && fName == "" && lName == "") {
      throw new Error('Please fill out all fields')
      
    } else {

      const res = await projectAuth.createUserWithEmailAndPassword(email, password)


      const dataBase = projectFirestore.collection("users").doc(res.user.uid)

      await dataBase.set({
        firstname: fName,
        lastname: lName,
        username: displayName,
        email: email,
      })
      
      if (!res) {
        throw new Error('Could not complete signup')
      }

      await res.user.updateProfile({ displayName })
      error.value = null
      isPending.value = false

      return res
    }
    
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

const useSignup = () => {
  return { error, signup, isPending }
}

export default useSignup