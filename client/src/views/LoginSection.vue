<script>
import { mapActions } from 'pinia';
import { useAuthStore } from '../stores/auth';
export default {
    data () {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        ...mapActions(useAuthStore, ['login', 'handleGoogleLogin']),
        handleLogin () {
            const value={
                email: this.email,
                password: this.password,
            }
            this.login(value)
        },
        navigateToRegister () {
            this.$router.push('register')
        },
        navigateToHome () {
            this.$router.push('/')
        },
        async handleGoogleLogin (response) {
            await useAuthStore().handleGoogleLogin(response);
        },
    }
}
</script>
<template>
    <!-- LOGIN -->
    <section id="signup-section" class="flex justify-center items-center h-screen bg-white">
        <div class="min-h-screen bg-white-50 flex flex-col justify-center py-12 px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <div class="w-96 p-6 shadow-lg bg-white rounded-md">
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>

                    <form @submit.prevent="handleLogin" id="signup-form" class="mb-0 space-y-6 mt-6">
                        <div>
                            <label htmlFor="email" class="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div class="mt-1">
                                <input v-model="email" id="email-signup" name="email" type="text" autoComplete="email"
                                    required
                                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" class="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div class="mt-1">
                                <input v-model="password" id="password" name="password" type="password" required
                                    autoComplete="password"
                                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                            </div>
                        </div>
                        <div>
                            <a @click.prevent="navigateToRegister" class="block text-sm font-medium text-blue-700">
                                Don't have an account yet?
                            </a>
                        </div>
                        <div class="mt-3">
                            <button type="submit"
                                class="border-2 border-gray-500 bg-gray-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-500 font-semibold">
                                Login
                            </button>
                        </div>
                        <div>
                            <p class="block text-sm font-medium text-gray-700 text-center">Or</p>
                        </div>
                        <div class="py-2">
                            <GoogleLogin style="margin-left: 21%;" :callback="handleGoogleLogin" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>