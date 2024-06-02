export default function Subitems({ items }: { items: string[] }) {
  return (
    <div style={{ display: "flex", gap: ".3rem", flexWrap: "wrap" }}>
      {items.map((item) => {
        return <Subitem key={item} label={item} />;
      })}
    </div>
  );
}

function Subitem({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: ".3rem .5rem",
        borderRadius: ".5rem",
        backgroundColor: "var(--color-white)",
        color: "var(--color-dark-beige)",
        width: "fit-content",
      }}
      className="caption"
    >
      {label}
    </div>
  );
}
