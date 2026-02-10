"use client";

import React from "react";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";
import { Users } from "lucide-react";

type ProgramDatum = {
  name: string;
  value: number;
  color: string;
  legendClass: string;
};

const data: ProgramDatum[] = [
  {
    name: "Computer Science",
    value: 450,
    color: "#026892",
    legendClass: "text-primary-600",
  },
  {
    name: "Business Admin",
    value: 380,
    color: "#22c55e",
    legendClass: "text-green-600",
  },
  {
    name: "Engineering",
    value: 320,
    color: "#f59e0b",
    legendClass: "text-amber-600",
  },
  {
    name: "Medicine",
    value: 280,
    color: "#8b5cf6",
    legendClass: "text-purple-600",
  },
  {
    name: "Law",
    value: 190,
    color: "#ef4444",
    legendClass: "text-red-600",
  },
];

const RADIAN = Math.PI / 180;

function renderValueLabel(props: any) {
  const { cx, cy, midAngle, outerRadius, value, index } = props;

  const startRadius = outerRadius;
  const lineRadius = outerRadius + 10;
  const textRadius = outerRadius + 20;

  const sx = cx + startRadius * Math.cos(-midAngle * RADIAN);
  const sy = cy + startRadius * Math.sin(-midAngle * RADIAN);
  const mx = cx + lineRadius * Math.cos(-midAngle * RADIAN);
  const my = cy + lineRadius * Math.sin(-midAngle * RADIAN);
  const ex = cx + textRadius * Math.cos(-midAngle * RADIAN);
  const ey = cy + textRadius * Math.sin(-midAngle * RADIAN);

  const isRight = ex > cx;
  const textOffset = isRight ? 6 : -6;

  return (
    <g>
      <polyline
        points={`${sx},${sy} ${mx},${my} ${ex},${ey}`}
        stroke={data[index]?.color}
        strokeWidth={1}
        fill="none"
      />
      <text
        x={ex + textOffset}
        y={ey}
        textAnchor={isRight ? "start" : "end"}
        dominantBaseline="central"
        fill={data[index]?.color}
        fontSize={14}
        fontWeight={500}
      >
        {value}
      </text>
    </g>
  );
}

const ProgramDistribution: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 md:p-5 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4 text-primary-600" />
        <h2 className="text-base sm:text-lg md:text-[18px] font-bold text-gray-900 leading-tight">
          Program Distribution
        </h2>
      </div>

      <div className="mt-3 sm:mt-4 flex-1 flex flex-col">
        <div className="h-[180px] sm:h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label={renderValueLabel}
                labelLine={false}
                stroke="#ffffff"
                strokeWidth={2}
                isAnimationActive={false}
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-2 sm:mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className={item.legendClass}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramDistribution;
