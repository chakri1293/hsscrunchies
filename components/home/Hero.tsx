import Link from "next/link";
import Image from "next/image";
import { homeConfig } from "@/config/home";
import Container from "@/components/layout/Container";


export default function Hero() {
  return (
    <section className="py-10">

     <Container>

      <div className="rounded-3xl bg-pink-50 px-10 py-16">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">

        {/* Left Content */}
        <div className="max-w-xl">

          <p className="mb-3 text-pink-500 font-semibold uppercase tracking-wider">
            New Collection
          </p>


          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
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



        {/* Hero Image */}

        <div className="relative h-96 w-full max-w-md overflow-hidden rounded-3xl shadow-lg">

          <Image
            src={homeConfig.heroImage}
            alt="HSScrunchies Collection"
            fill
            className="object-cover"
          />

        </div>


      </div>
      </div>
      </Container>

    </section>
  );
}