import { Stack, Title, Text, Button } from "@mantine/core";

type Props = {
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void };
  icon?: React.ReactNode;
};

export function EmptyState({ title, description, action, icon }: Props) {
  return (
    <Stack gap="lg" align="center">
      <Stack>{icon}</Stack>
      <Title>{title}</Title>
      {description && <Text>{description}</Text>}
      {action && (
        <Button type="submit" onClick={action?.onClick}>
          {action?.label}
        </Button>
      )}
    </Stack>
  );
}
