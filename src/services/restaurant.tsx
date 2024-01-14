import { baseAPI } from "./baseApi";
import { ENDPOINTS } from "@root/config/endpoints";
export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: (queryParams: any) =>
        `${ENDPOINTS?.getRestaurants}?page=${queryParams?.page}&limit${queryParams?.limit}`,
      providesTags: ["Restaurant"],
    }),
    getRestaurantDetail: builder.query({
      query: (id: any) => `${ENDPOINTS?.getRestaurants}/:${id}`,
      // providesTags: ["Restaurant"],
    }),
    createRestaurant: builder.mutation({
      query: (data: any) => ({
        url: `${ENDPOINTS?.createRestaurant}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Restaurant"],
    }),
    deleteRestaurant: builder.mutation({
      query: (id: any) => ({
        url: `${ENDPOINTS?.deleteRestaurant}/:${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Restaurant"],
    }),
    subDomain: builder.mutation({
      query: (queryParams: any) => ({
        url: `${ENDPOINTS?.subDomain}/:${queryParams}`,
        method: "GET",
      }),
    }),
    getSubscriptionPlan: builder.query<any, void>({
      query: () => {
        return `${ENDPOINTS?.getSubscriptionPlan}`;
      },
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantDetailQuery,
  useSubDomainMutation,
  useCreateRestaurantMutation,
  useDeleteRestaurantMutation,
  useGetSubscriptionPlanQuery,
} = authAPI;
