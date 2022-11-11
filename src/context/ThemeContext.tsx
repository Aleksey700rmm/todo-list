import { createContext, useState } from "react";

interface IContext {
    dark: boolean;
    onSetTheme: () => void;
}

export const ThemeContext = createContext<IContext>({
    dark: false,
    onSetTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [dark, setDark] = useState(false);
    const onSetTheme = () => setDark((theme) => !theme);
    return <ThemeContext.Provider value={{ dark, onSetTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
