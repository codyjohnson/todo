import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import {describe, expect, it} from "vitest";
import {TodoItem} from "../TodoItem.tsx";
import type {Todo} from "../Todo.ts"

describe("<TodoItem />", () => {
    it("displays a single item", async () => {
        render(<TodoItem />)
        const listItem = screen.getByRole("listItem")
        expect(listItem).toBeInTheDocument()
    });

    it("should display", async () => {
        const todo: Todo = {id: 1, name: "Feed dog", description: "Feed dog dry food.",status: ""}
        render(<TodoItem initialTodo={{
            id: null,
            name: "",
            description: "",
            status: ""
        }} {...todo} />)
        expect(screen.findByText("bad dog")).toBeInTheDocument()
    });
});