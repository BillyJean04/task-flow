import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useSuspendSession } from "@/hooks/useSuspendSession";
import { useQuery } from "@apollo/client";
import { GetCategoriesDocument } from "@/gql/graphql";

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

export const useRoutes = () => {
    const searchParams = useSearchParams()!;
    const session = useSuspendSession();
    const { loading, error, data } = useQuery(GetCategoriesDocument, {
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

        [searchParams, tags, lists],
    );
    return {
        routes,
        loading,
        error,
    };
};
