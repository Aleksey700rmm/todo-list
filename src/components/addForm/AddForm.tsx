import { useState } from "react";
import "./addForm.sass";
import { Task } from "../../task";

interface Props {
    addItem: (name: string) => void;
    items: Task[];
}

const AddForm = ({ addItem, items }: Props) => {
    const [text, setText] = useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.length) {
            addItem(text);
        }
        setText("");
    };

    let clazz: string = "";
    if (items.length !== 0) {
        clazz += "down";
    }

    return (
        <form onSubmit={onSubmit}>
            <button>
                <div className={clazz}></div>
            </button>
            <input type="text" placeholder="What needs to be done?" value={text} onChange={(e) => setText(e.target.value)} />
        </form>
    );
};

export default AddForm;
