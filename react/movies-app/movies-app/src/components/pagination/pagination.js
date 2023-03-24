import { useEffect, useState } from "react";
import axiosInstance from "../../axiosConfig/instance";
const Pagination = () => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    axiosInstance
      .get(`3/movie/popular?page=${page}`)
      .then((res) => {
        console.log(page, res.data.page);
        setPage(res.data.page);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const changePage = (page) => {
    setPage(page);
    console.log(page);
  };
  return (
    <div>
      <div className="pagination d-flex justify-content-center">
        <button
          aria-label="Previous"
          onClick={() => {
            if (page === 1) {
              return;
            }
            setPage((page) => --page);
            console.log(page);
          }}
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
        <button
          onClick={() => {
            changePage(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            changePage(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            changePage(3);
          }}
        >
          3
        </button>
        <button
          aria-label="Next"
          onClick={() => {
            if (page === 50) {
              return;
            }
            setPage(page + 1);
            console.log(page);
          }}
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
