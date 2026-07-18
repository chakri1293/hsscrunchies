type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={className}
      style={{
        maxWidth: "1320px",
        margin: "0 auto",
        paddingLeft: "24px",
        paddingRight: "24px",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}