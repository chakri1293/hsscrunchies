type Props = {
  name: string;
};

export default function CategoryCard({ name }: Props) {
  return (
    <div className="cursor-pointer rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-28 items-center justify-center rounded-xl bg-pink-100">
        <span className="text-4xl">🎀</span>
      </div>

      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
}