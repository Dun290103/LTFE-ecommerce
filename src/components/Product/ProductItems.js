const ProductItems = ({ productsPerPage, totalProducts, paginate, num }) => {
    const pageNumbers = [];

    // Tạo mảng các số trang
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {/* Render các số trang */}
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href={num} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default ProductItems;
