"use client";

import { FC } from "react";
import { useRoutes } from "@/hooks/useRoutes";
import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useQueryString } from "@/hooks/useQueryString";

const Sidebar: FC = () => {
    const { routes, loading, error } = useRoutes();
    const queryString = useQueryString();

    if (loading) {
        return <>Loading</>;
    }

    return (
        <>
            <div className="inline-flex flex-col p-6 gap-5">
                <div className="flex flex-col gap-3">
                    {routes.map((route) =>
                        route.main.map(({ label, href, icon: Icon, active }) => {
                            return (
                                <Link key={label} href={href}>
                                    <div
                                        className={`${
                                            active ? "border-r-2 border-[#71acff] text-[#414141] font-bold" : null
                                        } items-center text-[#414141] gap-3 pr-4 flex cursor-pointer`}
                                    >
                                        <Icon size="1.2rem" />
                                        {label}
                                    </div>
                                </Link>
                            );
                        }),
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-[600]">Lists</h5>
                    <div className="flex flex-col gap-2 ">
                        {routes.map(
                            (route) =>
                                route.lists?.map(({ label, href, icon: Icon, active }) => {
                                    return (
                                        <div
                                            onClick={() => {
                                                queryString("lists", label);
                                            }}
                                            className={`${
                                                active ? "font-bold" : null
                                            } items-center text-[#414141] gap-3 pr-4 flex cursor-pointer`}
                                            key={label}
                                        >
                                            {label}
                                        </div>
                                    );
                                }),
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-[600]">Tags</h5>
                    <div className="flex flex-col gap-2">
                        {routes.map(
                            (route) =>
                                route.tags?.map(({ label, href, icon: Icon, active }) => {
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
                                            {label}
                                        </div>
                                    );
                                }),
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
        </>
    );
};

export default Sidebar;
