import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const users = () => {
    navigate("/usuarios");
  };

  return (
    <>
      <Link className="btn btn-outline btn-primary" to="/user">
        Open User
      </Link>
      <button className="btn btn-primary mx-2 my-4" onClick={users}>
        Users
      </button>
    </>
  );
}
