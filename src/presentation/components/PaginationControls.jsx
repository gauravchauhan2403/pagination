import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../application/paginationSlice";
import { fetchProducts } from "../../application/paginationThunks";
import { setPageToUrl } from "../../utility/urlUtils";

export const PaginationControls = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((s) => s.pagination);

  const goToPage = (newPage) => {
    dispatch(setPage(newPage));
    setPageToUrl(newPage);
    dispatch(fetchProducts());
  };

  return (
    <div className=" mt-7">
      <button className=" p-2 font-medium text-blue-500 border-black focus:border-2 hover:text-blue-800 " disabled={page === 1} onClick={() => goToPage(page - 1)}>
        Prev
      </button>

      <span className=" font-black"> Page {page} </span>

      <button className=" p-2 font-medium text-blue-500 border-black focus:border-2 hover:text-blue-800" onClick={() => goToPage(page + 1)}>Next</button>
    </div>
  );
};
