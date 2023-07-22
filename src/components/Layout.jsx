import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <section className="flex max-h-screen overflow-y-hidden pt-10 pb-4 relative">
      <Sidebar />
      <div className="flex-1 p-4 h-screen overflow-y-scroll">{children}</div>
    </section>
  );
};

export default Layout;
