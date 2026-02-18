
// export const fetchProductsApi = async (limit, skip) => {
//     try {
//       const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
//       if (!res.ok) {
//         throw new Error(`API failed: ${res.status}`);
//       }
//       const data = await res.json();
//       return data;  
//       // console.log(data)
//     } catch (err) {
//       console.error(err)
//       throw new Error(err.message);
      
//     }  
//   };