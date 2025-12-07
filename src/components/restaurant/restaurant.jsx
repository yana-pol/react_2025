import { ReviewsList } from "../reviews/reviewsList.jsx";
import { MenuList } from "../menu/menuList.jsx";

export const Restaurant = ({ rest }) => {
  const { menu, reviews } = rest;
  return (
    <>
      <MenuList menu={menu} />
      <ReviewsList reviews={reviews} />
    </>
  );
};
