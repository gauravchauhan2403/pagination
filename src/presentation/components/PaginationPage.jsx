import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../application/paginationThunks";
import { setPage } from "../../application/paginationSlice";
import { getPageFromUrl } from "../../utility/urlUtils";
import { ProductList } from "./ProductList";
import { PaginationControls } from "./PaginationControls";

export const PaginationPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const pageFromUrl = getPageFromUrl();
    dispatch(setPage(pageFromUrl));
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h2 className=" font-bold text-3xl text-blue-700">Products</h2>
      <ProductList />
      <PaginationControls />
    </>
  );
};
