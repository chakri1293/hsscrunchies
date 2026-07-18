import Link from "next/link";
import { getProducts } from "@/services/product.service";


export default async function ProductsPage(){


const products = await getProducts();


return (

<div className="space-y-6">


<div className="flex justify-between">


<h1 className="text-3xl font-bold">
Products
</h1>


<Link
href="/admin/products/new"
className="rounded-lg bg-pink-600 px-4 py-2 text-white"
>
+ Add Product
</Link>


</div>



<table className="w-full border">


<thead>

<tr className="border">

<th className="p-3">
Name
</th>

<th>
Category
</th>

<th>
Sub Category
</th>

<th>
Price
</th>

</tr>

</thead>



<tbody>


{
products.map(product=>(

<tr
key={product.id}
className="border"
>


<td className="p-3">
{product.name}
</td>


<td>{product.subCategory?.category?.name ?? "-"}</td>
<td>{product.subCategory?.name ?? "-"}</td>

<td>
₹{product.price.toString()}
</td>


</tr>

))
}


</tbody>


</table>


</div>

)

}