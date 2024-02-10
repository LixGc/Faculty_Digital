<script>
import EditProductModal from './EditProductModal.vue';
import ProductTransactionHistoryModal from './ProductTransactionHistoryModal.vue';
import { mapActions } from 'pinia';
import { useProductStore } from '@/stores/product';
export default {
    props: ['product', 'index'],
    components: { ProductTransactionHistoryModal, EditProductModal },
    data () {
        return {
            showTransactionModal: false,
            showEditProductModal: false,
        };
    },
    methods: {
        ...mapActions(useProductStore, ['deleteProduct']),
        openTransactionModal () {
            this.showTransactionModal=true;
        },
        closeTransactionModal () {
            this.showTransactionModal=false;
        },
        openEditProductModal () {
            this.showEditProductModal=true;
        },
        closeEditProductModal () {
            this.showEditProductModal=false;
        },

    },
    created () {
        this.showTransactionModal=false,
            this.showEditProductModal=false
    },
}
</script>
<template>
    <tr className="border-b">
        <td className="py-2 px-4">{{ index + 1 }}.</td>
        <td className="py-2 px-4 text-left">{{ product.name }}</td>
        <td className="border-r text-center">
            <img :src="product.imageUrl" style="max-width: 100px; max-height: 150px;">
        </td>
        <td className="py-2 px-4 border-r text-center">{{ product.category }}</td>
        <td className="py-2 px-4 border-r text-center">${{ product.price }}</td>
        <td className="py-2 px-4 border-r text-center">{{ product.stock }}</td>
        <td className="py-2 px-4 text-center text-blue-400 hover:underline">
            <a @click.prevent="openTransactionModal">Click here to see!</a>
        </td>
        <td className="py-2 px-4 border-r text-center">
            <a @click.prevent="openEditProductModal" style='font-size: large;' href="">&#9998;</a>
        </td>
        <td className="py-2 px-4 text-center">
            <a @click.prevent="deleteProduct(product.id)" href="">&#10060;</a>
        </td>

    </tr>
    <div v-if="showTransactionModal">
        <ProductTransactionHistoryModal @close-modal="closeTransactionModal" v-for="(transactions, index) in product"
            :key="index" :transactions="transactions" />
    </div>
    <div v-if="showEditProductModal">
        <EditProductModal @close-modal="closeEditProductModal" :product="product" />
    </div>
</template>