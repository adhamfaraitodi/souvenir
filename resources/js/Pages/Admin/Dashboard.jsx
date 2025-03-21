import { Sidebar as AdminSidebar } from "@/Layouts/Admin/Sidebar";
import { Header as AdminHeader } from "@/Layouts/Admin/Header";
import { useState } from "react";
import Checkbox from "@/Components/Checkbox";
export default function Dashboard({}) {
    const [sideBarToggle, setSideBarToggle] = useState(true);
    return(
        <div className="flex">
            <AdminSidebar isOpen={sideBarToggle} setOpen={setSideBarToggle}/>
            {/* Content */}
            <div className={`${sideBarToggle? 'ms-[290px]' : 'ms-[90px] ' } w-full transition-all duration-300`}>
                <AdminHeader sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle} />
                <div className="bg-gray-100 h-full w-full">
                    woy
                </div>
            </div>
        </div>
    );
}
