import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";

type SmartDialogProps = {
  /** Required SR-friendly name */
  title: string;
  /** Show title visually? default false */
  showTitle?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof Dialog>;

export default function SmartDialog({
  title,
  showTitle = false,
  className,
  children,
  ...props
}: SmartDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className={cn(className)}>
        <DialogHeader>
          {showTitle ? (
            <DialogTitle>{title}</DialogTitle>
          ) : (
            <VisuallyHidden asChild>
              <DialogTitle>{title}</DialogTitle>
            </VisuallyHidden>
          )}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}