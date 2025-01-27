import React from 'react';
import { useGetAllProductsQuery } from '../../redux/features/allProduct/productManagement.api';

const AllProductPage = () => {
    const { data: products, isFetching } = useGetAllProductsQuery(undefined);

    console.log(products);
    return (
        <div>
            <p>Number of Products: {products?.data?.length || 0}</p>
        </div>
    );
};

export default AllProductPage;