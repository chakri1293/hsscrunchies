import Container from "@/components/layout/Container";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Container>
      <section className="py-16">

        <div className="mx-auto max-w-5xl">

          <h1 className="mb-4 text-center text-4xl font-bold">
            About HS Scrunchies
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
            Welcome to HS Scrunchies, your destination for beautiful
            handmade scrunchies, bangles, hair clips and fashion accessories.
            Every product is carefully selected to bring elegance,
            comfort and style to your everyday look.
          </p>

          <div className="grid gap-10 md:grid-cols-2">

            <div className="relative h-96 overflow-hidden rounded-2xl">
              <Image
                src="/about.jpg"
                alt="About HS Scrunchies"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-5">

              <h2 className="text-2xl font-semibold">
                Why Choose Us?
              </h2>

              <ul className="space-y-3 text-gray-600">
                <li>✔ Premium Quality Products</li>
                <li>✔ Affordable Prices</li>
                <li>✔ Trendy Collections</li>
                <li>✔ Secure Shopping</li>
                <li>✔ Fast Delivery</li>
              </ul>

              <p className="text-gray-600">
                Our mission is to make premium fashion accessories
                available at affordable prices while providing an
                excellent shopping experience.
              </p>

            </div>

          </div>

        </div>

      </section>
    </Container>
  );
}