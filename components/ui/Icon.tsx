import { LucideIcon } from "lucide-react";

interface IconProps {
  Icon: LucideIcon;
  size?: number;
  color?: string;
  className?: string;
}

export function Icon({
  Icon,
  size = 24,
  color = "currentColor",
  className = "",
}: IconProps) {
  return <Icon className={className} size={size} style={{ color }} />;
}
