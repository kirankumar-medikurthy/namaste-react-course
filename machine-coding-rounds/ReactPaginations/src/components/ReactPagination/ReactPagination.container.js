import { useState, useEffect } from "react";
import { getAllProducts } from "../../services/products";
import ReactPagination from "./ReactPagination.component";
const ReactPaginationContainer = () => {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchProductsInfo = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProductsInfo();
  }, []);
  const totalProducts = products?.products?.length || 0;
  const totalPages = Math.ceil(totalProducts / pageSize);
  const start = currentPage * pageSize;
  const end = start + pageSize;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const goToPrev = () => {
    // if (currentPage !== 0) {
    //   setCurrentPage(currentPage - 1);
    // } else {
    //   setCurrentPage(0);
    // }
    setCurrentPage((prev) => prev - 1);
  };

  const goToNext = () => {
    // if (currentPage !== totalPages) {
    //   setCurrentPage(currentPage + 1);
    // } else {
    //   setCurrentPage(totalPages);
    // }
    setCurrentPage((prev) => prev + 1);
  };
  const containerProps = {
    products,
    totalProducts,
    totalPages,
    start,
    end,
    currentPage,
  };
  const containerMethods = {
    handlePageChange,
    goToPrev,
    goToNext,
  };
  return (
    <ReactPagination
      containerProps={containerProps}
      containerMethods={containerMethods}
    />
  );
};

export default ReactPaginationContainer;
