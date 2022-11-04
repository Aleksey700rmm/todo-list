import "./todoFilter.sass";
import { Task } from "../../task";

interface IButtonsData {
    name: string;
}

interface TodoFilterProps {
    filter: string;
    onFilterSelect: (name: string) => void;
    activeTasksNum: number;
    deleteCompleted: (items: Task[]) => void;
    items: Task[];
}

const TodoFilter = ({ filter, onFilterSelect, activeTasksNum, deleteCompleted, items }: TodoFilterProps) => {
    const buttonsData: IButtonsData[] = [{ name: "All" }, { name: "Active" }, { name: "Completed" }];

    const buttons = buttonsData.map(({ name }) => {
        const active = filter === name;
        const clazz = active ? "btn-active" : "btn-light";
        return (
            <button type="button" className={`btn ${clazz}`} key={name} onClick={() => onFilterSelect(name)}>
                {name}
            </button>
        );
    });

    return (
        <div className="todo-filter">
            <h4>{`${activeTasksNum} items left`}</h4>
            <ul className="btn-group">{buttons}</ul>
            <button className="btn clear-btn btn-light" onClick={() => deleteCompleted(items)}>
                Clear completed
            </button>
        </div>
    );
};

export default TodoFilter;
