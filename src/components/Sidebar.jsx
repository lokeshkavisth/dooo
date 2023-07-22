import { Link } from "react-router-dom";
import { GoTasklist } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineChecklistRtl, MdFormatListBulletedAdd } from "react-icons/md";
import { HiViewGrid } from "react-icons/hi";
import Logo from "./Logo";
import Schedular from "./Schedular";

const Sidebar = () => {
  const sidebarMenu = sideMenu.map(({ id, title, path, icon }) => (
    <li key={id}>
      <Link
        to={path}
        className="flex items-center gap-3 hover:underline font-medium"
      >
        <i className="text-lg text-purple-400">{icon}</i>
        {title}
      </Link>
    </li>
  ));

  const toggleSidebar = () => {
    const sidebar = document.querySelector("[data-aside]");
    const sidebarClass = sidebar.classList;

    if (sidebarClass.contains("-left-64")) {
      sidebar.classList.remove("-left-64");
      sidebar.classList.add("left-0");
    } else {
      sidebar.classList.remove("left-0");
      sidebar.classList.add("-left-64");
    }
  };

  return (
    <aside
      className="w-64 min-h-screen max-h-screen p-4 space-y-20 border-r border-gray-800 absolute top-0 -left-64 z-10 bg-gray-900 transition-all duration-500 md:static"
      data-aside="sidebar"
    >
      <Logo />
      <span className="text-2xl absolute -top-20 -right-8 z-20 p-2 bg-gray-900 md:hidden block">
        <button
          type="button"
          title="Click here to see more options"
          onClick={toggleSidebar}
        >
          <HiViewGrid />
        </button>
      </span>
      <ul className="space-y-6">{sidebarMenu}</ul>
      <Schedular />
    </aside>
  );
};

export default Sidebar;

const sideMenu = [
  {
    id: 1,
    title: "Task List",
    path: "/todos",
    icon: <GoTasklist />,
  },
  {
    id: 2,
    title: "Check List",
    path: "/checklist",
    icon: <MdOutlineChecklistRtl />,
  },
  {
    id: 3,
    title: "Dashboard",
    path: "/dashboard",
    icon: <RxDashboard />,
  },
  {
    id: 4,
    title: "Create",
    path: "/create",
    icon: <MdFormatListBulletedAdd />,
  },
];
