import { render, screen } from "@testing-library/react";
import { usePathname, useRouter } from "next/navigation";
import userEvent from "@testing-library/user-event";
import { useQueryString } from "@/hooks/useQueryString";

jest.mock("next/navigation");
const pushMock = jest.fn();
(usePathname as jest.Mock).mockReturnValue("example.com");
(useRouter as jest.Mock).mockReturnValue({
    push: pushMock,
});

function setup() {
    render(<TestComponent />);
    const heading = screen.getByRole("heading", { level: 1 });
    const list1 = screen.getByText("list1");
    const list2 = screen.getByText("list2");
    const tag1 = screen.getByText("tag1");
    const tag2 = screen.getByText("tag2");

    return { heading, list1, list2, tag1, tag2 };
}

function TestComponent() {
    const queryString = useQueryString();
    return (
        <>
            <h1>1</h1>
            <button onClick={() => queryString("lists", "Work")}>list1</button>
            <button onClick={() => queryString("lists", "Freelance")}>list2</button>
            <button onClick={() => queryString("tags", "work")}>tag1</button>
            <button onClick={() => queryString("tags", "uxresearch")}>tag2</button>
        </>
    );
}

describe("useQueryString in TestComponent", () => {
    test("TestComponent renders", () => {
        // const { list1, list2, tag1, tag2 } = setup();
        // expect(useSearchParams).toHaveBeenCalled();
        // expect(usePathname).toHaveBeenCalled();
        // expect(useRouter).toHaveBeenCalled();
        // expect(list1).toBeInTheDocument();
        // expect(list2).toBeInTheDocument();
        // expect(tag1).toBeInTheDocument();
        // expect(tag2).toBeInTheDocument();
    });
});

describe("useQueryString function, returned searchParams correctly", () => {
    test("It calls router.push mock with the correct lists searchParam", async () => {
        const user = userEvent.setup();
        const mockSearchParams = new URLSearchParams();
        jest.spyOn(global, "URLSearchParams").mockImplementation(() => mockSearchParams);

        const { list1, list2 } = setup();

        // Click the first button and check that the search params are updated correctly
        await user.click(list1);
        expect(mockSearchParams.get("lists")).toBe("Work");

        // Click the second button and check that the search params are updated correctly
        await user.click(list2);
        expect(mockSearchParams.get("lists")).toBe("Work-Freelance");

        await user.click(list2);
        expect(mockSearchParams.get("lists")).toBe("Work");

        // remove all already exists search params for next tests
        await user.click(list1);

        // Now check the final call to pushMock
        expect(pushMock).toHaveBeenCalledWith("example.com?lists=Work-Freelance");
    });

    test("It calls router.push mock with the correct tags searchParam", async () => {
        const user = userEvent.setup();
        const mockSearchParams = new URLSearchParams();
        jest.spyOn(global, "URLSearchParams").mockImplementation(() => mockSearchParams);

        const { tag1, tag2 } = setup();

        // Click the first button and check that the search params are updated correctly
        await user.click(tag1);
        expect(mockSearchParams.get("tags")).toBe("work");

        // Click the second button and check that the search params are updated correctly
        await user.click(tag2);
        expect(mockSearchParams.get("tags")).toBe("work-uxresearch");

        await user.click(tag2);
        expect(mockSearchParams.get("tags")).toBe("work");

        // remove all already exists search params for next tests
        await user.click(tag1);

        // Now check the final call to pushMock
        expect(pushMock).toHaveBeenCalledWith("example.com?tags=work-uxresearch");
    });

    test("It calls router.push mock with the correct lists and tags searchParam", async () => {
        const user = userEvent.setup();
        const mockSearchParams = new URLSearchParams();
        jest.spyOn(global, "URLSearchParams").mockImplementation(() => mockSearchParams);

        const { list1, list2, tag1, tag2 } = setup();

        await user.click(list1);
        await user.click(list2);
        await user.click(tag1);
        await user.click(tag2);

        expect(pushMock).toHaveBeenCalledWith("example.com?lists=Work-Freelance&tags=work-uxresearch");
    });
});
