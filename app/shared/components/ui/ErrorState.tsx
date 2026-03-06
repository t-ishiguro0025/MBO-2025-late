import { Stack, Title, Text, Button } from "@mantine/core";

type Props = {
  type: "not_found" | "server_error" | "network_error";
  title?: string;
  description?: string;
  action?: { label: string; onClick: () => void };
};

const ERROR_DEFAULTS = {
  not_found: {
    title: "ログが見つかりません",
    description: "URLが正しいか確認してください",
  },
  server_error: {
    title: "データを取得できませんでした",
    description: "しばらく待ってから再試行してください",
  },
  network_error: {
    title: "データを取得できませんでした",
    description: "しばらく待ってから再試行してください",
  },
};

export function ErrorState({ type, title, description, action }: Props) {
  return (
    <Stack gap="lg" align="center">
      <Title>{title ? title : ERROR_DEFAULTS[type].title}</Title>
      <Text>
        {description ? description : ERROR_DEFAULTS[type].description}
      </Text>
      {action && (
        <Button type="submit" onClick={action?.onClick}>
          {action?.label}
        </Button>
      )}
    </Stack>
  );
}
