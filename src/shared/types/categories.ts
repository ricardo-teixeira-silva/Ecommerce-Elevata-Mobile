import { ReactNode } from "react";

export type ListCategoriesResponse = {
  slug: string;
  name: string;
  url: string;
};

export type CategoryItemProps = {
  categories: ListCategoriesResponse;
};

export type CategoryItem = {
  name: string;
  icon: ReactNode;
};

export type CategoriesMap = Record<string, CategoryItem>;
