import Link from "next/link";
import { prisma } from "@/lib/prisma";


export default async function Home(){

const categories =
await prisma.category.findMany({

where:{
isActive:true
},

take:6

});


return (

<main>


<section className="p-8">


<h2 className="
text-3xl
font-bold
mb-6
">

Shop By Category

</h2>



<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
">


{
categories.map(category=>(

<Link

key={category.id}

href={`/categories/${category.slug}`}

className="
border
rounded-xl
p-6
text-center
hover:shadow-md
"

>

{category.name}

</Link>

))
}


</div>


</section>


</main>

)

}