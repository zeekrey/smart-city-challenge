"use client";

import { StatusBar } from "@/components/status-bar";
import { Step } from "@/components/step";
import { StepsProvider } from "@/components/step-context-provider";
import { stepsConfig } from "@/lib/machine";

export default function StepPage() {
  return (
    <StepsProvider value={stepsConfig}>
      <StatusBar />
      <main className="flex flex-col sm:gap-12 min-h-dvh mx-auto max-w-3xl">
        {Object.entries(stepsConfig.steps).map(([id, step]) => (
          <Step id={step.id} key={id} step={step} />
        ))}
      </main>
    </StepsProvider>
  );
}
