
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle,
  XCircle,
  Clock,
  ChevronRight,
  User,
} from "lucide-react";

const Approvals = () => {
  const { toast } = useToast();

  const mockBills = [
    {
      id: 1,
      billNumber: "BILL-2023-001",
      vendor: "Tech Solutions Inc.",
      amount: 15000,
      currentStage: 4,
      totalStages: 9,
      status: "pending",
    },
    {
      id: 2,
      billNumber: "BILL-2023-002",
      vendor: "Office Supplies Co.",
      amount: 2500,
      currentStage: 7,
      totalStages: 9,
      status: "pending",
    },
    {
      id: 3,
      billNumber: "BILL-2023-003",
      vendor: "Marketing Services Ltd.",
      amount: 8750,
      currentStage: 9,
      totalStages: 9,
      status: "approved",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-5 w-5 text-approval-approved" />;
      case "rejected":
        return <XCircle className="h-5 w-5 text-approval-rejected" />;
      default:
        return <Clock className="h-5 w-5 text-approval-pending" />;
    }
  };

  const handleAction = (billId: number, action: "approve" | "reject") => {
    toast({
      title: `Bill ${action}ed`,
      description: `Bill #${billId} has been ${action}ed successfully.`,
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Approvals</h2>
        <p className="text-muted-foreground mt-2">
          Manage and track bill approvals through their journey.
        </p>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          {mockBills.map((bill) => (
            <div
              key={bill.id}
              className="bg-white rounded-lg border p-6 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  {getStatusIcon(bill.status)}
                  <div>
                    <h3 className="font-semibold">{bill.billNumber}</h3>
                    <p className="text-sm text-muted-foreground">
                      {bill.vendor}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ${bill.amount.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Stage {bill.currentStage} of {bill.totalStages}
                  </p>
                </div>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-between">
                  {[...Array(bill.totalStages)].map((_, index) => (
                    <div
                      key={index}
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        index < bill.currentStage
                          ? "bg-primary text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      <User className="w-3 h-3" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() =>
                    toast({
                      title: "View Details",
                      description: `Viewing details for ${bill.billNumber}`,
                    })
                  }
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </Button>

                {bill.status === "pending" && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="text-approval-rejected hover:text-approval-rejected"
                      onClick={() => handleAction(bill.id, "reject")}
                    >
                      Reject
                    </Button>
                    <Button
                      className="bg-approval-approved hover:bg-approval-approved/90"
                      onClick={() => handleAction(bill.id, "approve")}
                    >
                      Approve
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Approvals;
