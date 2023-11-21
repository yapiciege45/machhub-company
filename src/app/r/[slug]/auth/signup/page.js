import { SignupContainer } from "@/containers/restaurant/auth/SignupContainer";

export default function Signup({ params }) {
  return <SignupContainer slug={params.slug} />;
}
