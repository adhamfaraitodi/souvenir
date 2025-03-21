import { List, UserCircle,CaretDown } from "@phosphor-icons/react";
import {Link, usePage} from "@inertiajs/react";
import { useState } from "react";
export function Header({sideBarToggle,setSideBarToggle}) {
    const user = usePage().props.auth.user;
    const [showProfile, setShowProfile] = useState(false);
    console.log(user);
    return(
        <div className="sticky top-0 flex w-full border-b-[1px] z-[999999] py-5 px-5 bg-white border-gray-300">
            <div className={`flex justify-between items-center w-full`}>
                <button className="px-3 py-2 border-[1px] border-gray-300 rounded-md" onClick={()=>setSideBarToggle(!sideBarToggle)}>
                    <List size={24} color="gray" weight="regular" />
                </button>
                <div className="flex items-center gap-2 pe-10">
                    <UserCircle size={32} color="gray" weight="fill" />
                    {/* {
                        user ? <p className="text-gray-600">{user.name}</p> : <p>Profile</p>
                    } */}

                    <div onClick={() => setShowProfile(!showProfile)} className="relative cursor-pointer">
                        <div className="flex items-center gap-2">
                            <p>Profile</p>
                            <CaretDown size={24} color="gray" weight="regular" />
                        </div>

                        {/* Content */}
                        {
                            showProfile && (
                            <div className={`absolute top-10 right-0 w-[200px] flex flex-col px-5 py-2 bg-white border-[1px] border-gray-300 rounded-md shadow-md`}>
                                <p>Settings</p>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="text-left"
                                >
                                    Log Out
                                </Link>
                            </div>
                            )
                        }
                    </div>
                </div>
                {/* <h1 className="text-2xl font-normal text-gray-600">Dashboard</h1> */}
            </div>
        </div>
    );
}
