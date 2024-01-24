interface OpenGraphProps {
  title: string;
  description: string;
  pageUrl: string;
}

export default function OpenGraph({
  title,
  description,
  pageUrl,
}: OpenGraphProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "1200px",
        height: "630px",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        background:
          "linear-gradient(180deg, rgba(48,1,113,1) 0%, rgba(17,24,39,1) 100%)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <svg
          width="75"
          viewBox="0 0 75 65"
          fill="#000"
          style={{ margin: "0 75px" }}
        >
          <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
        </svg>
        <div style={{ marginTop: 40 }}>{title}</div>
      </div>
    </div>
  );
}
