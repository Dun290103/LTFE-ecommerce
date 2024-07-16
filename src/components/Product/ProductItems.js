const ProductItems = (props) => {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;

  const totalPages = Math.ceil(_totalRows / _limit);

  const handlPageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <div>
      <button disable={_page <= 1} onclick={() => handlPageChange(_page - 1)}>
        Prev
      </button>
      <button disable={_page >= totalPages} onclick={() => handlPageChange(_page + 1)}>
        Prev
      </button>
    </div>
  );
};
export default ProductItems;
