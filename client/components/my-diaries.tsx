import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, NotebookPen } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";

interface Diary {
  title: string;
  mood: string;
  point: number;
  date: string;
  text: string;
}

const fetchDiaries = async () => {
  const response = await fetch("http://localhost:3001/diaries");
  const data = await response.json();
  return data;
};

export function MyDiaries() {
  const [userDiaries, setUserDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    const getDiaries = async () => {
      const userDiaries = await fetchDiaries();
      setUserDiaries(userDiaries);
    };
    getDiaries();
  }, []);

  const SavedDiary: any = ({ props }: any) => {
    return (
      <TableRow>
        <TableCell className="hidden sm:table-cell">
          <NotebookPen />
        </TableCell>
        <TableCell className="font-medium">{props.title}</TableCell>
        <TableCell>
          <Badge variant="outline">{props.mood}</Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell">{props.point}</TableCell>
        <TableCell className="hidden md:table-cell">{props.date}</TableCell>
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Card x-chunk="dashboard-06-chunk-0">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Günlük Adı</TableHead>
                <TableHead>Duygu</TableHead>
                <TableHead className="hidden md:table-cell">Puan</TableHead>
                <TableHead className="hidden md:table-cell">Tarih</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userDiaries.map((el: Diary, index: number) => {
                return <SavedDiary key={index} props={el} />;
              })}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
