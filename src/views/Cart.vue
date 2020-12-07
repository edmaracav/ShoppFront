  
<template>
  <div id="cart">
    <nav class="nav">
      <h2 class="nav__header"></h2>
      <div class="nav__cart">
        <button @click="getCart()">
          <i class="fas fa-shopping-cart"></i>
        </button>
        <span class="total-quantity">{{ totalQuantity }}</span>
        <div v-if="showCart" class="cart-dropdown">
          <ul class="cart-dropdown__list">
            <li v-for="product in cart" :key="product.id">
              {{ product.name }} ({{ product.quantity }})
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="products">
      <div v-for="product in products" :key="product.id" class="product">
        <h3 class="product__header">{{ product.name }}</h3>
        <img
          src="https://via.placeholder.com/150"
          alt=""
          class="product__image"
        />
        <p class="product__description">{{ product.description }}</p>
        <div class="cart">
          <button @click="deleteCart(product.oid, 1)" class="cart__button">
            -
          </button>
          <span class="cart__quantity">{{  }}</span>
          <button @click="updateCart(product.oid, 1)" class="cart__button">
            +
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
* {
  box-sizing: border-box;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}
.nav {
  align-items: center;
  background: purple;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  &__header {
    font-size: 2.5rem;
  }

  &__cart {
    position: relative;

    button {
      background: none;
      border: 0;
      color: white;
      cursor: pointer;
    }

    i {
      font-size: 2rem;
    }

    .total-quantity {
      align-items: center;
      background: lightblue;
      border-radius: 50%;
      display: flex;
      font-weight: bold;
      height: 2rem;
      justify-content: center;
      padding: 0.5rem;
      position: absolute;
      right: -10px;
      top: -10px;
      width: 2rem;
    }

    .cart-dropdown {
      background: white;
      border: 1px solid lightgray;
      border-radius: 10px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
      color: #333;
      font-size: 1.3rem;
      overflow: auto;
      padding: 0 1rem;
      position: absolute;
      right: 0;
      width: 12rem;

      .cart-dropdown__list {
        list-style: none;

        li {
          margin: 1rem 0;
        }
      }
    }
  }
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .product {
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 2rem;
    padding: 1rem;

    &__header {
      font-size: 2rem;
      text-align: center;
    }

    &__image {
      display: block;
      margin: 1rem auto;
    }

    &__description {
      font-size: 1.3rem;
      margin-top: 1rem;
    }
  }
}

.cart {
  margin-top: 2rem;
  text-align: center;

  &__button {
    background: lightblue;
    border: 0;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    height: 2.5rem;
    width: 2.5rem;
  }

  &__quantity {
    font-size: 1.5rem;
    margin: 0 1rem;
  }
}
</style>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Action, Getter, State } from "vuex-class";
import ProductService from "../services/ProductService";
import ProductsResponse from "../models/ProductResponse";
import CartResponse from "../models/ProductResponse";
import Product from "../models/Product";
import AddProductModel from "../models/AddProductModel";
import CartModel from "../models/CartModel";
import { ResolvePlugin } from "webpack";
import ProductModel from "../models/Product";

@Component({})
class Cart extends Vue {
  @Action("GetProducts", { namespace: "ProductModule" })
  private GetProducts: () => Promise<ProductsResponse>;

  @Action("GetCart", { namespace: "CartModule" })
  private GetCart: (model: CartModel) => Promise<CartResponse>;

  @Action("AddProductToCart", { namespace: "CartModule" })
  private AddProductToCart: (
    model: AddProductModel
  ) => Promise<ProductsResponse>;

  @Action("UpdateProduct", { namespace: "CartModule" })
  private UpdateProduct: (model: AddProductModel) => Promise<ProductsResponse>;

  @Action("DeleteProduct", { namespace: "CartModule" })
  private DeleteProduct: (model: AddProductModel) => Promise<ProductsResponse>;

  @State("Products", { namespace: "ProductModule" })
  private products: ProductModel;

  @State("Cart", { namespace: "CartModule" })
  private cart: CartModel;

  private totalQuantity = 0;
  private showCart: boolean = false;

  mounted() {
    this.GetProducts().then((res) => {
      console.log(res);
      console.log(this.products);
    });
  }

  getCart() {
    if (this.cart === null) {
      const cart: CartModel = {
        Id: null,
        Products: null,
        CartTotalPrice: null,
        ProductsCount: null,
      };

      this.GetCart(cart).then((res) => {
        console.log(res)
        console.log(this.cart);
      });
    }
  }

    updateCart(skuId, count) {

    const cart: AddProductModel = {
                cartId: this.cart.Id,
                skuId: skuId,
                count: count
          };
      this.UpdateProduct(cart).then((res) => {

      });
    }
  

    deleteCart(skuId, count) {
    const cart: AddProductModel = {
                cartId: this.cart.Id,
                skuId: skuId,
                count: count
          };
      this.DeleteProduct(cart).then((res) => {
        console.log(res)
        console.log(this.cart);
      });
    }
}

export default Cart;
</script>|