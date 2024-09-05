import React from "react";
import {
  Bar,
  BarChart,
  Label,
  Rectangle,
  ReferenceLine,
  XAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components//ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components//ui/chart";

const chartConfig = {
  point: {
    label: "Point",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const CompletedExercisesChart = ({ moods }: any) => {
  let totalPoint = 0;
  for (let i = 0; i < moods.length; i++) {
    totalPoint += moods[i].point;
  }

  return (
    <Card className="lg:max-w-md" x-chunk="charts-01-chunk-0">
      <CardHeader className="space-y-0 pb-2">
        <CardDescription>Tamamlanan</CardDescription>
        <CardTitle className="text-4xl tabular-nums">
          {totalPoint}{" "}
          <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
            egzersiz
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            margin={{
              left: -4,
              right: -4,
            }}
            data={moods}
          >
            <Bar
              dataKey="point"
              fill="hsl(var(--chart-1))"
              radius={5}
              fillOpacity={0.6}
              activeBar={<Rectangle fillOpacity={0.8} />}
            />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
            />
            <ChartTooltip
              defaultIndex={2}
              content={<ChartTooltipContent />}
              cursor={false}
            />
            <ReferenceLine
              y={1200}
              stroke="hsl(var(--chart-1))"
              strokeDasharray="3 3"
              strokeWidth={1}
            >
              <Label
                position="insideBottomLeft"
                value="Average Steps"
                offset={10}
                fill="hsl(var(--foreground))"
              />
              <Label
                position="insideTopLeft"
                value="12,343"
                className="text-lg"
                fill="hsl(var(--foreground))"
                offset={10}
                startOffset={100}
              />
            </ReferenceLine>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <CardDescription>
          Over the past 7 days, you have walked{" "}
          <span className="font-medium text-foreground">53,305</span> steps.
        </CardDescription>
        <CardDescription>
          You need <span className="font-medium text-foreground">12,584</span>{" "}
          more steps to reach your goal.
        </CardDescription>
      </CardFooter>
    </Card>
  );
};
