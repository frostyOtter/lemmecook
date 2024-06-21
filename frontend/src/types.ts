export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
  };
  
  export type MenuItem = {
    _id: string;
    name: string;
    price: number;
  };
  
  export type Restaurant = {
    _id: string;
    user: string;
    restaurantName: string;
    city: string;
    country: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    cuisines: string[];
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdated: string;
  };
  
  export type OrderStatus =
    | "placed"
    | "paid"
    | "inProgress"
    | "outForDelivery"
    | "delivered";
  
  export type Order = {
    _id: string;
    restaurant: Restaurant;
    user: User;
    cartItems: {
      menuItemId: string;
      name: string;
      quantity: string;
    }[];
    deliveryDetails: {
      name: string;
      addressLine1: string;
      city: string;
      email: string;
    };
    totalAmount: number;
    status: OrderStatus;
    createdAt: string;
    restaurantId: string;
  };
  
  export type RestaurantSearchResponse = {
    data: Restaurant[];
    pagination: {
      total: number;
      page: number;
      pages: number;
    };
  };

export type API_Response = {
  partnerCode:string;
  orderId:string;
  requestId:string;
  amount:number;
  responseTime:number;
  message:string;
  resultCode:number;
  payUrl:string;
  shortLink:string;
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface RecipeSummary {
  id: number;
  title: string;
  summary: string;
}

export interface SearchResult {
  _index: string;
  _id: string;
  _score: number;
  _ignored?: string[];
  _source: {
      title: string;
      ingredients: string;
      time: number;
      cook: string;
      images: string;
  };
};
//  [{'_index': 'recipes',
//        '_id': 'T3tJs48BIJMJcnTjzG8I',
//        '_score': 0.2876821,
//        '_ignored': ['cook.keyword'],
//        '_source': {'title': 'trứng chiên hành thơm ngon, mềm xốp',
//         'ingredients': '3 quả trứng gà hoặc trứng vịt, 2 củ hành khô, hành lá, hạt nêm, nước mắm, bột ngọt, hạt tiêu, dầu ăn',
//         'time': 10,
//         'cook': 'Cách làm trứng chiên\nBước 1 Sơ chế nguyên liệu\nHành khô bóc vỏ, rửa sạch rồi thái lát mỏng.\nHành lá rửa sạch, thái nhỏ.\nĐập trứng ra tô, cho một ít hạt nêm, nước mắm, bột ngọt, hạt tiêu theo khẩu vị sau đó đánh tan. Tiếp đến cho hành lá và cho thêm 1 thìa dầu ăn vào khuấy đều để trứng sau khi chiên không bị khô.\nBước 2 Chiên trứng\nBắc chảo lên bếp, cho dầu ăn vào, cho hành khô vào phi thơm, sau đó cho trứng vào chiên.\nĐun nhỏ lửa chiên đến khi trứng vàng xốp thì khéo léo cuộn trứng lại cho đẹp mắt rồi tắt bếp.\nGắp trứng ra dĩa và dùng dao cắt miếng vừa ăn.\nBước 3 Thành phẩm\nTrứng chiên là món ăn vừa dễ làm vừa thơm ngon. Món ăn hấp dẫn ăn cùng với cơm nóng thì còn gì bằng. Chân chờ gì nữa mà không vào bếp trổ tài cho cả nhà nào!\n',
//         'images': 'link/to/images.jpg'}}]