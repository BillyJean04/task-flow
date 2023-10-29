import { DocumentNode, OperationVariables, QueryHookOptions, useQuery } from "@apollo/client";
import { useLazySession } from "@/hooks/useLazySession";

export const useAuthQuery = (query: DocumentNode, options?: QueryHookOptions, variables?: OperationVariables) => {
    const { session } = useLazySession();
    const { loading, error, data } = useQuery(query, {
        variables: { userId: session?.user.id, ...variables },
        ...options,
    });

    return { loading, error, data };
};
