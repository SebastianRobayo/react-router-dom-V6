import { useNavigate, Outlet } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const welcome = () => {
    navigate("welcome");
  };

  const goodbye = () => {
    navigate("goodbye");
  };

  return (
    <>
      <div className="carousel rounded-box w-96">
        <div className="carousel-item w-1/2">
          <img
            src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2"
            className="w-full"
          />
        </div>
        <div className="carousel-item w-1/2">
          <img
            src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB"
            className="w-full"
          />
        </div>
        <div className="carousel-item w-1/2">
          <img
            src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6"
            className="w-full"
          />
        </div>
        <div className="carousel-item w-1/2">
          <img
            src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693"
            className="w-full"
          />
        </div>
        <div className="carousel-item w-1/2">
          <img
            src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7"
            className="w-full"
          />
        </div>
        <div className="carousel-item w-1/2">
          <img
            src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094"
            className="w-full"
          />
        </div>
        <div className="carousel-item w-1/2">
          <img
            src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A"
            className="w-full"
          />
        </div>
      </div>

      {/* Esto es para usar subComponentes */}
      <Outlet />

      <button className="btn btn-primary mx-2 my-4" onClick={welcome}>
        Click!!!
      </button>
      <button className="btn btn-primary mx-2 my-4" onClick={goodbye}>
        Click!!!
      </button>
      <button className="btn btn-primary my-4" onClick={handleClick}>
        Logout
      </button>
    </>
  );
}
