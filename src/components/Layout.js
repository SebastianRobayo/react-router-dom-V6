import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container min-h-screen mx-auto my-20">{children}</div>
      <Footer />
    </>
  );
}
