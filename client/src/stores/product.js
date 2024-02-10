import { defineStore } from 'pinia'
import axios from 'axios'
export const useProductStore = defineStore('product', {
  state: () => ({
    baseUrl: 'http://localhost:3000/product/',
    products: [],
    revenues: [],
    categories: ['Furniture', 'Electronics', 'Decorations', 'Clothing']
  }),
  actions: {
    async fetchProduct(val) {
      try {
        const { data } = await axios.get(this.baseUrl + 'product-dashboard', {
          headers: { access_token: localStorage.access_token },
          params: { productName: val }
        })
        this.products = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
            ? error.response.data.message
            : 'Oops, something went wrong'
        })
      }
    },
    async fetchRevenue(val) {
      try {
        const { data } = await axios.get(this.baseUrl + 'revenue-dashboard', {
          headers: { access_token: localStorage.access_token },
          params: { transactionProductName: val }
        })
        this.revenues = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
            ? error.response.data.message
            : 'Oops, something went wrong'
        })
      }
    },
    async editProduct(val) {
      try {
        const confirmation = await Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`
        })
        if (confirmation.isConfirmed) {
          const value = {
            name: val.name,
            imageUrl: val.imageUrl,
            category: val.category,
            price: val.price,
            stock: val.stock
          }
          await axios.put(this.baseUrl + 'edit-product/' + val.id, value, {
            headers: { access_token: localStorage.access_token }
          })
          this.fetchProduct()
          Swal.fire('Saved!', '', 'success')
        } else if (confirmation.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
            ? error.response.data.message
            : 'Oops, something went wrong'
        })
      }
    },
    async addProduct(val) {
      try {
        await axios.post(this.baseUrl + 'add-product', val, {
          headers: { access_token: localStorage.access_token }
        })
        this.fetchProduct()
        Swal.fire({
          title: 'Sweet!',
          text: `Successfully added ${val.name}!`,
          imageUrl: val.imageUrl,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: val.name
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
            ? error.response.data.message
            : 'Oops, something went wrong'
        })
      }
    },
    async deleteProduct(id) {
      try {
        const confirmation = await Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })
        if (confirmation.isConfirmed) {
          await axios.delete(this.baseUrl + 'delete-product/' + id, {
            headers: { access_token: localStorage.access_token }
          })
          this.fetchProduct()
          Swal.fire('Deleted!', 'success')
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
            ? error.response.data.message
            : 'Oops, something went wrong'
        })
      }
    }
  }
})
