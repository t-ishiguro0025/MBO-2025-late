import "@mantine/core/styles.css";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { MantineProvider } from "@/shared/providers/MantineProvider";

export default function Root() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider>
          <Outlet />
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
