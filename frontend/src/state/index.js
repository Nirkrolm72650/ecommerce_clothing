import { createSlice  }  from "@reduxjs/toolkit"

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },

        // Permet d'ajouter au panier
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.item];
        },

        //Permet de supprimer un item du panier
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        //Incrémente l'item de 1
        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id){
                    item.count++;
                }
                return item;
            })
        },

        //Décrémente l'item de 1
        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id && item.count > 1){
                    item.count--;
                }
                return item;
            })
        },

        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        }

    }
});

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;