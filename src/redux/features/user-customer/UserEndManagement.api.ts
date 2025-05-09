import { baseApi } from "../../api/baseApi";

const userEndManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserAllOrder: builder.query({
      query: () => ({
        url: "orders/get-user-order",
        method: "GET",
      }),
    }),
    getUserOrderChartData: builder.query({
      query: (email: string) => ({
        url: `orders/chart/${email}`,
        method: "GET",
      }),
    }),

    // blockUser: builder.mutation({
    //   query: ({userId }) => ({
    //     url: `/users/${userId}/block`,
    //     method: "PATCH"
    //     // body: data,
    //   }),
    // }),

    // deleteProduct:builder.mutation({
    //   query: (id) => ({
    //     url: `/products/${id}`,
    //     method: 'DELETE',
    //   }),
    // })
  }),
});

export const { useGetUserAllOrderQuery,useGetUserOrderChartDataQuery } = userEndManagementApi;
