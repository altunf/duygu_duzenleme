import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Button } from "../ui/button";

const filterDataByTimeFrame = (data: any, timeFrame: any) => {
  const today = new Date();
  let filteredData = [];

  if (timeFrame === "daily") {
    filteredData = data.filter((item: any) => {
      const date = new Date(item.date);
      return date.toDateString() === today.toDateString();
    });
  } else if (timeFrame === "monthly") {
    filteredData = data.filter((item: any) => {
      const date = new Date(item.date);
      return (
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    });
  } else if (timeFrame === "yearly") {
    filteredData = data.filter((item: any) => {
      const date = new Date(item.date);
      return date.getFullYear() === today.getFullYear();
    });
  }

  return filteredData;
};

export const ExercisesByPeriodChart = ({ userDiaries }: any) => {
  const [timeFrame, setTimeFrame] = useState("daily");

  console.log(userDiaries, "moods");

  const dataToDisplay = useMemo(
    () => filterDataByTimeFrame(userDiaries, timeFrame),
    [userDiaries, timeFrame]
  );

  console.log(dataToDisplay, "datasdads");

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
          <Button
            onClick={() => setTimeFrame("daily")}
            className={`btn ${timeFrame === "daily" && "btn-active"}`}
          >
            Günlük
          </Button>
          <Button
            onClick={() => setTimeFrame("monthly")}
            className={`btn ${timeFrame === "monthly" && "btn-active"}`}
          >
            Aylık
          </Button>
          <Button
            onClick={() => setTimeFrame("yearly")}
            className={`btn ${timeFrame === "yearly" && "btn-active"}`}
          >
            Yıllık
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 items-center">
        <ChartContainer
          config={{
            point: {
              label: "Point",
              color: "hsl(var(--chart-2))",
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
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("tr-TR", {
                  weekday: "short",
                });
              }}
            />
            <Line
              dataKey="point"
              type="natural"
              fill="var(--color-point)"
              stroke="var(--color-point)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                fill: "var(--color-point)",
                stroke: "var(--color-point)",
                r: 4,
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  indicator="line"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("tr-TR", {
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
