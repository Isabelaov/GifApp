import { useState } from "react";
import { GifGrid, AddCategory } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["jojos"]);

  const onAddCategory = (category: string) => {
    if (categories.includes(category)) return;

    setCategories([...categories, category]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </>
  );
};
// t8u6MRgi7jx3WNjFkHKvNLmy2iStceCP
