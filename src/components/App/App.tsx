import "./App.sass";
import AddForm from "../addForm/AddForm";
import { useState } from "react";
import TodoList from "../todo-list/TodoList";
import TodoFilter from "../todoFilter/TodoFilter";
import { nanoid } from "nanoid";
import { Task } from "../../task";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function App() {
    const [items, setItems] = useState<Task[]>([]);
    const [filter, setFilter] = useState<string>("All");

    const { dark } = useContext(ThemeContext);

    let classNames = {};
    if (dark) {
        classNames = {
            background: "#1b1b1b",
            boxShadow: "none",
        };
    }

    const addItem = (name: string) => {
        const newItem = {
            name,
            done: false,
            id: nanoid(),
        };
        setItems((items) => [...items, newItem]);
    };

    const onToggleDone = (id: string) => {
        setItems((items) =>
            items.map((item) => {
                console.log(id);
                if (item.id === id) {
                    return { ...item, done: !item.done };
                }
                return item;
            })
        );
    };

    const onFilterSelect = (name: string) => {
        setFilter(name);
    };

    const filterItems = (items: Task[], filter: string) => {
        switch (filter) {
            case "Active":
                return items.filter((item) => !item.done);
            case "Completed":
                return items.filter((item) => item.done);
            default:
                return items;
        }
    };

    const deleteCompleted = (items: Task[]) => {
        setItems((items) => items.filter((item) => !item.done));
    };

    const visibleData = filterItems(items, filter);
    const activeTasksNum = filterItems(items, "Active").length;

    return (
        <div className="wrapper" style={classNames}>
            <div className="App">
                <h1>todos</h1>
                <div style={classNames}>
                    <AddForm addItem={addItem} items={items} />
                    <TodoList items={visibleData} onToggleDone={onToggleDone} />
                    <TodoFilter
                        filter={filter}
                        onFilterSelect={onFilterSelect}
                        activeTasksNum={activeTasksNum}
                        deleteCompleted={deleteCompleted}
                        items={items}
                    />
                </div>
            </div>
            <ToggleTheme />
        </div>
    );
}

export default App;
