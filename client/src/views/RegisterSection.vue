<script>
import { mapActions } from 'pinia';
import { useAuthStore } from '../stores/auth';
export default {
    data () {
        return {
            email: "",
            password: "",
            phoneNumber: "",

        }
    },
    methods: {
        ...mapActions(useAuthStore, ['register']),
        registerUser () {
            const value={
                email: this.email,
                password: this.password,
                password2: this.password2,

            }
            this.register(value)
        },
        navigateToLogin () {
            this.$router.push('/login')
        },
        navigateToHome () {
            this.$router.push('/')
        }
    }
}
</script>
<template>
    <section id="signup-section" class="flex justify-center items-center h-screen bg-white">
        <div class="min-h-screen bg-white-50 flex flex-col justify-center py-12 px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <div class="w-96 p-6 shadow-lg bg-white rounded-md">
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                    <form @submit.prevent="registerUser" id="signup-form" class="mb-0 space-y-6 mt-6" action="#">
                        <div>
                            <label htmlFor="email" class="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div class="mt-1">
                                <input id="email-signup" v-model="email" name="email" type="email" required
                                    autoComplete="email"
                                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" class="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div class="mt-1">
                                <input id="password-signup" v-model="password" name="password" type="password" required
                                    autoComplete="password"
                                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password2" class="block text-sm font-medium text-gray-700">
                                Re-enter password
                            </label>
                            <div class="mt-1">
                                <input id="password-signup" v-model="password2" name="password2" type="password" required
                                    autoComplete="password"
                                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                            </div>
                        </div>

                        <div>
                            <a @click.prevent="navigateToLogin" class="block text-sm font-medium text-blue-700">
                                Already have an account?
                            </a>
                        </div>

                        <div class="mt-3 py-2">
                            <button type="submit"
                                class="border-2 border-gray-500 bg-gray-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-500 font-semibold">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>