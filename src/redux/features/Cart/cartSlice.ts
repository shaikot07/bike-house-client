// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface CartState {
//   cartItems: CartItem[];
// }

// const initialState: CartState = {
//   cartItems: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       const item = action.payload;
//       const exists = state.cartItems.find(i => i.id === item.id);
//       if (exists) {
//         exists.quantity += 1;
//       } else {
//         state.cartItems.push({ ...item, quantity: 1 });
//       }
//     },
//     deletedFromCart: (state, action: PayloadAction<string>) => {
//       state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
//     },
//     decreaseQuantity: (state, action: PayloadAction<string>) => {
//       const item = state.cartItems.find(i => i.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       } else {
//         state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
//       }
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//     },
//   },
// });

// export const { addToCart,  deletedFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;



import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of your product (TProduct)
interface TProduct {
  _id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  productImg: string;
  description: string;
  quantity: number; // Stock quantity (this is not the same as the cart quantity)
  inStock: boolean;
  category: string;
}

// Define the CartItem which will include quantity added to the cart
interface CartItem extends TProduct {
  cartQuantity: number; // The quantity the user selects for this product in the cart
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add full product to cart with quantity handling
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const product = action.payload;

      const existingItem = state.cartItems.find(item => item._id === product._id);
      if (existingItem) {
        existingItem.cartQuantity += 1;
      } else {
        state.cartItems.push({ ...product, cartQuantity: 1 });
      }
    },

    // Increase quantity 
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find(item => item._id === action.payload);
      if (item) {
        // Optional: prevent exceeding available stock
        if (item.cartQuantity < item.quantity) {
          item.cartQuantity += 1;
        }
      }
    },

    //  Decrease quantity (-)
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find(item => item._id === action.payload);
      if (item && item.cartQuantity > 1) {
        item.cartQuantity -= 1;
      } else {
        // Remove if quantity drops to 0 or 1 and minus is pressed again
        state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
      }
    },

    // Remove item completely
    deletedFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
    },

    //  Clear the entire cart
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Export actions and reducer
export const { addToCart, increaseQuantity, decreaseQuantity, deletedFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
