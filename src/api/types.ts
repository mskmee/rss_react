export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  thumbnail: string;
  images?: string[];
  category?: string;
  stock?: number;
  discountPercentage?: number;
}

export interface IDataResponse {
  products: IProduct[];
}
