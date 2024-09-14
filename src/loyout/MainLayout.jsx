import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="dark-bg-black overflow-hidden">
      <div>Navbar</div>
      <Outlet />
      <footer>Footer</footer>
    </main>
  );
};

export default MainLayout;
