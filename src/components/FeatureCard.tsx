import { Feature } from "@/lib/types";
import React from "react";
import { FilePenIcon } from "./icons/FilePen";
import { TagIcon } from "./icons/TagIcon";
import { TimerIcon } from "./icons/TimerIcon";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="bg-zinc-800 rounded-lg p-6 flex flex-col items-start">
      {feature.icon === "FilePenIcon" && (
        <FilePenIcon className="h-8 w-8 mb-4" />
      )}
      {feature.icon === "TagIcon" && <TagIcon className="h-8 w-8 mb-4" />}
      {feature.icon === "TimerIcon" && <TimerIcon className="h-8 w-8 mb-4" />}
      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
      <p className="text-zinc-400 mb-4">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
