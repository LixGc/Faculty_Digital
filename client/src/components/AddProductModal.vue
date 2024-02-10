<script>
import { mapActions, mapState } from 'pinia';
import { useProductStore } from '../stores/product';
export default {
    methods: {
        ...mapActions(useProductStore, ['addProduct']),
        onClose () {
            this.$emit('close-modal');
        },
    },
    computed: {
        ...mapState(useProductStore, ['categories']),
    },
};
</script>
<template>
    <div class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
        <div class="relative">
            <button @click.prevent="onClose" class="text-black text-xl absolute top-2 right-2 z-10">
                X
            </button>
            <div class="w-[600px] h-[400px] overflow-y-auto flex flex-col bg-white p-4 rounded">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Add Product</h3>
                <div class="p-4 md:p-5">
                    <form @submit.prevent="addProduct({ name, imageUrl, category, price, stock })" class="space-y-4">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                            <input v-model="name" type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                required />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                            <input v-model="imageUrl" type="text" name="imageUrl" id="imageUrl"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select v-model="category"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                                <option value="" selected disabled>--SELECT A CATEGORY--</option>
                                <option v-for="(category, index) in categories" :key="index" :value="category">
                                    {{ category }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input v-model="price" type="number" name="price" id="price"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                required />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                            <input v-model="stock" type="number" name="stock" id="stock"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                required />
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
