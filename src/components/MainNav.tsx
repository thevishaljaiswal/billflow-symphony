
import { Home, FileText, CheckSquare, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MainNav = () => {
  const location = useLocation();
  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: FileText, label: "Submit Bill", path: "/submit" },
    { icon: CheckSquare, label: "Approvals", path: "/approvals" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-semibold">BillFlow Symphony</h1>
            <div className="flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
