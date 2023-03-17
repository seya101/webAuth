import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const resetPassword = async (email) => {
    error.value = null
    isPending.value = true

    try {
        const res = await projectAuth.sendPasswordResetEmail(email)
        error.value = null
        isPending.value = false
        return res
      }
      catch(err) {
        console.log(err.message)
        error.value = "email address doesn't exists"
        // error.value = err.message
        isPending.value = false
      }
}

const useResetPassword = () => {
    return { error, resetPassword, isPending}
  }

  export default useResetPassword