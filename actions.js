export const LOAD_B_MOVIES = 'LOAD_B_MOVIES';
export const LOAD_H_MOVIES = 'LOAD_H_MOVIES';
export const ADD_TO_CART = 'ADD_TO_CART';



export function loadBollywood(bMovies) { // add product
    return {
        type: LOAD_B_MOVIES,
        bMovies: {
            ...bMovies,

        },
    }
}

export function loadHollywood(hMovies) { // add product
    return {
        type: LOAD_H_MOVIES,
        hMovies: {
            ...hMovies,

        },
    }
}

export const addToCart = (data) => {
    // console.warn("action",data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}


