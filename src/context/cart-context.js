import React from "react";
import { useReducer } from "react";

const CartContext = React.createContext({
    items: [],
    totalPrice: 0,
    addItem: item => {},
    removeItem: id => {}
});

export default CartContext;



const defaultCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (state,action) => {
    if(action.type === 'ADD_ITEM_TO_CART'){

      const updatedTotalAmount =
      state.totalPrice + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    console.log(updatedTotalAmount)
    
        return{
            items: updatedItems,
            totalPrice: updatedTotalAmount
        }
    }
    else if(action.type === 'REMOVE_ITEM_FROM_CART') {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalPrice - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
  
      return {
        items: updatedItems,
        totalPrice: updatedTotalAmount
      };


    }
    return defaultCartState;
}

export const CartProvider = props => {

    const [cartState,dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD_ITEM_TO_CART',item: item} )
    };
    const removeItemFomCartHandler = id => {
        dispatchCartAction({type: 'REMOVE_ITEM_FROM_CART',id: id} )
    };

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemToCartHandler,
        removeItem: removeItemFomCartHandler
    };

    return(
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

