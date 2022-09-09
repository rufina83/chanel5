import beachVid from "../data/beachVid.mp4";

export function Home() {
  return (
    <>
      {/* <h1>Home</h1> */}
      <div className="w-full h-screen relative">
        <video
          className="w-full h-full object-cover"
          src={beachVid}
          autoPlay
          loop
          muted
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100vh",
            position: "fixed",
            // top: "0",
            left: "0",
            // right: "0",
          }}
        />
      </div>
    </>
  );
}
