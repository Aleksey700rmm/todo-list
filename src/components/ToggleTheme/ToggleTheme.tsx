import "./toggleTheme.sass";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ToggleTheme = () => {
    const { dark, onSetTheme } = useContext(ThemeContext);
    let classNames = {};
    if (dark) {
        classNames = {
            "background-color": "rgb(27, 27, 27)",
            "box-shadow": "none",
        };
    } else {
        classNames = {
            "background-color": "rgb(245, 245, 245)",
            "box-shadow": "none",
        };
    }

    return (
        <div className="toggler-wrapper" style={classNames}>
            <h3>Dark / Light</h3>
            <div className="toggler-text" style={classNames}>
                Toggle dark of light to customize your interface
            </div>
            <label className="toggler" htmlFor="toggler">
                <input id="toggler" type="checkbox" checked={dark} onClick={onSetTheme} readOnly />
                <span className="slider" />
                <span className="wave" />
            </label>
        </div>
    );
};

export default ToggleTheme;
