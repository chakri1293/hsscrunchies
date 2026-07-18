import ProductForm from "@/components/admin/ProductForm";
import { getProductFormData } from "@/services/product.service";


export default async function NewProductPage(){

  const categories =
    await getProductFormData();


  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">
        Add Product
      </h1>


      <ProductForm
        categories={categories}
      />

    </div>

  );
}