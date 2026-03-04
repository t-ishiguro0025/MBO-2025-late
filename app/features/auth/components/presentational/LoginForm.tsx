import { Paper, Stack, Title, Text, Container } from "@mantine/core";
import type { LoginInput } from "../../schemas/loginSchema";
import type { ChangeEvent } from "react";
import { ApiErrorAlert } from "./ApiErrorAlert";
import { EmailField } from "./EmailField";
import { PasswordField } from "./PasswordField";
import { LoginButton } from "./LoginButton";

type LoginFormData = LoginInput;

interface LoginFormProps {
  formValue: LoginFormData;
  isLoading: boolean;
  apiError?: string;
  fieldErrors: Partial<Record<keyof LoginFormData, string>>;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function LoginForm({
  formValue,
  isLoading,
  apiError,
  fieldErrors,
  onEmailChange,
  onPasswordChange,
}: LoginFormProps) {
  return (
    <Paper bg="transparent" radius={0} w="100%">
      <Stack gap="lg" align="center">
        <Stack align="center">
          <Title order={1}>StudyLog</Title>
          <Text size="md">学習の記録を、続ける力に。</Text>
        </Stack>
        <Container size={480} px={0} w="100%">
          <Paper bg="dark.5" p="xl" radius="md">
            <Stack>
              <Title order={2}>ログイン</Title>
              <ApiErrorAlert message={apiError} />
              <EmailField
                value={formValue.email}
                onChange={onEmailChange}
                error={fieldErrors.email}
              />
              <PasswordField
                value={formValue.password}
                onChange={onPasswordChange}
                error={fieldErrors.password}
              />
              <LoginButton isLoading={isLoading} />
            </Stack>
          </Paper>
        </Container>
      </Stack>
    </Paper>
  );
}
