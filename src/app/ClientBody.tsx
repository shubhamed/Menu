import React from 'react';
import "./globals.css";
"use client";
import type { ReactNode } from "react";

interface ClientBodyProps {
    children: ReactNode;
}

export function ClientBody({ children }: ClientBodyProps) {
    return (
        <body className="antialiased" suppressHydrationWarning>
            {children}
        </body>
    );
}
