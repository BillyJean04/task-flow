import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoTodayOutline } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { useSuspendSession } from "@/hooks/useSuspendSession";
import { gql } from "@/gql";
import { useQuery } from "@apollo/client";

export type Lists = {
    node: {
        id: number;
        name: string;
        img?: string | null;
    };
};

export type Tags = {
    node: {
        id: number;
        name: string;
        color?: string | null;
    };
};

export const GET_CATEGORIES = gql(
    `
    query GetCategories($userId: UUID!) {
        listsCollection(filter: { user_id: { eq: $userId } }) {
            edges {
                node {
                    id
                    name
                    img
                }
            }
        }
        tagsCollection(filter: { user_id: { eq: $userId } }) {
            edges {
                node {
                    id
                    name
                    color
                }
            }
        }
    }
`,
);

export const useRoutes = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams()!;
    const session = useSuspendSession();

    const { loading, error, data } = useQuery(GET_CATEGORIES, {
        variables: { userId: session?.user.id },
    });

    const lists: Lists[] = useMemo(() => {
        if (!loading) {
            return data?.listsCollection?.edges || [];
        }
        return [];
    }, [data, loading]);

    const tags: Tags[] = useMemo(() => {
        if (!loading) {
            return data?.tagsCollection?.edges || [];
        }
        return [];
    }, [data, loading]);

    const routes = useMemo(
        () => [
            {
                main: [
                    {
                        label: "All tasks",
                        href: "/dashboard/all-tasks",
                        icon: AiOutlineCalendar,
                        active: pathname === "/dashboard/all-tasks",
                    },
                    {
                        label: "Today",
                        href: "/dashboard/today",
                        icon: IoTodayOutline,
                        active: pathname === "/dashboard/today",
                    },
                    {
                        label: "Tomorrow",
                        href: "/dashboard/tomorrow",
                        icon: RiFileList3Line,
                        active: pathname === "/dashboard/tomorrow",
                    },
                ],
                lists: lists?.map((list) => {
                    return {
                        label: list.node.name,
                        href: `/dashboard/${list.node.name?.toLowerCase()}`,
                        icon: list.node?.img,
                        active: searchParams.getAll("lists")[0]?.split("-").includes(list.node.name),
                    };
                }),
                tags: tags?.map((tag) => {
                    return {
                        label: tag.node.name,
                        href: `/dashboard/${tag.node.name?.toLowerCase()}`,
                        color: tag.node?.color,
                        active: searchParams.getAll("tags")[0]?.split("-").includes(tag.node.name),
                    };
                }),
            },
        ],

        [pathname, searchParams, tags, lists],
    );
    return {
        routes,
        loading,
        error,
    };
};
