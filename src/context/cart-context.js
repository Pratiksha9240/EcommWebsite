import React from "react";
import { useReducer } from "react";

const CartContext = React.createContext({
    items: [],
    addItem: item => {},
    removeItem: id => {}
});

export default CartContext;



const defaultCartState = {
    items: []
}

const cartReducer = (state,action) => {
    if(action.type === 'ADD_ITEM_TO_CART'){

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    
        return{
            items: updatedItems
        }
    }
    else if(action.type === 'REMOVE_ITEM_FROM_CART') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
          );
          
          const existingItem = state.items[existingCartItemIndex];
          
          let updatedItems;
          updatedItems = state.items.filter(item => item.id !== action.id);
      
          return {
            items: updatedItems,
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
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFomCartHandler
    };

    return(
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

