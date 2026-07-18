"use client";


import { useState } from "react";
import { createSubCategoryAction } from "@/actions/subcategory";


export default function SubCategoryForm({
    categories
}:{
    categories:{
        id:string;
        name:string;
    }[]
}){


const [loading,setLoading]=useState(false);


async function submit(
    e:React.FormEvent<HTMLFormElement>
){

    e.preventDefault();

    setLoading(true);

    const form =
    new FormData(e.currentTarget);


    const data = {
        name:String(form.get("name")),
        slug:String(form.get("slug")),
        categoryId:String(form.get("categoryId")),
    };


    const response =
    await createSubCategoryAction(data);


    if(response.success){
        window.location.href="/admin/subcategories";
    }
    else{
        alert(response.message);
    }


    setLoading(false);

}


return (

<form
onSubmit={submit}
className="space-y-4"
>


<input
name="name"
placeholder="Sub Category Name"
className="border p-2"
/>


<input
name="slug"
placeholder="slug"
className="border p-2"
/>


<select
name="categoryId"
className="border p-2"
>


<option>
Select Category
</option>


{
categories.map(
(category)=>(
<option
key={category.id}
value={category.id}
>
{category.name}
</option>
)
)
}


</select>


<button
disabled={loading}
className="border px-4 py-2"
>

{
loading
?"Saving..."
:"Save"
}

</button>


</form>

)

}