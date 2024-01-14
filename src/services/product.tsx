import { baseAPI } from "./baseApi";
import { ENDPOINTS } from "@root/config/endpoints";
export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createMenu: builder.mutation<void, any>({
      query: (data) => ({
        url: `${ENDPOINTS?.createMenu}`,
        method: "POST",
        body: data?.categoryData,
        headers: {
          ...(data?.id && { "restaurant_id": data?.id }),
        },
      }),
      //   invalidatesTags: ["Restaurant"],
    }),
  }),
});

export const { useCreateMenuMutation } = authAPI;
