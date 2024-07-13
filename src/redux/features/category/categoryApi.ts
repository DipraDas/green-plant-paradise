import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (categoryInfo) => ({
        url: "/category/create-category",
        method: "POST",
        body: categoryInfo,
      }),
      invalidatesTags: ['Category']
    }),
    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: ['Category'],
    }),
    editCategory: builder.mutation({
      query: ({ id, name }) => ({
        url: `/category/${id}`,
        method: "PATCH",
        body: { name },
      }),
      invalidatesTags: ['Category']
    }),
    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/category/${categoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Category']
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
