<template>
<div class="min-h-screen ">
    <section class="min-h-screen flex items-center justify-center">
            <div class="lg:w-4/12 w-8/12" >
            <div>
                <router-link :to="{ name: 'Login' }">
                <div class="bg-transparent font-bold my-10 inline-flex items-center text-purple-600 animate-bounce">
                    <svg class="w-7 h-7 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
                    <span class="px-2 ">Back to login</span>
                </div>
                </router-link>
            </div>
                <form @submit.prevent="submitReset">
                <div class="mb-10">
                    <h1 class="text-violet-600 text-5xl font-extrabold mb-2">Reset Password</h1>
                    <p class="text-slate-500">Enter the email associated with your account and we'll send an email with instructions to reset your password.</p>
                </div>
                <!-- Error Message-->
                <div class="text-red-400 font-semibold capitalize text-center" v-if="error"> {{ error }}</div>
                <!-- Email input -->
                <div class=" flex items-center border-2 py-2 px-3 rounded-2xl mb-6 bg-white focus-within:border-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input
                    v-model="email"
                    type="text"
                    class="form-control block w-full px-2 py-3 font-normal text-gray-700 focus:outline-none"
                    placeholder="Email Address"
                    />
                </div>

                <!-- Submit button -->
               <div class="flex justify-center mb-16">
                <button
                    type="submit"
                    class="inline-block px-7 py-4 bg-purple-600 text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    v-if="!isPending">Reset Password
                </button>
                <button
                    type="submit"
                    class="inline-block px-7 py-4 bg-purple-600 text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    v-if="isPending" disabled>Loading..</button>
               </div>
                </form>  
            </div>
    </section>
</div>
</template>


<script setup>
import useResetPassword from '@/composables/useResetPassword'
import { ref } from "vue"
import { useRouter } from 'vue-router'

const { error, resetPassword, isPending } = useResetPassword()
const router = useRouter()
const email =  ref('')
error.value =  ''

const submitReset = async() => {
	const res = await resetPassword(email.value)

	if (!error.value) {
        error.value = ('Email Sent! Kindly check your email')
		console.log('Email Sent, Check your email')
        router.push({ name: 'SuccessPage' })
	}
}



</script>