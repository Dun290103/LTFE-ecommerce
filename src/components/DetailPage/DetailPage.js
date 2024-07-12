import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductInfor from './ProductInfor';


const DetailPage = () => { 
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {  
        fetch(`http://localhost:3080/api/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
    }, [id]);   
    return (
        <div className="detail-page-title">
            <h1>Sản phẩm</h1>
            {product && <ProductInfor product ={product} />}
        </div>
    );  

}
export default DetailPage;