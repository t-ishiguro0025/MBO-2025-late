import "@mantine/core/styles.css";
import { MantineProvider as BaseMantineProvider } from "@mantine/core";
import { theme } from "@/shared/libs/mantine";

type Props = {
  children: React.ReactNode;
};

export function MantineProvider({ children }: Props) {
  return (
    <BaseMantineProvider theme={theme} forceColorScheme="dark">
      {children}
    </BaseMantineProvider>
  );
}
