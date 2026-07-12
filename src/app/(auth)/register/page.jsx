import AuthForm from "@/components/auth/AuthForm";

export const metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return <AuthForm mode="register" />;
}