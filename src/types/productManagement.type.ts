// import { TMeta } from "./global";


// export type TProduct = {
//     _id: string
//     name: string
//     brand: string
//     model: string
//     price: number
//     productImg: string
//     description: string
//     quantity: number
//     inStock: boolean
//     category: string
//     data: {
//       data: TProduct[];
//       meta: TMeta;
//     };
//   };


export type TProduct = {
  _id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  productImg: string;
  description: string;
  quantity: number;
  inStock: boolean;
  category: string;
};

export type TProductResponse = {
  data: {
    data: TProduct[];
    meta: {
      totalPage: number;
      limit: number;
      page: number;
    };
  };
  success: boolean;
  message: string;
  statusCode: number;
};