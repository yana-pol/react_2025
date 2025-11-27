import { ReviewsList } from "../reviews/reviewsList.jsx";
import { MenuList } from "../menu/menuList.jsx";

export const Restaurant = ({ rest }) => {
  const { name, menu, reviews } = rest;

  return (
    <>
      <h2>{name}</h2>
      <MenuList menu={menu} />
      <ReviewsList reviews={reviews} />
    </>
  );
};
