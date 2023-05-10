import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

type Props = {};

export default function UserButton({}: Props) {
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="/images/avatars/avatar-1.jpg" />
          <AvatarFallback delayMs={600}>
            <User />
          </AvatarFallback>
        </Avatar>
        <h1 className="ml-2 font-semibold">Shadman Shakib</h1>
      </div>
    </div>
  );
}
