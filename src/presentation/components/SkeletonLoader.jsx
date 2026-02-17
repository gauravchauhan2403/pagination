export const SkeletonLoader = () => {
  return (
    <div>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{
              height: "20px",
              background: "#ddd",
              marginBottom: "10px",
              borderRadius: "4px",
            }}
          />
        ))}
    </div>
  );
};
