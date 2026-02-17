import { useSelector } from "react-redux";
import { SkeletonLoader } from "./SkeletonLoader";

export const ProductList = () => {
  const { products, loading, error } = useSelector(
    (state) => state.pagination
  );

  if (loading) return <SkeletonLoader />;

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {products.map((p, i) => (
        <div key={i}>
          <span className="font-medium text-amber-700 ">{p.title} - </span>
          <span>${p.price}</span>
        </div>
      ))}
    </div>
  );
};
