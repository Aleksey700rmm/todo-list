import "./noTaskItem.sass";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const NoTaskItem = () => {
    const { dark } = useContext(ThemeContext);

    let classNames = {};
    if (dark) {
        classNames = {
            background: "black",
        };
    }
    return (
        <div className="no-task-header" style={classNames}>
            You don't have any tasks yet
        </div>
    );
};

export default NoTaskItem;
