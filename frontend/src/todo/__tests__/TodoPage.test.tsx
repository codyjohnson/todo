import {render, screen} from "@testing-library/react";
import {describe} from "vitest";
import TodoPage from "../TodoPage.tsx";

describe('Todo', () => {
    it('should display the title', async () => {
        render(<TodoPage/>)
        expect(screen.getByRole("heading", {name: "My Todo Page"})).toBeDefined();
    });
});