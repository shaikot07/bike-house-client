import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TProduct } from "../../../types/productManagement.type";
import { baseApi } from "../../api/baseApi";



const productManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      // query: (args) => {
      //   const params = new URLSearchParams();

      //   if (args) {
      //     args.forEach((item: TQueryParam) => {
      //       params.append(item.name, item.value as string);
      //     });
      //   }

      query: (args) => {
        const params = new URLSearchParams();

        // Expecting args to be an object and iterating over its entries
        if (args && typeof args === "object") {
          Object.entries(args).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
              params.append(key, value.toString());
            }
          });
        }


        return {
          url: '/products',
          method: 'GET',
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TProduct[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    // addAcademicSemester: builder.mutation({
    //   query: (data) => ({
    //     url: '/academic-semesters/create-academic-semester',
    //     method: 'POST',
    //     body: data,
    //   }),
    // }),
    // getAcademicFaculties: builder.query({
    //   query: () => {
    //     return { url: '/academic-faculties', method: 'GET' };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),
    // addAcademicFaculty: builder.mutation({
    //   query: (data) => ({
    //     url: '/academic-faculties/create-academic-faculty',
    //     method: 'POST',
    //     body: data,
    //   }),
    // }),
    // getAcademicDepartments: builder.query({
    //   query: () => {
    //     return { url: '/academic-departments', method: 'GET' };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),
    // addAcademicDepartment: builder.mutation({
    //   query: (data) => ({
    //     url: '/academic-departments/create-academic-department',
    //     method: 'POST',
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
 useGetAllProductsQuery

} = productManagementApi;
