import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryString = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams()!;
    const router = useRouter();
    return useCallback(
        (name: string, label: string) => {
            const params = new URLSearchParams(searchParams);
            const prevParams = params.get(name);

            if (prevParams) {
                const items = prevParams.split("-");

                if (items.includes(label)) {
                    // Remove the label from items if it exists
                    const updatedItems = items.filter((item) => item !== label);

                    if (updatedItems.length === 0) {
                        params.delete(name); // Delete the search param if updatedItems is empty
                    } else {
                        params.set(name, updatedItems.join("-")); // Set the updatedItems as the search param value
                    }
                } else {
                    items.push(label); // Add the label to the existing items
                    params.set(name, items.join("-")); // Set the updated items as the search param value
                }
            } else {
                params.set(name, label); // Set the label as the search param value
            }

            router.push(pathname + "?" + params.toString());
        },
        [searchParams, pathname, router],
    );
};
