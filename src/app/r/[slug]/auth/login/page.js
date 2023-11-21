import { LoginContainer } from "@/containers/restaurant/auth/LoginContainer";

export default function Login({ params }) {
  return <LoginContainer slug={params.slug} />;
}
