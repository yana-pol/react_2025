import { ReviewsList } from "../reviews/reviewsList.jsx";
import { MenuList } from "../menu/menuList.jsx";

export const Restaurant = ({ menu, reviews }) => {
  return (
    <>
      <MenuList menuIds={menu} />
      <ReviewsList reviews={reviews} />
    </>
  );
};
