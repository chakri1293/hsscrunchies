    "use client";

    import Image from "next/image";
    import { useCart } from "@/components/providers/CartProvider";

    export default function CartPage() {

    const {
    cart,
    totalPrice,
    totalItems,
    increase,
    decrease,
    remove,
    } = useCart();

    return (

    <div className="mx-auto max-w-6xl p-8">

    <h1 className="mb-8 text-3xl font-bold">
    Shopping Cart
    </h1>

    {
    cart.length===0?

    <p>Your cart is empty.</p>

    :

    <div className="space-y-6">

    {
    cart.map(item=>(

    <div
    key={item.productId}
    className="flex items-center gap-4 rounded-lg border p-4"
    >

    <Image
    src={item.image}
    alt={item.name}
    width={80}
    height={80}
    />

    <div className="flex-1">

    <h3>
    {item.name}
    </h3>

    <p>
    ₹{item.price}
    </p>

    </div>

    <div className="flex gap-2">

    <button
    onClick={()=>decrease(item.productId)}
    >
    -
    </button>

    <span>
    {item.quantity}
    </span>

    <button
    onClick={()=>increase(item.productId)}
    >
    +
    </button>

    </div>

    <button
    onClick={()=>remove(item.productId)}
    >
    ❌
    </button>

    </div>

    ))
    }

    <div className="text-right text-2xl font-bold">

    Total : ₹{totalPrice}

    </div>

    <button
    className="rounded-lg bg-pink-600 px-6 py-3 text-white"
    >

    Proceed to Checkout

    </button>

    </div>

    }

    </div>

    );

    }