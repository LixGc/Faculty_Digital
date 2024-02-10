<script>
export default {
    props: ["transactions"],
    methods: {
        onClose () {
            this.$emit('close-modal');
        },
        formatDateTime (dateTimeString) {
            const options={ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            const formattedDate=new Date(dateTimeString).toLocaleDateString('en-US', options);
            return formattedDate;
        },
    },
};
</script>
<template>
    <div class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div class="relative">
            <button @click.prevent="onClose" class="text-black text-xl absolute top-2 right-2 z-10">
                X
            </button>
            <div class="w-[600px] h-[400px] overflow-y-auto flex flex-col bg-white p-4 rounded">
                <h3 class="py-3 text-xl font-semibold text-gray-900 dark:text-white">
                    Product Transaction History
                </h3>
                <table class="w-full">
                    <thead>
                        <tr>
                            <th class="border p-2">No.</th>
                            <th class="border p-2">Time</th>
                            <th class="border p-2">Amount</th>
                            <th class="border p-2">Total Price</th>
                        </tr>
                    </thead>
                    <tbody v-if="transactions">
                        <tr v-for="(transaction, index) in transactions" :key="index">
                            <td class="border p-2 text-center">{{ index + 1 }}.</td>
                            <td class="border p-2 text-center">{{ formatDateTime(transaction.createdAt) }}</td>
                            <td class="border p-2 text-center">{{ transaction.amount }}</td>
                            <td class="border p-2 text-center">{{ transaction.price }}</td>
                        </tr>
                    </tbody>
                </table>
                <p v-if="transactions.length === 0" class="text-center text-gray-500 mt-4">No Data found</p>
            </div>
        </div>
    </div>
</template>
