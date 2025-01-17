import { baseApi } from "../../api/baseApi";

interface QueryArgs {
  page?: number;
  limit?: number;
}

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (productInfo) => {
        console.log(productInfo);
        return {
          url: '/product/create-product',
          method: 'POST',
          body: productInfo,
        };
      },
      invalidatesTags: [{ type: "product", id: "LIST" }],
    }),
    getProduct: builder.query({
      query: ({ page, limit }: QueryArgs = {}) => {
        let url = '/product';
        if (page !== undefined && limit !== undefined) {
          url += `?page=${page}&limit=${limit}`;
        }
        return {
          url,
          method: "GET",
        };
      },
      providesTags: [{ type: "product", id: "LIST" }],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: 'GET',
      }),
    }),
    editProduct: builder.mutation({
      query: ({ id, productInfo }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        body: productInfo,
      }),
      invalidatesTags: [{ type: "product", id: "LIST" }],
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/product/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "product", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductQuery,
  useGetSingleProductQuery,
  useEditProductMutation,
  useDeleteProductMutation
} = productApi;
