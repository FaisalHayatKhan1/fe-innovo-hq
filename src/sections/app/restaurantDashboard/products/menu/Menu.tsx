import React from "react";
import { FiPlus } from "react-icons/fi";
import { Button } from "@root/components/ui/button";
import AddCategory from "./addCategory/AddCategory";
import AddNewProduct from "./addNewProduct/AddNewProduct";
const Menu = () => {
  const [addCat, setAddCat] = React.useState<Boolean>(false);
  const [addProduct, setAddProduct] = React.useState<Boolean>(false);
  
  return (
    <div>
      <Button
        type="button"
        variant="outline"
        size="xs"
        className="border-0"
        onClick={() => setAddCat(true)}
      >
        <span className="pr-1">
          <FiPlus className="w-4 h-4" />
        </span>
        Add Category
      </Button>
      <Button
        variant="outline"
        size="xs"
        className="border-0"
        onClick={() => setAddProduct(true)}
      >
        <span className="pr-1">
          <FiPlus className="w-4 h-4" />
        </span>
        Add Product
      </Button>
      <AddCategory open={addCat} setOpen={setAddCat} />
      <AddNewProduct open={addProduct} setOpen={setAddProduct} />
    </div>
  );
};

export default Menu;
