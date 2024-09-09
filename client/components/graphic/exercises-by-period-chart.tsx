import React, { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { getWeeklyPoints } from "@/lib/getWeeklyPoints";
import { getMonthlyPoints } from "@/lib/getMonthlyPoints";
import { getYearlyPoints } from "@/lib/getYearlyPoints";

const timeFrameOptions = ["weekly", "monthly", "yearly"];

const dateModified = (dateStr: any) => {
  const date = new Date(dateStr);
  const options: any = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("tr-TR", options);
};

export const ExercisesByPeriodChart = ({ userDiaries }: any) => {
  const [timeFrame, setTimeFrame] = useState("weekly");

  const dataToDisplay = useMemo(() => {
    const dataFetchers: any = {
      weekly: getWeeklyPoints,
      monthly: getMonthlyPoints,
      yearly: getYearlyPoints,
    };
    return dataFetchers[timeFrame](userDiaries);
  }, [userDiaries, timeFrame]);

  const highestPointRecord = useMemo(() => {
    return [...dataToDisplay].sort((a, b) => b.point - a.point)[0] || {};
  }, [dataToDisplay]);

  const formattedDate = (dateStr: any) => {
    const formatted = dateModified(dateStr);
    switch (timeFrame) {
      case "weekly":
        return formatted.slice(0, 2);
      case "monthly":
        return formatted.slice(2, -4);
      case "yearly":
        return formatted.slice(-4);
      default:
        return "";
    }
  };
  return (
    <Card className="flex flex-col lg:max-w-md" x-chunk="charts-01-chunk-1">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
        <div className="flex flex-col items-start justify-center gap-4 space-y-0 pb-2">
          <div className="flex gap-4 space-y-0 pb-2">
            <div>
              <CardDescription>En Yüksek </CardDescription>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                {highestPointRecord.point || 0}
                <span className="text-sm font-normal tracking-normal text-muted-foreground">
                  puan
                </span>
              </CardTitle>
            </div>
            <div>
              <CardDescription>Tarih</CardDescription>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                {timeFrame === "yearly"
                  ? formattedDate(highestPointRecord.yearDate)
                  : formattedDate(highestPointRecord.date)}
                <span className="text-sm font-normal tracking-normal text-muted-foreground">
                  {timeFrame === "weekly"
                    ? dateModified(highestPointRecord.date).slice(2, -4)
                    : timeFrame === "monthly"
                    ? dateModified(highestPointRecord.date).slice(-4)
                    : ""}
                </span>
              </CardTitle>
            </div>
          </div>
          <div className="flex justify-end gap-2 mb-4">
            {timeFrameOptions.map((option) => (
              <div key={option}>
                <button
                  onClick={() => setTimeFrame(option)}
                  className={`btn ${timeFrame === option ? "btn-active " : ""}`}
                >
                  {option === "weekly"
                    ? "Haftalık"
                    : option === "monthly"
                    ? "Aylık"
                    : "Yıllık"}
                </button>
                <hr
                  className={` ${
                    timeFrame === option
                      ? "btn-active border border-b-orange-500"
                      : "border-none"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 items-center">
        <ChartContainer
          config={{
            resting: { label: "Resting", color: "hsl(var(--chart-1))" },
          }}
          className="w-full"
        >
          <LineChart width={650} data={dataToDisplay}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="hsl(var(--muted-foreground))"
              strokeOpacity={0.5}
            />
            <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
            <XAxis
              dataKey={
                timeFrame === "yearly"
                  ? "year"
                  : timeFrame === "monthly"
                  ? "month"
                  : "day"
              }
              padding={{ right: 8 }}
              interval={0}
              tickLine={false}
              axisLine={false}
              tickMargin={15}
              angle={
                timeFrame === "yearly" ? 0 : timeFrame === "monthly" ? -90 : -45
              }
              tickFormatter={(value) => value}
            />
            <Line
              dataKey="point"
              type="monotone"
              fill="var(--color-resting)"
              stroke="var(--color-resting)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                fill: "var(--color-resting)",
                stroke: "var(--color-resting)",
                r: 4,
              }}
            />
            <ChartTooltip
              content={<ChartTooltipContent indicator="dashed" />}
              cursor={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
