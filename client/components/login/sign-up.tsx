"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

export function SignUpForm() {
  const [registerData, setRegisterData] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });
    // const data = await response.json();

    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center py-12">
      <form onSubmit={handleSubmit}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Kayıt Ol</CardTitle>
            <CardDescription>
              Hesap oluşturmak için bilgilerinizi girin
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Ad</Label>
                  <Input
                    id="name"
                    name="name"
                    value={registerData.name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="surname">Soyad</Label>
                  <Input
                    id="surname"
                    name="surname"
                    value={registerData.surname}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Kullanıcı adı</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={registerData.username}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={onChange}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Şifre</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={onChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Hesap oluştur
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Zaten hesabın var mı?{" "}
              <Link href="/login" className="underline">
                Giriş yap
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
