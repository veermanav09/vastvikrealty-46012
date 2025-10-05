import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const DownloadBrochure = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState<"form" | "otp">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [otp, setOtp] = useState("");

  const projects = [
    { id: 1, name: "ELEMENT" },
    { id: 2, name: "HIGH RISE" },
  ];

  const project = projects.find(p => p.id === parseInt(id || "1"));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate sending OTP
    toast({
      title: "OTP Sent!",
      description: "Please check your phone for the verification code",
    });
    setStep("otp");
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      toast({
        title: "Error",
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
      link.download = `${project?.name}-Brochure.pdf`;
      link.click();
      
      toast({
        title: "Download Started",
        description: "Your brochure is downloading now",
      });

      setTimeout(() => navigate(-1), 1500);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 bg-gradient-subtle min-h-screen">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <Button
            onClick={() => navigate(-1)}
            variant="ghost"
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="bg-card rounded-3xl p-8 md:p-12 card-shadow">
            <div className="text-center mb-8">
              <Download className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="font-heading font-bold text-4xl mb-2">Download Brochure</h1>
              <p className="text-muted-foreground text-lg">
                {project?.name} Project Brochure
              </p>
            </div>

            {step === "form" ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base mb-2 block">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base mb-2 block">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base mb-2 block">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:elevated-shadow transition-all duration-300 h-12 text-base"
                  size="lg"
                >
                  Send OTP
                </Button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    We've sent a 6-digit verification code to<br />
                    <span className="font-semibold text-foreground">{formData.phone}</span>
                  </p>
                </div>

                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <Button
                  onClick={handleVerifyOTP}
                  className="w-full bg-primary hover:elevated-shadow transition-all duration-300 h-12 text-base"
                  size="lg"
                  disabled={otp.length !== 6}
                >
                  Verify & Download
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
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DownloadBrochure;
