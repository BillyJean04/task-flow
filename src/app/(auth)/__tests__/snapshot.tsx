import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SupabaseProvider } from "@/lib/supabase";
import AuthPage from "@/app/(auth)/page";

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null,
        };
    },
}));

describe("AuthPage", () => {
    it("to match snapshot", () => {
        const { container } = render(
            <SupabaseProvider>
                <AuthPage />
            </SupabaseProvider>,
        );

        expect(container).toMatchSnapshot();
    });
});
