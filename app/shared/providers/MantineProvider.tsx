import "@mantine/core/styles.css";

import { MantineProvider as BaseMantineProvider } from "@mantine/core";

type Props = {
  children: React.ReactNode;
};

export function MantineProvider({ children }: Props) {
  return <BaseMantineProvider>{children}</BaseMantineProvider>;
}
