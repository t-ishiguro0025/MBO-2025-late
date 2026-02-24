import { describe, expect, it } from 'vitest';
import { loginSchema } from './loginSchema';

describe('loginSchema', () => {
  describe('email', () => {
    it('有効なメールアドレスはバリデーションを通過する', () => {
      const result = loginSchema.safeParse({
        email: 'study@example.com',
        password: 'password123',
      });
      expect(result.success).toBe(true);
    });

    it('空文字のとき「メールアドレスを入力してください」エラーになる', () => {
      const result = loginSchema.safeParse({
        email: '',
        password: 'password123',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        const emailErrors = result.error.flatten().fieldErrors.email;
        expect(emailErrors).toContain('メールアドレスを入力してください');
      }
    });

    it('メールアドレス形式でないとき「正しいメールアドレスを入力してください」エラーになる', () => {
      const result = loginSchema.safeParse({
        email: 'not-an-email',
        password: 'password123',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        const emailErrors = result.error.flatten().fieldErrors.email;
        expect(emailErrors).toContain('正しいメールアドレスを入力してください');
      }
    });

    it('空文字のとき「正しいメールアドレスを入力してください」エラーは出ない', () => {
      const result = loginSchema.safeParse({
        email: '',
        password: 'password123',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        const emailErrors = result.error.flatten().fieldErrors.email;
        expect(emailErrors).not.toContain('正しいメールアドレスを入力してください');
      }
    });
  });

  describe('password', () => {
    it('8文字以上のパスワードはバリデーションを通過する', () => {
      const result = loginSchema.safeParse({
        email: 'study@example.com',
        password: 'password123',
      });
      expect(result.success).toBe(true);
    });

    it('ちょうど8文字のパスワードはバリデーションを通過する', () => {
      const result = loginSchema.safeParse({
        email: 'study@example.com',
        password: '12345678',
      });
      expect(result.success).toBe(true);
    });

    it('空文字のとき「パスワードを入力してください」エラーになる', () => {
      const result = loginSchema.safeParse({
        email: 'study@example.com',
        password: '',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        const passwordErrors = result.error.flatten().fieldErrors.password;
        expect(passwordErrors).toContain('パスワードを入力してください');
      }
    });

    it('7文字以下のとき「パスワードは8文字以上で入力してください」エラーになる', () => {
      const result = loginSchema.safeParse({
        email: 'study@example.com',
        password: '1234567',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        const passwordErrors = result.error.flatten().fieldErrors.password;
        expect(passwordErrors).toContain('パスワードは8文字以上で入力してください');
      }
    });

    it('空文字のとき「パスワードは8文字以上で入力してください」エラーは出ない', () => {
      const result = loginSchema.safeParse({
        email: 'study@example.com',
        password: '',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        const passwordErrors = result.error.flatten().fieldErrors.password;
        expect(passwordErrors).not.toContain('パスワードは8文字以上で入力してください');
      }
    });
  });

  describe('複合チェック', () => {
    it('emailとpasswordの両方が不正なとき両方のエラーが返る', () => {
      const result = loginSchema.safeParse({
        email: '',
        password: '',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        const errors = result.error.flatten().fieldErrors;
        expect(errors.email).toBeDefined();
        expect(errors.password).toBeDefined();
      }
    });
  });
});
