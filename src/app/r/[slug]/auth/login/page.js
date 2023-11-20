import { LoginContainer } from "@/containers/restaurant/auth/LoginContainer";

export default function Login({ params }) {
  console.log(params);
  return <LoginContainer slug={params.slug} />;
}
