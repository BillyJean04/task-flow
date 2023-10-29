"use client";

import { FC } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useQueryString } from "@/hooks/useQueryString";
import { useRoutes } from "@/hooks/useRoutes";
import SkeletonRectangle from "@/components/skeleton";
import { PiTagChevron } from "react-icons/pi";

const Sidebar: FC = () => {
    const { routes, loading, error } = useRoutes();
    const queryString = useQueryString();

    if (error) {
        console.log(error.message);
    }
    return (
        <div className="inline-flex flex-col p-6 gap-5">
            <div>Task Flow</div>
            <div className="flex flex-col gap-2">
                <h5 className="font-[600]">Lists</h5>
                <div className="flex flex-col gap-2 ">
                    {loading ? (
                        <SkeletonRectangle lines={3} unEqualWidth gap={8} className="bg-gray-200 rounded-md" />
                    ) : null}
                    {routes.map(
                        (route) =>
                            route.lists?.map(
                                ({
                                    label,
                                    // icon,
                                    active,
                                }) => {
                                    return (
                                        <div
                                            key={label}
                                            onClick={() => {
                                                queryString("lists", label);
                                            }}
                                            className={`${
                                                active ? "font-bold" : null
                                            } items-center text-[#414141] gap-3 pr-4 flex cursor-pointer`}
                                        >
                                            {/*{icon && <Image image />}*/}
                                            {label}
                                        </div>
                                    );
                                },
                            ),
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="font-[600]">Tags</h5>
                <div className="flex flex-col gap-2">
                    {loading ? (
                        <SkeletonRectangle lines={3} unEqualWidth gap={8} className="bg-gray-200 rounded-md" />
                    ) : null}
                    {routes.map(
                        (route) =>
                            route.tags?.map(
                                ({
                                    label,
                                    // icon: Icon,
                                    color,
                                    active,
                                }) => {
                                    return (
                                        <div
                                            onClick={() => {
                                                queryString("tags", label);
                                            }}
                                            className={`${
                                                active ? "font-bold" : null
                                            } items-center text-[#414141] gap-3 pr-4 flex cursor-pointer`}
                                            key={label}
                                        >
                                            <PiTagChevron size="1.35rem" color={color} />
                                            {label}
                                        </div>
                                    );
                                },
                            ),
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center gap-2">
                    <AiOutlineCheckCircle size="1.2rem" />
                    Completed
                </div>
                <div className="flex flex-row items-center gap-2">
                    <BsTrash size="1.2rem" />
                    Trash
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
