
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { FileText, CheckCircle, XCircle, Clock } from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();

  const stats = [
    {
      label: "Total Bills",
      value: "145",
      icon: FileText,
      color: "text-primary",
    },
    {
      label: "Approved",
      value: "89",
      icon: CheckCircle,
      color: "text-approval-approved",
    },
    {
      label: "Rejected",
      value: "12",
      icon: XCircle,
      color: "text-approval-rejected",
    },
    {
      label: "Pending",
      value: "44",
      icon: Clock,
      color: "text-approval-pending",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card
            key={stat.label}
            className="p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
            onClick={() => {
              toast({
                title: stat.label,
                description: `Viewing details for ${stat.label.toLowerCase()}`,
              });
            }}
          >
            <div className="flex items-center gap-4">
              <div className={`${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Bills</h3>
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <FileText className="h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="font-medium">Bill #{2023001 + index}</p>
                  <p className="text-sm text-muted-foreground">
                    Submitted on Nov {15 + index}, 2023
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-sm bg-approval-pending/20 text-approval-pending">
                  Stage {index + 1}/9
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
