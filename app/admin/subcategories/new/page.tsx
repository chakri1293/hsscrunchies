import { prisma } from "@/lib/prisma";
import SubCategoryForm 
from "@/components/admin/SubCategoryForm";


export default async function Page(){


const categories =
await prisma.category.findMany({
    where:{
        isActive:true
    },
    select:{
        id:true,
        name:true
    }
});


return (

<div>

<h1 className="text-xl font-semibold">
Add Sub Category
</h1>


<SubCategoryForm
categories={categories}
/>


</div>

)

}