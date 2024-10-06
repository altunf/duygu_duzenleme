"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export function ExerciseCard({ props, maxLength = 100, token }: any) {
  const { toast } = useToast();
  const [isTruncated, setIsTruncated] = useState(true);
  const router = useRouter();

  const toggleTruncate = () => setIsTruncated(!isTruncated);

  const handleClick = async () => {
    try {
      const userID = JSON.parse(atob(token.split(".")[1])).userId;
      const currentDate = new Date().toISOString();
      const { _id, title, mood } = props;

      const response = await fetch("http://localhost:3001/exercises", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Current-User": userID,
        },
        body: JSON.stringify({
          exerciseId: _id,
          title,
          mood: mood[0],
          date: currentDate,
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch tasks");

      await response.json();
      toast({
        variant: "default",
        title: "Egzersiz listenize eklendi",
      });
    } catch (error) {
      console.error("Veri alınırken bir hata oluştu:", error);
    }
  };

  const handleRead = () => {
    router.push(
      `/exercises/${props?.mood?.[0]}/${encodeURIComponent(props?._id)}`
    );
  };

  const cardImage = (() => {
    switch (props?.title.toLowerCase()) {
      case "nefes egzersizi":
        return "nefes-egzersizi.png";
      case "aşamalı kas gevşetme":
        return "kas-gevsetme.png";
      case "dikkat dağıtma teknikleri":
        return "dikkati-dagıtma.png";
      case "bilişsel yeniden yapılandırma":
        return "yeniden-yapilandirma.png";
      default:
        return "kas-gevsetme.png";
    }
  })();

  return (
    <Card className="flex flex-col justify-center items-center transition-shadow duration-300 hover:shadow-lg border-none w-96  dark:hover:shadow-gray-900 ">
      <div className="rounded-lg overflow-hidden w-full ">
        <CardHeader className="p-0 relative group">
          <Image
            src={`/${cardImage}`}
            alt={props?.title}
            width={500}
            height={256}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <Badge className="absolute top-2 right-2 bg-violet-400 text-black capitalize">
            # {props?.mood?.[0]}
          </Badge>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-gray-800 capitalize dark:text-white">
              {props?.title}
            </h2>
          </div>
          <p className="text-gray-700 leading-tight mb-4 flex flex-col items-center justify-start dark:text-white">
            {isTruncated
              ? props?.description.slice(0, maxLength) + "..."
              : props?.description}
            <button onClick={toggleTruncate} className="text-blue-500 ml-1">
              {isTruncated ? "Read More" : "Read Less"}
            </button>
          </p>
          <div className="flex justify-between items-center">
            <span className="text-gray-800  dark:text-white font-semibold">
              Fırat Altun
            </span>
            <span className="text-gray-600">
              <Badge className=" top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                <span>{props?.views || 0}</span>
              </Badge>
            </span>
          </div>
          <div className="flex justify-between mt-4">
            <Button onClick={handleRead} variant="outline">
              Oku
            </Button>
            <Button onClick={handleClick} variant="outline">
              Listeme ekle
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
