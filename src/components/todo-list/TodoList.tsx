import { Task } from "../../task";
import TodoListItem from "../todoListItem/todoListItem";
import NoTaskItem from "../noTaskItem/NoTaskItem";

interface TodoListProps {
    items: Task[];
    onToggleDone: (name: string) => void;
}

const TodoList = ({ items, onToggleDone }: TodoListProps) => {
    const elements =
        items.length === 0 ? (
            <NoTaskItem />
        ) : (
            items.map((item) => {
                const { id } = item;
                return <TodoListItem key={id} item={item} onToggleDone={() => onToggleDone(id)} />;
            })
        );
    return <ul>{elements}</ul>;
};

export default TodoList;
