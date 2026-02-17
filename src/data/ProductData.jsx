const httpClient = {
  async get(url) {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }

      return await res.json();
    } catch (err) {
      throw new Error(err.message || "Network Error");
    }
  },
};

export const ProductRepository = {
  async getProducts(limit, skip) {
    return httpClient.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`
    );
  },
};