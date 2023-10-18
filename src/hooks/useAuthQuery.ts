import { useSuspendSession } from "@/hooks/useSuspendSession";
import { DocumentNode, OperationVariables, QueryHookOptions, useQuery } from "@apollo/client";

export const useAuthQuery = (query: DocumentNode, options?: QueryHookOptions, variables?: OperationVariables) => {
    const session = useSuspendSession();

    const { loading, error, data } = useQuery(query, {
        variables: { userId: session?.user.id, ...variables },
        ...options,
    });

    return { loading, error, data };
};
