import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../app/slice";
import PaginationControl from "./PaginationControls";
import { SkeletonLoader } from "./SkeletonLoader";

const Pagination = () => {
  const dispatch = useDispatch();

  const { products, page, loading, error } = useSelector(
    (state) => state.pagination
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, page]);

  return (
    <>
      <div className="text-3xl font-bold">Pagination</div>

      {loading && <SkeletonLoader />}
      {error && <div>Error: {error}</div>}

      {products.length > 0 && (
        <div className="productsList flex justify-between flex-wrap">
          {products.map((product) => (
            <span
              key={product.id}
              className="border-2 p-2 m-2 w-52 cursor-pointer"
            >
              <img src={product.thumbnail} alt={product.title} />
              <ul>
                <li>{product.title}</li>
                <li>{product.category}</li>
              </ul>
            </span>
          ))}
        </div>
      )}

      <PaginationControl />
    </>
  );
};

export default Pagination;
