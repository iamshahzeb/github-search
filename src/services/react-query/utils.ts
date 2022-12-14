// Packages
import { useQueryClient } from '@tanstack/react-query';

export const reactQueryUtilService = (function () {
    const useInvalidateQuery = () => {
        const queryClient = useQueryClient();
        return (query: any) => queryClient.invalidateQueries(query);
    };

    const queryDefaultConfig = {
        defaultOptions: {
            queries: {
                /**
                 * If a user leaves your application and returns to stale data,
                 * React Query automatically requests fresh data for you in the background.
                 **/
                refetchOnWindowFocus: false,
                /**
                 * React Query will automatically retry the query,
                 * if that query's request has not reached the max number of consecutive retries (defaults to 3)
                 * or a function is provided to determine if a retry is allowed.
                 */
                retry: false,
                staleTime: 30000,
            },
        },
    };

    return {
        useInvalidateQuery,
        queryDefaultConfig,
    };
})();
