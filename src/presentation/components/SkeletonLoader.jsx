export const SkeletonLoader = () => {
  return (
    <div className="flex justify-between flex-wrap mt-4">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{
              height: "250px",
              width: "200px",
              background: "#ddd",
              marginBottom: "10px",
              borderRadius: "4px"
            }}
          />
        ))}
    </div>
  );
};
