import { SquaresFour,ChatCircleDots,User,ShoppingBag,PhosphorLogo,DotsThree } from "@phosphor-icons/react";
import { useEffect } from "react";
export function Sidebar({isOpen,setOpen}) {
    useEffect(() => {
        const labels = document.querySelectorAll('.labels');
        labels.forEach(label => {
            label.style.display = isOpen ? 'block' : 'none';
        });

        const category = document.querySelectorAll('.category');
        category.forEach(cat => {
            cat.style.display = isOpen ? 'block' : 'none';
        });

        const categoryDots = document.querySelectorAll('.category-dots');
        categoryDots.forEach(catDot => {
            catDot.style.display = isOpen
                ? 'none'
                : 'block';
        }
        );
    }, [isOpen]);

    return (
        <div onMouseEnter={()=>setOpen(true)} className={`fixed top-0 left-0 z-[9999999] border-r-[1px] border-gray-300 ${isOpen ? 'w-[290px]' : 'w-[90px]'} h-screen transition-all duration-300`}>
            <div className="flex justify-center gap-5 w-full p-5">
                <PhosphorLogo size={32} weight="fill" />
                <h1 className="labels text-2xl font-bold text-nowrap">Souvenir Admin</h1>
            </div>
            {/* Content */}
            <div className={`hide-scroll bg-white h-[calc(100vh-100px)] overflow-y-auto px-5`}>
                <div className="">
                    <p className="category text-gray-400 text-sm py-5">MENU</p>
                    <div className="category-dots w-full py-5">
                        <DotsThree className="mx-auto" size={32} color="gray" weight="bold"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 px-3 py-2 bg-blue-100 rounded-md">
                            <SquaresFour color="#2563EB" size={24} weight="regular" />
                            <p className="labels font-bold text-blue-500">Dashboard</p>
                        </div>
                        <div className="flex gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
                            <ShoppingBag color="gray" size={24} weight="regular" />
                            <p className="labels font-bold text-gray-500">Order</p>
                        </div>
                        <div className="flex gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
                            <User color="gray" size={24} weight="regular" />
                            <p className="labels font-bold text-gray-500">User</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <p className="category text-gray-400 text-sm py-5">SUPPORT</p>
                    <div className="category-dots w-full py-5">
                        <DotsThree className="mx-auto" size={32} color="gray" weight="bold"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
                            <ChatCircleDots color="gray" size={24} weight="regular" />
                            <p className="labels font-bold text-gray-500">Chat</p>
                        </div>
                        {/* <div className="flex gap-2 px-3 py-2 rounded-md">
                            <ShoppingBag color="gray" size={24} weight="regular" />
                            <p className="font-bold text-gray-500">Order</p>
                        </div>
                        <div className="flex gap-2 px-3 py-2 rounded-md">
                            <User color="gray" size={24} weight="regular" />
                            <p className="font-bold text-gray-500">User</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
