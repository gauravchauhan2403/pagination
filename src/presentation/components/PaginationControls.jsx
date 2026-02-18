import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../app/slice";

const PaginationControl = () => {
  const dispatch = useDispatch();
  const { page, totalPages } = useSelector(
    (state) => state.pagination
  );

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      dispatch(setPage(selectedPage));
    }
  };

  if (!totalPages) return null;

  return (
    <div className="Pagination mt-4">
      <span
        className="cursor-pointer"
        onClick={() => selectPageHandler(page - 1)}
      >
        Prev
      </span>

      {[...Array(totalPages)].map((_, i) => (
        <span
          key={i}
          className={
            page === i + 1
              ? "p-3 m-1 cursor-pointer border-2 bg-gray-200"
              : "p-3 m-1 cursor-pointer"
          }
          onClick={() => selectPageHandler(i + 1)}
        >
          {i + 1}
        </span>
      ))}

      <span
        className="cursor-pointer"
        onClick={() => selectPageHandler(page + 1)}
      >
        Next
      </span>
    </div>
  );
};

export default PaginationControl;
