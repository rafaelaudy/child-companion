import type { Metadata } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import ResponsiveTopNav from "@/components/navigation/ResponsiveTopNav";

import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata: Metadata = {
  title: "Child Companion",
  description: "An app to keep you informed about your child's development",
};

// TODO: Finish MUI integration with Next.js
// Font optimization, etc
// https://mui.com/material-ui/integrations/nextjs/?srsltid=AfmBOopxi33CP8aDCuVqF6VhVangJc7pUAMXHgh43g_eyQm4S4TNadde#installing-the-dependencies-2

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ResponsiveTopNav />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
