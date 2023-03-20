<template>
<div class="min-h-screen ">
    <section class="min-h-screen flex items-center justify-center">
            <div class="lg:w-4/12 w-8/12">
                <div class=" md:mx-auto">
                    <iframe class="mx-auto my-6" src="https://embed.lottiefiles.com/animation/96237"></iframe>
                    <div class="text-center">
                        <h3 class="text-purple-900 font-semibold text-center text-4xl">Check your email!</h3>
                        <p class="text-slate-600 my-2">We have sent a password recover instractions to your email</p>
                        <p class="text-slate-600 my-2"> Have a great day!  </p>
                        <router-link :to="{ name: 'Login' }" class="py-10 text-center">
                            <div to="./" href="#"
                             class="w-1/2 inline-block px-7 py-4 bg-purple-600 text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                LOGIN  
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="text-center mt-10">
                    <router-link :to="{ name: 'ResetPassword' }" href="#" class="underline decoration-purple-500 decoration-2 italic text-slate-500">Didn't receive an email?</router-link>
                </div>
            </div>
    </section>

</div>
</template>