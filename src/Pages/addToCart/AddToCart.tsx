// import { useSelector,} from 'react-redux'; // ✅ added useDispatch
// // import { decreaseQuantity, deletedFromCart } from '../../redux/features/Cart/cartSlice';
// import { RootState } from '../../redux/store';

// const AddToCart = () => {
//   const cartItems = useSelector((state: RootState) => state.cart.cartItems); // Get cart items from the Redux store
// console.log(cartItems, 'cartItems');

//   return (
//     <div className="max-w-5xl max-lg:max-w-2xl mx-auto p-4">
//       <h1 className="text-xl font-semibold text-slate-900">Shopping Cart</h1>
//       <div className="grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8 mt-6">
//         <div className="lg:col-span-2 space-y-6">
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             cartItems.map((item) => (
//               <div key={item._id} className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200">
//                 <div className="flex gap-6 sm:gap-4 max-sm:flex-col">
//                   <div className="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
//                     <img src={item.productImg} className="w-full h-full object-contain" alt={item.name} />
//                   </div>
//                   <div className="flex flex-col gap-4">
//                     <div>
//                       <h3 className="text-sm sm:text-base font-semibold text-slate-900">{item.name}</h3>
//                       <p className="text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2">
//                         Brand: {item.brand}
//                       </p>
//                     </div>
//                     <div className="mt-auto">
//                       <h3 className="text-sm font-semibold text-slate-900">${item.price}</h3>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="ml-auto flex flex-col">
//                   <div className="flex items-start gap-4 justify-end">
//                     <button
//                       className="cursor-pointer fill-slate-400 hover:fill-pink-600 inline-block"
//                     //   onClick={() => handleRemoveItem(item._id)}
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 64 64">
//                         <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="flex items-center gap-3 mt-auto">
//                     <button
//                       type="button"
//                       className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-400 outline-none rounded-full"
//                     //   onClick={() => handleDecreaseQuantity(item._id)}
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
//                         <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
//                       </svg>
//                     </button>
//                     <span className="font-semibold text-base leading-[18px]">{item.cartQuantity}</span>
//                     <button
//                       type="button"
//                       className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-800 outline-none rounded-full"
//                       onClick={() => {} /* You can add an increase quantity action here if needed */}
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
//                         <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="bg-white rounded-md px-4 py-6 h-max shadow-sm border border-gray-200">
//           <ul className="text-slate-500 font-medium space-y-4">
//             <li className="flex flex-wrap gap-4 text-sm">
//               Subtotal <span className="ml-auto font-semibold text-slate-900">${cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0)}</span>
//             </li>
//             <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-semibold text-slate-900">$2.00</span></li>
//             <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-semibold text-slate-900">$4.00</span></li>
//             <hr className="border-slate-300" />
//             <li className="flex flex-wrap gap-4 text-sm font-semibold">
//               Total <span className="ml-auto font-semibold text-slate-900">${cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0) + 6}</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;


// new code 

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {  clearCart, decreaseQuantity, deletedFromCart, increaseQuantity } from '../../redux/features/Cart/cartSlice';
import { FaRegTrashCan } from 'react-icons/fa6';

const AddToCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="max-w-5xl max-lg:max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-semibold text-slate-900">Shopping Cart</h1>
      <div className="grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8 mt-6">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="relative flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200">
                
                {/* ❌ Remove Button Top Right */}
                <button
                  className="absolute top-2 right-2 p-1 text-black hover:text-red-600 cursor-pointer "
                  onClick={() => dispatch(deletedFromCart(item._id))}
                >
                 <FaRegTrashCan className='text-red-600'/>
                </button>

                {/* Image & Info */}
                <div className="flex gap-6 sm:gap-4 max-sm:flex-col">
                  <div className="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
                    <img src={item.productImg} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">{item.name}</h3>
                      <p className="text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2">
                        Brand: {item.brand}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-sm font-semibold text-slate-900">${item.price}</h3>
                    </div>
                  </div>
                </div>

                {/* Quantity */}
                <div className="ml-auto flex flex-col justify-between">
                  <div className="flex items-center gap-3 mt-auto">
                    <button
                      type="button"
                      className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-400 outline-none rounded-full"
                      onClick={() => dispatch( decreaseQuantity(item._id))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
                        <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                      </svg>
                    </button>
                    <span className="font-semibold text-base leading-[18px]">{item.cartQuantity}</span>
                    <button
                      type="button"
                      className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-800 outline-none rounded-full"
                      onClick={() => dispatch( increaseQuantity(item._id))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
                        <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-md px-4 py-6 h-max shadow-sm border border-gray-200">
          <ul className="text-slate-500 font-medium space-y-4">
            <li className="flex flex-wrap gap-4 text-sm">
              Subtotal <span className="ml-auto font-semibold text-slate-900">${cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0)}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-semibold text-slate-900">$2.00</span></li>
            <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-semibold text-slate-900">$4.00</span></li>
            <hr className="border-slate-300" />
            <li className="flex flex-wrap gap-4 text-sm font-semibold">
              Total <span className="ml-auto font-semibold text-slate-900">${cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0) + 6}</span>
            </li>
          </ul>
          <button className="mt-8 w-full py-3.5 text-sm bg-black text-white rounded-md hover:bg-[#F2355F] tracking-wide"
          onClick={() => dispatch(clearCart())} // Clear cart action
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
