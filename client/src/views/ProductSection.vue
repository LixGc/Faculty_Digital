<script>
import { mapActions, mapState } from 'pinia';
import SearchButton from '@/components/SearchButton.vue';
import ProductRow from '@/components/ProductRow.vue';
import AddProductModal from '../components/AddProductModal.vue';

import { useProductStore } from '../stores/product';
export default {
    components: {
        SearchButton,
        ProductRow,
        AddProductModal
    },
    data () {
        return {
            showAddProductModal: false
        }
    },
    methods: {
        ...mapActions(useProductStore, ['fetchProduct']),
        openAddProductModal () {
            this.showAddProductModal=true;
        },
        closeAddProductModal () {
            this.showAddProductModal=false;
        },
    },
    computed: {
        ...mapState(useProductStore, ['products']),
        totalStocks () {
            return this.products.reduce((total, product) => total+product.stock, 0);
        },
    },
    created () {
        this.fetchProduct(),
            this.showAddProductModal=false
    }
}
</script>
<template>
    <!-- Product Dashboard-->
    <div class="ml-60 p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 class="mb-4 text-2xl font-semibold leading">Products</h2>
        <div class="col-12 md:col-6 mb-3">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full md:w-1/5 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Total Products</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            {{ products.length }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/5 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Total Stocks</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            {{ totalStocks }}
                        </h6>
                    </div>
                </div>
            </div>
            <div class="flex justify-between">
                <div class="md:w-1/3">
                    <SearchButton />
                </div>
                <div class="md:w-1/3 text-right mr-8">
                    <button @click.prevent="openAddProductModal"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Product
                    </button>
                </div>
            </div>
            <div class="flex flex-col overflow-x-auto text-xs">
                <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="py-2 px-4 text-left">No.</th>
                            <th class="py-2 px-4 text-left">Name</th>
                            <th class="py-2 px-4 border-r">Image</th>
                            <th class="py-2 px-4 border-r">Category</th>
                            <th class="py-2 px-4 border-r">Price</th>
                            <th class="py-2 px-4">Stock</th>
                            <th class="py-2 px-4 border-r">Transactions</th>
                            <th class="py-2 px-4 border-r">Edit</th>
                            <th class="py-2 px-4 border-r">Delete</th>
                        </tr>
                    </thead>
                    <tbody v-if="!products">
                        <tr>
                            <td colSpan="5" class="text-gray-500 text-xl">
                                No data found
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-if="products">
                        <ProductRow v-for="(product, index) in products" :key="index" :product="product" :index="index" />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div v-if="showAddProductModal">
        <AddProductModal @close-modal="closeAddProductModal" />
    </div>
</template>
