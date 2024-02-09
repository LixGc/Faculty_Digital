<script>
import SearchButton from '@/components/SearchButton.vue';
export default {
    components: {
        SearchButton
    },
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
                            1
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/5 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Total Stocks</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            1
                        </h6>
                    </div>
                </div>
            </div>
            <div class="flex justify-between">
                <div class="md:w-1/3">
                    <SearchButton />
                </div>
                <div class="md:w-1/3 text-right mr-8">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
                            <th class="py-2 px-4 border-r">Category</th>
                            <th class="py-2 px-4 text-left">Price</th>
                            <th class="py-2 px-4 text-left">Price</th>
                            <th class="py-2 px-4 text-left">Edit</th>
                            <th class="py-2 px-4 text-left">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td colSpan="5" class="text-gray-500 text-xl">
                                No data found
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td colSpan="5">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>