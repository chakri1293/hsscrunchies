import Container from "@/components/layout/Container";

export default function ContactPage() {
  return (
    <Container>

      <section className="py-16">

        <div className="mx-auto max-w-3xl">

          <h1 className="mb-10 text-center text-4xl font-bold">
            Contact Us
          </h1>

          <form className="space-y-5 rounded-2xl border p-8 shadow-sm">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border p-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border p-3"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full rounded-lg border p-3"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-lg border p-3"
            />

            <button
              className="rounded-lg bg-pink-600 px-8 py-3 text-white hover:bg-pink-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </Container>
  );
}