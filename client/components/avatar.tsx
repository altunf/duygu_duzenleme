import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="pp.jpeg" alt="@altunf" />
      <AvatarFallback>FA</AvatarFallback>
    </Avatar>
  );
}
