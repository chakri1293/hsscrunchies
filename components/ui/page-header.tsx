import { ReactNode } from "react";

type Props = {
  title: string;
  action?: ReactNode;
};

export default function PageHeader({ title, action }: Props) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-3xl font-bold">{title}</h1>
      {action}
    </div>
  );
}