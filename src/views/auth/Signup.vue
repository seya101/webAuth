<template>
	 <div class="flex justify-center items-center">
		<div class="mt-20 flex flex-col justify-center">
	<div class="py-10 px-7 sm:px-20 bg-white rounded-2xl shadow-xl z-20">
		<div class="mb-16">
			<h1 class="text-3xl font-bold mb-4 cursor-pointer text-gray-700">Create Account</h1>
			<p class="w-72 text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an
				account to enjoy all the services without any ads for free!</p>
		</div>
		<form @submit.prevent="handleSubmit">
		<div class="space-y-4">
			<div class="grid gap-4 grid-cols-2">
				<div id="input" class="flex flex-col w-15 flex-1">
					<label for="firstname" class="text-gray-500 mb-2">First Name</label>
					<input
					v-model="fName"
					type="text"
					id="firstname"
					class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:shadow-lg"
					/>
				</div>
				<div id="input" class="flex flex-col w-15 flex-1">
					<label for="lastname" class="text-gray-500 mb-2">Last Name</label>
					<input
					v-model="lName"
					type="text"
					id="lastname"
					class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:shadow-lg"
					/>
				</div>
			</div>
			<div id="input" class="flex flex-col w-15">
					<label for="displayName" class="text-gray-500 mb-2">Username</label>
					<input
					v-model="displayName"
					type="text"
					id="displayName"
					class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:shadow-lg"
					/>
			</div>

			<div id="input" class="flex flex-col w-15">
					<label for="email" class="text-gray-500 mb-2">Email Address</label>
					<input
					v-model="email"
					type="text"
					id="email"
					class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:shadow-lg"
					/>
			</div>
			<div id="input" class="flex flex-col w-15">
					<label for="password" class="text-gray-500 mb-2">Password</label>
					<input
					v-model="password"
					type="password"
					id="password"
					class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:shadow-lg"
					/>
			</div>
			<!-- Error Message-->
			<div class="text-red-400 font-semibold text-center" v-if="error"> {{ error  }}</div>
        </div>
		<div class="text-center mt-16">
			<button class="py-3 w-64 text-xl text-white bg-black hover:bg-gray-800 rounded-2xl" v-if="!isPending">Create Account</button>
			<button class="py-3 w-64 text-xl text-white bg-gray-800 rounded-2xl" v-if="isPending" disabled>Loading..</button>
			<p class="mt-7 text-sm text-gray-700">Already Have An Account? <router-link :to="{ name: 'Login' }"><span class="underline cursor-pointer text-purple-500 font-semibold"> Sign In</span></router-link></p>
		</div>
		</form>
		
	</div>
	</div>
	 </div>
    
</template>

<script setup>
import useSignup from '@/composables/useSignup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const fName =  ref('')
const lName = ref('')
const displayName = ref('')
const email =  ref('')
const password = ref('')

const { error, signup, isPending } = useSignup()
const router = useRouter()
 
const handleSubmit = async () => {
	
	const res = await signup(email.value, password.value, displayName.value, fName.value, lName.value)
	if (!error.value) {
		// console.log('user registered')
		router.push({ name: 'UserHome' })
	}

}
</script>

<style>

</style>