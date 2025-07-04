import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface SupervisionApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupervisionApplicationModal = ({ isOpen, onClose }: SupervisionApplicationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    associate_no: "",
    hours_completed: "",
    bio: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, we'll just show the toast without actually storing to Supabase
    // The user will need to connect Supabase for actual data storage
    
    setTimeout(() => {
      toast({
        title: "Application Submitted!",
        description: "Thanks! We'll reach out within 3 business days.",
      });
      setIsSubmitting(false);
      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        associate_no: "",
        hours_completed: "",
        bio: ""
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Clinical Supervision Application</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="program">University/Program *</Label>
              <Input
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="associate_no">Associate # & State</Label>
              <Input
                id="associate_no"
                name="associate_no"
                value={formData.associate_no}
                onChange={handleChange}
                placeholder="e.g., AMFT #12345 CA"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hours_completed">Hours Completed</Label>
              <Input
                id="hours_completed"
                name="hours_completed"
                value={formData.hours_completed}
                onChange={handleChange}
                placeholder="e.g., 250 direct client hours"
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="bio">Short Bio</Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about your clinical interests, goals, and what you're looking for in supervision..."
              className="mt-1 min-h-[100px]"
            />
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Resume Upload:</strong> Please email your resume to brigette@example.com after submitting this form.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="cta" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SupervisionApplicationModal;