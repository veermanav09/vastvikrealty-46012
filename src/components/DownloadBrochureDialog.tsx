import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, ArrowRight, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { z } from "zod";

interface DownloadBrochureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  projectId: number;
}

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  mobileNumber: z.string().trim().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().max(500, "Message must be less than 500 characters").optional(),
});

const DownloadBrochureDialog = ({ isOpen, onClose, projectName, projectId }: DownloadBrochureDialogProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState<"form" | "otp">("form");
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    message: "",
  });
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        variant: "destructive",
      });
      return;
    }

    // Simulate sending OTP
    toast({
      title: "OTP Sent!",
      description: `Verification code sent to ${formData.mobileNumber}`,
    });
    setStep("otp");
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    // Simulate OTP verification
    toast({
      title: "Success!",
      description: "OTP verified. Downloading brochure...",
    });

    // Trigger download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#';
      link.download = `${projectName}-Brochure.pdf`;
      link.click();
      
      toast({
        title: "Download Started",
        description: "Your brochure is downloading now",
      });

      // Reset and close
      setTimeout(() => {
        setStep("form");
        setFormData({
          fullName: "",
          mobileNumber: "",
          email: "",
          message: "",
        });
        setOtp("");
        setErrors({});
        onClose();
      }, 1000);
    }, 1000);
  };

  const handleClose = () => {
    setStep("form");
    setFormData({
      fullName: "",
      mobileNumber: "",
      email: "",
      message: "",
    });
    setOtp("");
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl p-0 gap-0">
        <div className="p-8 md:p-12">
          <DialogHeader className="relative">
            <DialogTitle className="font-heading font-bold text-4xl md:text-5xl mb-3">
              Download Brochure
            </DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground">
              Please share your basic details to download the file.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-10">
            {step === "form" ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <Label htmlFor="fullName" className="text-sm uppercase tracking-wider text-muted-foreground mb-3 block">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="h-14 text-base border-b-2 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                    />
                    {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <Label htmlFor="mobileNumber" className="text-sm uppercase tracking-wider text-muted-foreground mb-3 block">
                      Mobile Number
                    </Label>
                    <Input
                      id="mobileNumber"
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="h-14 text-base border-b-2 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                    />
                    {errors.mobileNumber && <p className="text-destructive text-sm mt-1">{errors.mobileNumber}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email ID */}
                  <div>
                    <Label htmlFor="email" className="text-sm uppercase tracking-wider text-muted-foreground mb-3 block">
                      Email ID
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-14 text-base border-b-2 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Write a Message */}
                  <div>
                    <Label htmlFor="message" className="text-sm uppercase tracking-wider text-muted-foreground mb-3 block">
                      Write a Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-14 text-base border-b-2 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary resize-none"
                      rows={1}
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-semibold uppercase tracking-wider"
                  >
                    Verify Via OTP
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-8">
                <div className="text-center">
                  <Download className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg mb-2">
                    We've sent a 6-digit verification code to
                  </p>
                  <p className="font-semibold text-foreground text-xl">
                    {formData.mobileNumber}
                  </p>
                </div>

                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                    <InputOTPGroup className="gap-3">
                      <InputOTPSlot index={0} className="w-14 h-14 text-xl" />
                      <InputOTPSlot index={1} className="w-14 h-14 text-xl" />
                      <InputOTPSlot index={2} className="w-14 h-14 text-xl" />
                      <InputOTPSlot index={3} className="w-14 h-14 text-xl" />
                      <InputOTPSlot index={4} className="w-14 h-14 text-xl" />
                      <InputOTPSlot index={5} className="w-14 h-14 text-xl" />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <div className="flex flex-col gap-4">
                  <Button
                    onClick={handleVerifyOTP}
                    className="w-full bg-primary hover:elevated-shadow transition-all duration-300 h-14 text-base font-semibold uppercase tracking-wider"
                    disabled={otp.length !== 6}
                  >
                    Verify & Download
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <Button
                    onClick={() => {
                      toast({
                        title: "OTP Resent",
                        description: "A new code has been sent to your phone",
                      });
                    }}
                    variant="ghost"
                    className="w-full"
                  >
                    Resend OTP
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadBrochureDialog;
