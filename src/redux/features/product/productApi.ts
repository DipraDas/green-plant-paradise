import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({

            query: (productInfo) =>
                {
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
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      providesTags: [{ type: "product", id: "LIST" }],
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
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
