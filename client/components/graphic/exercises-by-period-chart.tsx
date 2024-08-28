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

import { getWeeklyPoints } from "@/lib/getWeeklyPoints.js";
import { getMonthlyPoints } from "@/lib/getMonthlyPoints.js";
import { getYearlyPoints } from "@/lib/getYearlyPoints.js";

export const ExercisesByPeriodChart = ({ userDiaries }: any) => {
  const [timeFrame, setTimeFrame] = useState("weekly"); // for buttons

  const dataToDisplay = useMemo(() => {
    switch (timeFrame) {
      case "weekly":
        return getWeeklyPoints(userDiaries);
      case "monthly":
        return getMonthlyPoints(userDiaries);
      case "yearly":
        return getYearlyPoints(userDiaries);
      default:
        return [];
    }
  }, [userDiaries, timeFrame]);

  return (
    <Card className="flex flex-col lg:max-w-md" x-chunk="charts-01-chunk-1">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
        <div>
          <CardDescription>Resting HR</CardDescription>
          <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
            62
            <span className="text-sm font-normal tracking-normal text-muted-foreground">
              bpm
            </span>
          </CardTitle>
        </div>
        <div>
          <CardDescription>Variability</CardDescription>
          <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
            35
            <span className="text-sm font-normal tracking-normal text-muted-foreground">
              ms
            </span>
          </CardTitle>
        </div>
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={() => setTimeFrame("weekly")}
            className={`btn ${timeFrame === "weekly" && "btn-active"}`}
          >
            Haftalık
          </button>
          <button
            onClick={() => setTimeFrame("monthly")}
            className={`btn ${timeFrame === "monthly" && "btn-active"}`}
          >
            Aylık
          </button>
          <button
            onClick={() => setTimeFrame("yearly")}
            className={`btn ${timeFrame === "yearly" && "btn-active"}`}
          >
            Yıllık
          </button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 items-center">
        <ChartContainer
          config={{
            resting: {
              label: "Resting",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="w-full"
        >
          <LineChart
            accessibilityLayer
            margin={{
              left: 14,
              right: 14,
              top: 10,
            }}
            data={dataToDisplay}
          >
            <CartesianGrid
              strokeDasharray="4 4"
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
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                if (timeFrame === "yearly") {
                  return value;
                }
                if (timeFrame === "monthly") {
                  return value;
                }
                if (timeFrame === "weekly") {
                  return value;
                }
                return value;
              }}
            />
            <Line
              dataKey="point"
              type="natural"
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
              content={
                <ChartTooltipContent
                  indicator="line"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    });
                  }}
                />
              }
              cursor={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
