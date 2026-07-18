"use client";

import { useState } from "react";
import { createProductAction } from "@/actions/product.actions";

type Category = {
  id: string;
  name: string;
  subCategories: {
    id: string;
    name: string;
  }[];
};

export default function ProductForm({
  categories,
}: {
  categories: Category[];
}) {

  const [selectedCategory, setSelectedCategory] = useState("");

  const [loading, setLoading] = useState(false);
  const [message,setMessage] = useState("");


  const currentCategory = categories.find(
    (category) =>
      category.id === selectedCategory
  );


  async function submit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    setLoading(true);


    const form =
      new FormData(e.currentTarget);


    const data = {

        name: String(form.get("name")),

        slug: String(form.get("slug")),

        subCategoryId:
        String(form.get("subCategoryId")),

        price:
        Number(form.get("price")),

        comparePrice:
        form.get("comparePrice")
            ? Number(form.get("comparePrice"))
            : undefined,

        stock:
        Number(form.get("stock")),

        sku:
        String(form.get("sku") || ""),

        shortDescription:
        String(form.get("shortDescription") || ""),

        description:
        String(form.get("description") || ""),

        isFeatured:
            form.get("isFeatured") === "on",

        isNewArrival:
            form.get("isNewArrival") === "on",

        isBestSeller:
            form.get("isBestSeller") === "on",

        isActive:
            form.get("isActive") === "on",
    };


    const response =
    await createProductAction(data);


    if(response.success){

    setMessage("Product saved successfully");

    }
    else{

    setMessage(response.error || "Failed");

    }

    setLoading(false);

  }


  return (

    <form
      onSubmit={submit}
      className="space-y-5"
    >

      <input
        name="name"
        placeholder="Product Name"
        className="border p-3 w-full"
      />


      <input
        name="slug"
        placeholder="product-slug"
        className="border p-3 w-full"
      />


      {/* Category */}

      <select
        value={selectedCategory}
        onChange={(e)=>
          setSelectedCategory(e.target.value)
        }
        className="border p-3 w-full"
      >

        <option value="">
          Select Category
        </option>


        {
          categories.map((category)=>(
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))
        }

      </select>



      {/* Sub Category */}

      <select
        name="subCategoryId"
        className="border p-3 w-full"
      >

        <option>
          Select Sub Category
        </option>


        {
          currentCategory?.subCategories.map(
            (sub)=>(
              <option
                key={sub.id}
                value={sub.id}
              >
                {sub.name}
              </option>
            )
          )
        }

      </select>



      <input
        name="price"
        placeholder="Price"
        className="border p-3 w-full"
      />


      <input
        name="comparePrice"
        placeholder="Compare Price"
        className="border p-3 w-full"
      />


      <input
        name="stock"
        placeholder="Stock"
        className="border p-3 w-full"
      />


      <input
        name="sku"
        placeholder="SKU"
        className="border p-3 w-full"
      />


      <textarea
        name="shortDescription"
        placeholder="Short Description"
        className="border p-3 w-full"
      />


      <textarea
        name="description"
        placeholder="Description"
        className="border p-3 w-full"
      />



      <div className="space-y-2">

        <label>
          <input
            type="checkbox"
            name="isFeatured"
          />
          Featured
        </label>


        <label>
          <input
            type="checkbox"
            name="isNewArrival"
          />
          New Arrival
        </label>


        <label>
          <input
            type="checkbox"
            name="isBestSeller"
          />
          Best Seller
        </label>


        <label>
          <input
            type="checkbox"
            name="isActive"
            defaultChecked
          />
          Active
        </label>

      </div>

        {
    message && (
    <p className="text-sm text-red-600">
        {message}
    </p>
    )
    }

      <button
        disabled={loading}
        className="rounded bg-pink-600 px-5 py-3 text-white"
      >
        {
          loading
          ? "Saving..."
          : "Save Product"
        }

      </button>


    </form>

  );
}