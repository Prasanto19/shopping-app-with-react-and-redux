const initState = {
  products: [
    {
      id: 1660635484226,
      name: 'Apple Mac M1 Pro',
      price: 238000,
      currency: '円',
      qty: 5,
      stock: 5,
    },
    {
      id: 1660635720812,
      name: 'Lenovo',
      price: 193000,
      currency: '円',
      qty: 8,
      stock: 8,
    },
    {
      id: 1660635732284,
      name: 'Dell',
      price: 136500,
      currency: '円',
      qty: 12,
      stock: 12,
    },
  ],
};
export const FETCH_PRODUCTS = 'products/fetch_products';
export const UPDATE_PRODUCTS = 'products/update_products';
export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    default:
      return state;
  }
};
