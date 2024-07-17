import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (orderInfo) => ({
                url: "/order/create-order",
                method: "POST",
                body: orderInfo,
            })
        })
    }),
});

export const {
    createOrder
} = orderApi;
