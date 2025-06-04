'use client'

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { I18nProvider } from "../contexts/I18nContext";

export function Provider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            <I18nProvider>
                {children}
            </I18nProvider>
        </ThemeProvider>
    );
}