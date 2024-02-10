<script>
import { mapActions, mapState } from 'pinia';
import SearchButton from '@/components/SearchButton.vue';
import { useProductStore } from '../stores/product';
import TransactionRow from '@/components/TransactionRow.vue';
export default {
    components: {
        SearchButton,
        TransactionRow
    },
    methods: {
        ...mapActions(useProductStore, ['fetchRevenue']),
        fetchProductRevenueWithFilter (val) {
            this.fetchRevenue(val)
        },
    },
    computed: {
        ...mapState(useProductStore, ['revenues'])
    },
    created () {
        this.fetchRevenue();
    },
}
</script>
<template>
    <!-- Revenue Dashboard-->
    <div class="ml-60 p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 class="mb-4 text-2xl font-semibold leading">Statistics</h2>
        <div class="col-12 md:col-6 mb-3">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full md:w-1/5 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Total Revenue</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            ${{ revenues.totalRevenue }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/5 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Today's Revenue</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            ${{ revenues.todayRevenue }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 7 Days Ago Daily Average Revenue</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            ${{ revenues.averageLast7DaysRevenue }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/5 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 7 Days Ago Revenue</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            ${{ revenues.totalRevenueLast7Days }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 7-14 Days Ago Revenue</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            ${{ revenues.totalRevenuePreviousWeek }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 7 Days Ago Vs Last 7-14 Days Ago
                            Revenue</h6>
                        <h6 v-if="revenues.thisWeekRevenueComparedWithPreviousWeekRevenue < 0"
                            class="text-lg font-semibold text-red-500">
                            -${{ Math.abs(revenues.thisWeekRevenueComparedWithPreviousWeekRevenue) }}
                        </h6>
                        <h6 v-else-if="revenues.thisWeekRevenueComparedWithPreviousWeekRevenue > 0"
                            class="text-lg font-semibold text-green-500">
                            +${{ revenues.thisWeekRevenueComparedWithPreviousWeekRevenue }}
                        </h6>
                        <h6 v-else class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            ${{ revenues.thisWeekRevenueComparedWithPreviousWeekRevenue }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 30 Days Ago Revenue</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            ${{ revenues.totalRevenueLast30DaysAgo }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/4  px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 30-60 Days Ago Revenue</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            ${{ revenues.totalRevenueLast60Days }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 30 Days Ago Vs Last 30-60 Days Ago
                            Revenue</h6>
                        <h6 v-if="revenues.last30DaysAgoComparedWithLast60DaysAgoRevenue < 0"
                            class="text-lg font-semibold text-red-500">
                            -${{ Math.abs(revenues.last30DaysAgoComparedWithLast60DaysAgoRevenue) }}
                        </h6>
                        <h6 v-else-if="revenues.last30DaysAgoComparedWithLast60DaysAgoRevenue > 0"
                            class="text-lg font-semibold text-green-500">
                            +${{ revenues.last30DaysAgoComparedWithLast60DaysAgoRevenue }}
                        </h6>
                        <h6 v-else class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            ${{ revenues.last30DaysAgoComparedWithLast60DaysAgoRevenue }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/5 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Products Sold</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            {{ revenues.totalProductSold }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Today's Product Sold</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            {{ revenues.todayProductSold }}
                        </h6>
                    </div>
                </div>

                <div class="w-full md:w-1/3 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Average Last 7 Days Product Sold</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            {{ revenues.averageLast7DaysProductSold }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 7 Days Ago Product Sold</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            {{ revenues.totalProdudctSoldLast7Days }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 7-14 Days Ago Product Sold</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            {{ revenues.totalProductSoldPreviousWeek }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 7 Days Ago Vs Last 7-14 Days Ago
                            Product Sold</h6>
                        <h6 v-if="revenues.thisWeekProductSoldComparedWithPreviousWeekRevenue < 0"
                            class="text-lg font-semibold text-red-500">
                            -{{ Math.abs(revenues.thisWeekProductSoldComparedWithPreviousWeekRevenue) }}
                        </h6>
                        <h6 v-else-if="revenues.thisWeekProductSoldComparedWithPreviousWeekRevenue > 0"
                            class="text-lg font-semibold text-green-500">
                            +{{ revenues.thisWeekProductSoldComparedWithPreviousWeekRevenue }}
                        </h6>
                        <h6 v-else class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {{ revenues.thisWeekProductSoldComparedWithPreviousWeekRevenue }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 30 Days Ago Revenue</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            {{ revenues.totalProductSoldLast30Days }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/4  px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 30-60 Days Ago Revenue</h6>
                        <h6 class="text-lg font-semibold text-gray-800 dark:text-gray-200" id="total-product">
                            {{ revenues.totalProductSoldLast60Days }}
                        </h6>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-4 mb-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h6 class="text-gray-500 dark:text-gray-400 mb-2 text-sm">Last 30 Days Ago Vs Last 30-60 Days Ago
                            Product Sold</h6>
                        <h6 v-if="revenues.last30DaysAgoComparedWithLast60DaysAgoProductSold < 0"
                            class="text-lg font-semibold text-red-500">
                            -{{ Math.abs(revenues.last30DaysAgoComparedWithLast60DaysAgoProductSold) }}
                        </h6>
                        <h6 v-else-if="revenues.last30DaysAgoComparedWithLast60DaysAgoProductSold > 0"
                            class="text-lg font-semibold text-green-500">
                            +{{ revenues.last30DaysAgoComparedWithLast60DaysAgoProductSold }}
                        </h6>
                        <h6 v-else class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {{ revenues.last30DaysAgoComparedWithLast60DaysAgoProductSold }}
                        </h6>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3">
                <SearchButton @fetchProductRevenueWithFilter="fetchProductRevenueWithFilter" />
            </div>
            <div class="flex flex-col overflow-x-auto text-xs">
                <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="py-2 px-4 text-left">No.</th>
                            <th class="py-2 px-4 text-left">Product Name</th>
                            <th class="py-2 px-4 border-r text-center">Transaction Date</th>
                            <th class="py-2 px-4 border-r text-center">Category</th>
                            <th class="py-2 px-4 text-center">Amount</th>
                            <th class="py-2 px-4 text-center">Total Price</th>
                        </tr>
                    </thead>

                    <tbody v-if="!revenues || !revenues.transactionHistory || revenues.transactionHistory.length === 0">
                        <tr>
                            <td colspan="6" class="text-gray-500 text-xl">
                                No data found
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <TransactionRow v-for="(transaction, index) in revenues.transactionHistory" :key="index"
                            :transaction="transaction" :index="index" />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>