
export {getFeaturedList, getProduct, getProductList} from "./productServices"


import dataService from "./dataService";
import cartService from "./cartService";

export const { getUser, checkLoggingStatus } = dataService;
export const { getUserCart, addToCartAPI, removeFromCartAPI, clearCartAPI  } = cartService;
