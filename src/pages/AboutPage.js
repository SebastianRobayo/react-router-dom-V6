import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  const users = () => {
    navigate("/users/Sebastian");
  };

  return (
    <>
      <button className="btn btn-primary mx-2 my-4" onClick={users}>
        Welcome
      </button>
    </>
  );
}
