"use server";

import { revalidatePath } from "next/cache";
import { productSchema } from "@/validations/product.schema";
import { createProduct } from "@/services/product.service";


export async function createProductAction(data: unknown) {

  const validated =
    productSchema.safeParse(data);


  if (!validated.success) {

    return {
      success:false,
      errors: validated.error.flatten(),
    };

  }


  try {

    await createProduct(validated.data);


    revalidatePath("/admin/products");


    return {
      success:true
    };


  } catch(error:any) {


    console.log(
      "PRODUCT CREATE ERROR",
      error
    );


    if(error.code === "P2002"){

      return {
        success:false,
        error:
        "Product slug already exists. Please use another slug."
      };

    }


    return {
      success:false,
      error:"Something went wrong"
    };


  }

}