
const API_URL = "http://ecosistema-gastronomico-api.herokuapp.com";



const Apis = {
  //product api
  GetProductById: `${API_URL}/api/product/getWebProductById?id=`,
  GetAllGroceryStaple: `${API_URL}/api/product/getAllGroceryStaple`,
  GetAllProductList: `${API_URL}/`,


};
export { API_URL, Apis };
