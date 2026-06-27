import { useAuthStore } from "@/src/shared/stores/auth.store";
import { LoginFooter, LoginForm, LoginHeader, Wrapper } from "../../components";

export default function Login() {
  const user = useAuthStore((state) => state.user);
  return (
    <Wrapper>
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </Wrapper>
  );
}
