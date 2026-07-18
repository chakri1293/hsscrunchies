import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";


export default async function CategoryPage({
params
}:{
params:{
slug:string
}
}){


const category =
await prisma.category.findUnique({

where:{
slug:params.slug
},

include:{
subCategories:{
where:{
isActive:true
},

orderBy:{
displayOrder:"asc"
}

}
}

});


if(!category){
notFound();
}



return (

<div className="p-8">


<h1 className="text-4xl font-bold mb-8">

{category.name}

</h1>



<div className="
grid
grid-cols-2
md:grid-cols-4
gap-6
">


{
category.subCategories.map(
(sub)=>(
<Link

key={sub.id}

href={`/shop/${category.slug}/${sub.slug}`}

className="
border
rounded-xl
p-6
hover:shadow-lg
"

>

<h2 className="font-semibold">
{sub.name}
</h2>


</Link>
)
)
}


</div>


</div>

)

}