import Sidebar from "./sidebar";
import Navbar from "./navbar";

const Layout = ({ children, showSidebar = false }) => {
    return (
        <div className="flex h-screen">
            {showSidebar && <Sidebar />}
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout;