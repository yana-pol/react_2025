import { createBrowserRouter, RouterProvider } from "react-router";
import { App } from "./app";
import { RestaurantPage } from "../restaurantPage/restaurantPage";
import { MenuPage } from "../menuPage/menuPage";
import { ReviewsList } from "../reviews/reviewsList";
import { RestaurantLayout } from "../restaurantLayout/restaurantLayout";
import { DishListItem } from "../dish/dishListItem";
import { HomePage } from "../homePage/homePage";

export const Router = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <App />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "dish/:dishId",
              element: <DishListItem />,
            },
            {
              path: "restaurants",
              element: <RestaurantLayout />,
              children: [
                {
                  path: ":restaurantId",
                  element: <RestaurantPage />,
                  children: [
                    { path: "menu", element: <MenuPage /> },
                    { path: "reviews", element: <ReviewsList /> },
                  ],
                },
              ],
            },
          ],
        },
      ])}
    />
  );
};
