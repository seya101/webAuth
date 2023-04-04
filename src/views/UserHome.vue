<template>
    <section class="flex h-screen justify-center items-center">
      <div class="py-8 px-4 m-auto max-w-screen-md text-center lg:py-16 lg:px-12">
          <img class="w-full lg:mx-auto" src="../assets/images/UnderConstructions.svg" alt=""> 
          <p class="font-light md:text-lg xl:text-xl">Hold on tight! We're renovating to make it even more awesome.</p>
          <button class="py-5 px-4 text-white bg-black rounded-3xl font-semibold text-lg hover:bg-gray-800 w-60 mt-16" @click="handleClick">Logout</button>
      </div>
    </section>
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