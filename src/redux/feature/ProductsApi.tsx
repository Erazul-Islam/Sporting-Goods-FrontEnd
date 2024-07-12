import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'priductsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products'
        }),
        getlatestProducts: builder.query({
            query: () => 'latest'
        }),
        getCart: builder.query({
            query: () => 'carts'
        }),
        searchProducts: builder.query({
            query: (name) => `products?name=${name}`
        }),
        filterProducts: builder.query({
            query: ({ category, price, brand, rating }) => `products?category=${category}&price=${price}&brand=${brand}&rating=${rating}`
        }),
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: 'products',
                method: 'POST',
                body: newProduct
            })
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...updatedProduct }) => ({
                url: `products/${id}`,
                method: 'PUT',
                body: updatedProduct,
            }),
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
        }),
    })
})

export const { useGetProductsQuery,useDeleteProductMutation , useGetlatestProductsQuery , useUpdateProductMutation , useGetCartQuery, useSearchProductsQuery, useFilterProductsQuery, useCreateProductMutation } = productsApi;