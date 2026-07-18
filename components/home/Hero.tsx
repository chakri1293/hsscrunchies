import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-pink-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-20 md:flex-row">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="mb-3 text-pink-500 font-semibold uppercase tracking-wider">
            New Collection
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-800">
            Beautiful Handmade
            <br />
            Scrunchies & Hair Accessories
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Discover premium scrunchies, bangles, clips and accessories
            crafted to add elegance to your everyday style.
          </p>

          <Link
            href="/shop"
            className="mt-8 inline-block rounded-full bg-pink-500 px-8 py-3 text-white transition hover:bg-pink-600"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex h-96 w-full max-w-md items-center justify-center rounded-3xl bg-white shadow-lg">
          <p className="text-xl text-gray-400">
            Hero Image Coming Soon
          </p>
        </div>
      </div>
    </section>
  );
}