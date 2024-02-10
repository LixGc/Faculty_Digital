import { defineStore } from 'pinia'
import axios from 'axios'
export const useProductStore = defineStore('product', {
  state: () => ({
    baseUrl: 'http://localhost:3000/product/',
    products: [],
    categories: ['Furniture', 'Electronics', 'Decorations', 'Clothing']
  }),
  actions: {
    async fetchProduct() {
      try {
        const { data } = await axios(this.baseUrl + 'product-dashboard', {
          headers: { access_token: localStorage.access_token }
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
    async editProduct(val) {
      try {
        console.log(val)
        const confirmation = await Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`
        })
        if (confirmation.isConfirmed) {
          const value = {
            id: val.id,
            name: val.name,
            imageUrl: val.imageUrl,
            category: val.category,
            price: val.price,
            stock: val.stock
          }
          await axios.put(this.baseUrl + 'edit-product', value, {
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
    }
  }
})
