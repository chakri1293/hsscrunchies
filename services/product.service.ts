import { prisma } from "@/lib/prisma";


export async function createProduct(data: {

  name:string;

  slug:string;

  subCategoryId:string;

  price:number;

  comparePrice?:number;

  stock:number;

  sku?:string;

  shortDescription?:string;

  description?:string;

  isFeatured?:boolean;

  isNewArrival?:boolean;

  isBestSeller?:boolean;

  isActive?:boolean;

}) {


return prisma.product.create({

data:{

...data

}

});


}



export async function getProductFormData(){

return prisma.category.findMany({

where:{
isActive:true
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

},

orderBy:{
displayOrder:"asc"
}

});


}



export async function getProducts(){

return prisma.product.findMany({

include:{

subCategory:{

include:{
category:true
}

},

images:true

},

orderBy:{
createdAt:"desc"
}

});


}