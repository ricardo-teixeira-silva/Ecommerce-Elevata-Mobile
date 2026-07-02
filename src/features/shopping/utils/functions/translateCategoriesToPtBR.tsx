import { listContentCategories } from "@/src/shared/components/map-category-to-ui";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  CategoryItem,
  ListCategoriesResponse,
} from "../../../../shared/types/categories";

export const mapCategoryToUI = (
  category: ListCategoriesResponse,
): CategoryItem => {
  return (
    listContentCategories[category.slug] || {
      name: category.name,
      icon: (
        <SimpleLineIcons name="screen-smartphone" size={24} color="black" />
      ),
    }
  );
};
