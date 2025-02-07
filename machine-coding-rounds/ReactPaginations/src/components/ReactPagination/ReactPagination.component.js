import "./ReactPagination.styles.css";
const ReactPagination = ({ containerProps, containerMethods }) => {
  const { products, totalPages, start, end, currentPage } = containerProps;
  const { handlePageChange, goToPrev, goToNext } = containerMethods;

  const renderProductCard = (item) => {
    return (
      <div className="productCardContainer">
        <img src={item.thumbnail} alg={item.title} className="product-image" />
        <h2>{item.title}</h2>
      </div>
    );
  };

  return products.products?.length === 0 ? (
    <div>No products Found</div>
  ) : (
    <div className="pagination-container">
      <h1>Welcome to react pagination</h1>
      <div className="pagination-container">
        <button
          className="page"
          onClick={goToPrev}
          disabled={currentPage === 0}
        >
          {"<"}
        </button>
        {[...Array(totalPages).keys()]?.map((page) => (
          <span
            className={`page ${currentPage === page ? "active" : ""}`}
            onClick={() => {
              handlePageChange(page);
            }}
          >
            {page + 1}
          </span>
        ))}
        <button
          className="page"
          onClick={goToNext}
          disabled={currentPage === totalPages - 1}
        >
          {">"}
        </button>
      </div>
      <div className="product-container">
        {products?.products?.slice(start, end)?.map((item) => {
          return renderProductCard(item);
        })}
      </div>
    </div>
  );
};

export default ReactPagination;
