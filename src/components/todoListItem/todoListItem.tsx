import "./todoListItem.sass";
import { Task } from "../../task";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface TodoListItemProps {
    item: Task;
    onToggleDone: (name: string | number) => void;
}

const TodoListItem = ({ item, onToggleDone }: TodoListItemProps) => {
    const { name, done, id } = item;

    const { dark } = useContext(ThemeContext);
    let classNames = "";
    if (dark) {
        classNames += " dark";
    }
    const changeCheckbox = (name: string) => {
        onToggleDone(name);
    };

    let clazz: string = "";
    if (done) {
        clazz += "grey";
    }
    console.log(id, name);
    return (
        <li className={classNames}>
            <label className={clazz}>
                <input type="checkbox" checked={done} onChange={() => changeCheckbox(id)} />
                <span className="custom"></span>
                {name}
            </label>
        </li>
    );
};

export default TodoListItem;
