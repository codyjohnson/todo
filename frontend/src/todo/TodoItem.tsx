import {useState} from "react";
import type {Todo} from "./Todo.ts"

type TodoProps = {initialTodo: Todo}

export const TodoItem =({initialTodo}: TodoProps) => {
    const [todo, setTodo] = useState<Todo>(initialTodo);

    return (
        <li>
            <span className="">initialTodo</span>
        </li>
    );
}