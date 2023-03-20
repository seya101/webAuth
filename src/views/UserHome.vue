<template>
    <div>
        <h1>User homepage</h1>

          <button class="py-2 px-4 text-white bg-black rounded-3xl font-semibold hover:bg-gray-800" @click="handleClick">Logout</button>
    </div>
</template>

<script setup>
import useLogout from '../composables/useLogout'

import { useRouter } from 'vue-router'

const { logout } = useLogout()
const router = useRouter()


const handleClick = async () => {
  await logout()
  console.log('logged out')
  router.push({ name: 'Home' })
}


</script>