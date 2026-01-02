import { LuLoaderPinwheel } from "react-icons/lu";

const PageLoader = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <LuLoaderPinwheel className="animate-spin size-10 text-primary" />
        </div>
    );
};
export default PageLoader;