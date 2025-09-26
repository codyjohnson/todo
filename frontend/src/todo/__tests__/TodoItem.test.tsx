import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import {TodoItem} from "../TodoItem.tsx";
import type {Todo} from "../Todo.ts"

describe("<TodoItem />", () => {
    it("displays a single item", async () => {
        render(<TodoItem />)
        const listItem = screen.getByRole("listItem")
        expect(listItem).toBeInTheDocument()
    });

    it("should display the title", async () => {
        const todo: Todo = {id: 1, name: "Feed dog", description: "Feed dog dry food.",status: ""}
        render(<TodoItem {todo} />)
        expect(screen.findByText("bad dog")).toBeInDocument()
    });
});