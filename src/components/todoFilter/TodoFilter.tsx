import "./todoFilter.sass";
import { Task } from "../../task";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

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

    const theme = useContext(ThemeContext);

    let classNames = {};
    let classes = "";
    if (theme.dark) {
        classNames = {
            background: "black",
        };
        classes += "btn-dark";
    }

    const buttons = buttonsData.map(({ name }) => {
        const active = filter === name;
        let secondClazz = "";
        if (theme.dark && active) {
            secondClazz += "btn-active-dark";
        }
        const clazz = active ? "btn-active" : "btn-light";
        return (
            <button
                type="button"
                className={`btn ${clazz} ${secondClazz} ${classes}`}
                style={classNames}
                key={name}
                onClick={() => onFilterSelect(name)}
            >
                {name}
            </button>
        );
    });

    return (
        <div className="todo-filter" style={classNames}>
            <h4>{`${activeTasksNum} items left`}</h4>
            <ul className="btn-group">{buttons}</ul>
            <button className={`btn clear-btn btn-light ${classes}`} style={classNames} onClick={() => deleteCompleted(items)}>
                Clear completed
            </button>
        </div>
    );
};

export default TodoFilter;
