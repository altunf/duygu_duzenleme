import React from "react";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import { ChartContainer } from "../ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const TopThreeMoodsChart = ({ topThreeMoods }: any) => {
  return (
    <Card className="max-w-xs" x-chunk="charts-01-chunk-5">
      <CardHeader className="p-4 pb-0">
        <CardTitle> En Çok tamamlanan Egzersizler</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4 p-4">
        <div className="grid items-center gap-2">
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-sm text-muted-foreground capitalize">
              {topThreeMoods[0]?.name}
            </div>
            <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
              {topThreeMoods[0]?.point}
              <span className="text-sm font-normal text-muted-foreground">
                egzersiz
              </span>
            </div>
          </div>
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-sm text-muted-foreground capitalize">
              {" "}
              {topThreeMoods[1]?.name}
            </div>
            <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
              {topThreeMoods[1]?.point}
              <span className="text-sm font-normal text-muted-foreground">
                egzersiz
              </span>
            </div>
          </div>
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-sm text-muted-foreground capitalize">
              {" "}
              {topThreeMoods[2]?.name}
            </div>
            <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
              {topThreeMoods[2]?.point}
              <span className="text-sm font-normal text-muted-foreground">
                egzersiz
              </span>
            </div>
          </div>
        </div>
        <ChartContainer
          config={{
            move: {
              label: `${topThreeMoods[0]?.name}`,
              color: "hsl(var(--chart-1))",
            },
            exercise: {
              label: `${topThreeMoods[1]?.name}`,
              color: "hsl(var(--chart-2))",
            },
            stand: {
              label: `${topThreeMoods[2]?.name}`,
              color: "hsl(var(--chart-3))",
            },
          }}
          className="mx-auto aspect-square w-full max-w-[80%]"
        >
          <RadialBarChart
            margin={{
              left: -10,
              right: -10,
              top: -10,
              bottom: -10,
            }}
            data={[
              {
                activity: "stand",
                value: topThreeMoods[2]?.point,
                fill: "var(--color-stand)",
              },
              {
                activity: "exercise",
                value: topThreeMoods[1]?.point,
                fill: "var(--color-exercise)",
              },
              {
                activity: "move",
                value: topThreeMoods[0]?.point,
                fill: "var(--color-move)",
              },
            ]}
            innerRadius="20%"
            barSize={24}
            startAngle={90}
            endAngle={450}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              dataKey="value"
              tick={false}
            />
            <RadialBar dataKey="value" background cornerRadius={5} />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
