import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { latestPopupPost, updateDismissKey } from "@/data/updates";

type UpdatesPopupProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const UpdatesPopup = ({ open: controlledOpen, onOpenChange }: UpdatesPopupProps) => {
  const post = latestPopupPost();
  const [autoOpen, setAutoOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? Boolean(controlledOpen) : autoOpen;

  const setOpen = (next: boolean) => {
    if (!next && post) {
      window.localStorage.setItem(updateDismissKey(post.id), "1");
    }
    if (isControlled) onOpenChange?.(next);
    else setAutoOpen(next);
  };

  useEffect(() => {
    if (isControlled || !post) return;
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(updateDismissKey(post.id))) return;
    const timer = window.setTimeout(() => setAutoOpen(true), 1600);
    return () => window.clearTimeout(timer);
  }, [isControlled, post]);

  if (!post) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="rounded-3xl sm:max-w-md">
        <DialogHeader className="space-y-3">
          <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <Newspaper size={20} />
          </div>
          <DialogTitle className="text-2xl">{post.title}</DialogTitle>
          <DialogDescription className="text-base leading-relaxed">
            {post.excerpt}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col gap-2 sm:flex-col sm:space-x-0">
          <Button asChild className="w-full h-12 rounded-xl font-bold" onClick={() => setOpen(false)}>
            <Link to={`/updates#${post.id}`}>Read update</Link>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full h-12 rounded-xl font-bold"
            onClick={() => setOpen(false)}
          >
            Not now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatesPopup;
