import React, { ReactNode } from 'react';
import "./globals.css";
import { ClientBody } from "./ClientBody";

export function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <ClientBody>{children}</ClientBody>
        </html>
    );
}
