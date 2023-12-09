import Ricky from "../assets/nodata.jpg";
const EmptyView = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <img
        src={Ricky}
        alt="Ricky"
        style={{ width: "250px", height: "250px" }}
      />
    </div>
  );
};

export default EmptyView;
