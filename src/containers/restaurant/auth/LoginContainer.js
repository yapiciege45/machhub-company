"use client";
import { LoginComponent } from "@/components/restaurant/auth/LoginComponent";
import { getRestaurant } from "@/hooks/restaurant/getRestaurant";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const LoginContainer = ({ slug }) => {
  const router = useRouter();

  const [restaurant, setRestaurant] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const domain = window.location.hostname;
    getRestaurant(slug, domain).then((x) => {
      setRestaurant(x);
    });
  }, []);

  async function login() {
    const res = await fetch(`${process.env.API_URL}/api/customer/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.status != "success") {
      toast.error(data.message);
    } else {
      localStorage.setItem("token", data.token);
      toast.success(data.message);
      router.push(`/r/${slug}`);
    }
  }

  if (restaurant) {
    return (
      <LoginComponent
        restaurant={restaurant}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        login={login}
      />
    );
  }
};
