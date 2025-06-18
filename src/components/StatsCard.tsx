import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  description: string;
  trend?: "up" | "down" | "stable";
  trendValue?: string;
}

const StatsCard = ({
  title,
  value,
  icon,
  description,
  trend,
  trendValue,
}: StatsCardProps) => {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return "TrendingUp";
      case "down":
        return "TrendingDown";
      default:
        return "Minus";
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Card className="academic-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon name={icon as any} className="text-blue-600" size={20} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="flex items-center space-x-2">
          <p className="text-xs text-gray-600">{description}</p>
          {trend && trendValue && (
            <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
              <Icon name={getTrendIcon() as any} size={12} />
              <span className="text-xs font-medium">{trendValue}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
