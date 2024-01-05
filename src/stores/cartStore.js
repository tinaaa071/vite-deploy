// const { defineStore } = Pinia
import { defineStore } from "pinia"
// 匯入 productsStore
import productsStore from './productsStore.js'

export default defineStore ('cart', {
    state: () => ({
        // 購物車資料
        cart: []
    }),
    // 方法
    actions: {
        addToCart(productId, qty = 1) {
            // 取得已經有加入購物車的項目
            // 進行判斷，如果購物車有該項目則 +1，如果沒有則新增一個購物車項目
            const currentCart = this.cart.find((item) => item.productId === productId)
            if (currentCart) {
                currentCart.qty += qty
            } else {
                // console.log(productId, qty);
                // 加入品項
                this.cart.push({
                    // id: 時間戳記
                    id: new Date().getTime(),
                    productId,
                    qty
                })
            }
            console.log(this.cart);
        },
        setCartQty(id, event) {
            const currentCart = this.cart.find((item) => item.id === id)
            currentCart.qty = event.target.value * 1
        },
        removeCartItem(id) {
            // 取得索引
            const index = this.cart.findIndex((item) => item.id === id)
            // 刪除該品項
            this.cart.splice(index, 1)
        }
    },
    getters: {
        // 購物車列表
        cartList: ({ cart }) => {
            // 1. 購物車的品項資訊，需要整合產品資訊
            // 2. 需計算小計金額
            // 3. 需提供總金額

            // 於 store 中取出 store 之方法時，會直接執行 store
            const { products } = productsStore()
            // 資料內容有更新時，需和產品資料整合
            const carts = cart.map((item) => {
                // 單一產品取出，找尋和當前 id 一致之產品
                const product = products.find((product) => product.id === item.productId)
                return {
                    // 原購物車資訊
                    ...item,
                    // 單一產品資訊
                    product,
                    // 小計金額
                    subtotal: product.price * item.qty,
                }
            })
            // 總金額 .reduce((前一個值, 當前值) => 前一個值 + 當前小計結果 ,0)
            const total = carts.reduce((a, b) => a + b.subtotal ,0)
            

            // 回傳：列表（含產品資訊）、總金額
            return {
                // 列表
                carts,
                total
            }
        }
    }
})
