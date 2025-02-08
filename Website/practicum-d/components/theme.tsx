"use client";
import React, { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { getStoredTheme, setStoredTheme } from "@/lib/utils";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<"light" | "dark">(getStoredTheme());
    useEffect(() => {
        setStoredTheme(theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <button
        onClick={toggleTheme}
        className={cn(
            "p-2 rounded-lg transition duration-300",
            "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
        )}>
        {theme === "light" ? <IconMoon size={20} /> : <IconSun size={20} />}
    </button>
    );
};