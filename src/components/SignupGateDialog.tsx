import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SignupGateDialog = ({
  open,
  onOpenChange,
  kind,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  kind: "quiz" | "flashcards";
}) => {
  const navigate = useNavigate();
  const noun = kind === "quiz" ? "questions" : "flashcards";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-3xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Sign up to keep going</DialogTitle>
          <DialogDescription className="text-base leading-relaxed pt-1">
            Guests can try 5 {noun} for free. Create an account to unlock the rest of this set.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col gap-2 sm:flex-col sm:space-x-0">
          <Button className="w-full h-12 rounded-xl text-base font-bold" onClick={() => navigate("/signup")}>
            Sign up
          </Button>
          <Button variant="outline" className="w-full h-12 rounded-xl text-base font-bold" onClick={() => navigate("/login")}>
            Log in
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignupGateDialog;
