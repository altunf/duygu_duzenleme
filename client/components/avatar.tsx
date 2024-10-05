import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar className="h-20 w-20">
      <AvatarImage src="pp.jpeg" alt="@altunf" />
      <AvatarFallback>FA</AvatarFallback>
    </Avatar>
  );
}
