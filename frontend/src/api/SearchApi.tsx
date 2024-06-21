import { SearchResult } from "@/types";

export const searchRecipes = async (searchTerm: string): Promise<SearchResult[]> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };
  
  const response = await fetch(`http://localhost:8800/search_multi_features?user_input=${encodeURIComponent(searchTerm)}`, requestOptions);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  if (Array.isArray(data)) {
    
    return data as SearchResult[];
  } else {
      console.log(data)
      throw new Error("Unexpected response format");
  }
  // return data as SearchResult[];
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

// export const getRecipeSummary = async (recipeId: string) => {
//   const url = new URL(`http://localhost:5000/api/recipes/${recipeId}/summary`);
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   return response.json();
// };

// export const getFavouriteRecipes = async () => {
//   const url = new URL("http://localhost:5000/api/recipes/favourite");
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   return response.json();
// };

// export const addFavouriteRecipe = async (recipe: Recipe) => {
//   const url = new URL("http://localhost:5000/api/recipes/favourite");
//   const body = {
//     recipeId: recipe.id,
//   };

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
// };

// export const removeFavouriteRecipe = async (recipe: Recipe) => {
//   const url = new URL("http://localhost:5000/api/recipes/favourite");
//   const body = {
//     recipeId: recipe.id,
//   };

//   const response = await fetch(url, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
// };

