import { categories } from "@/data/categories";
import CategoryCard from "@/components/common/CategoryCard";
import Container from "@/components/layout/Container";

export default function Categories() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="mb-10 text-center text-4xl font-bold">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}