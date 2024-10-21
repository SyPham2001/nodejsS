export enum UserVerifyStatus {
  Unverified, // chưa xác thực email , mặc định = 0
  Verified, // Đã xác thực email
  Banned // bị khóa
}

export enum TokenType {
  AccessToken,
  RefreshToken,
  ForgotPasswordToken,
  EmailVerifyToken
}
