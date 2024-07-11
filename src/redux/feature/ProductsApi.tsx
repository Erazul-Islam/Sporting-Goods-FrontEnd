import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath :'priductsApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    endpoints:(builder) => ({
        getProducts:builder.query({
            query:() => 'products'
        }),
        getCart:builder.query({
            query:() => 'carts'
        }),
        searchProducts:builder.query({
            query:(name) => `products?name=${name}`
        }),
        filterProducts:builder.query({
            query:({category,price,brand,rating}) => `products?category=${category}&price=${price}&brand=${brand}&rating=${rating}`
        })
    })
})

export const { useGetProductsQuery, useGetCartQuery , useSearchProductsQuery, useFilterProductsQuery } = productsApi;