"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BarChart,
  BookOpen,
  Calendar,
  Download,
  Smile,
  Target,
  Zap,
  LogIn,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

export default function EnhancedMoodTrackerLanding() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <header
        className={`px-4 lg:px-6 h-16 flex items-center fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md"
            : ""
        }`}
      >
        <Link className="flex items-center justify-center" href="#">
          <Smile className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            MoodMaster
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#exercises"
          >
            Exercises
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#visualization"
          >
            Visualization
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#contact"
          >
            Contact
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Login to MoodMaster</DialogTitle>
                <DialogDescription>
                  Enter your email and password to access your account.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleLogin} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
              <div className="mt-4 text-center text-sm">
                <Link href="#" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Master Your Emotions with{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    MoodMaster
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Enhanced emotion tracking, personalized exercises, and
                  powerful insights to improve your mental well-being.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="animate-pulse">
                  Get Started Free
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
                <Target className="h-12 w-12 mb-2 text-primary" />
                <h3 className="text-xl font-bold">Personalized Exercises</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Access emotion regulation exercises tailored to your specific
                  needs and current emotional state.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
                <Zap className="h-12 w-12 mb-2 text-primary" />
                <h3 className="text-xl font-bold">Quick Access by Emotion</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Easily find and use exercises categorized by emotions like
                  anger, sadness, or anxiety.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
                <BookOpen className="h-12 w-12 mb-2 text-primary" />
                <h3 className="text-xl font-bold">Emotion Diary</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Keep a detailed diary of your emotions to track patterns and
                  progress over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="exercises"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Emotion-Specific Exercises
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our app offers a wide range of exercises tailored to specific
                  emotions. Whether you're dealing with anger, sadness, or
                  anxiety, we have tools to help you manage and understand your
                  feelings better.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Smile className="h-5 w-5 mr-2 text-primary" />
                    <span>Guided meditations for anxiety relief</span>
                  </li>
                  <li className="flex items-center">
                    <Smile className="h-5 w-5 mr-2 text-primary" />
                    <span>Breathing exercises for anger management</span>
                  </li>
                  <li className="flex items-center">
                    <Smile className="h-5 w-5 mr-2 text-primary" />
                    <span>Journaling prompts for processing sadness</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-4">
                  Explore Exercises <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="lg:pl-10">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Emotion exercises illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="visualization" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="lg:order-2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Powerful Data Visualization
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Gain deeper insights into your emotional patterns with our
                  advanced data visualization tools. Compare your mood trends
                  across months and years to identify long-term changes and
                  improvements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-primary" />
                    <span>Monthly emotion distribution charts</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-primary" />
                    <span>Yearly mood trend analysis</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-primary" />
                    <span>Emotion intensity heatmaps</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-4">
                  View Demo <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Data visualization example"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start Your Emotional Wellness Journey Today
                </h2>
                <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of users who have improved their emotional
                  well-being with MoodMaster. Create your profile and access our
                  enhanced features now.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-primary-foreground text-primary"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="shrink-0"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-primary-foreground/60">
                  Available on iOS and Android. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 MoodMaster. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
