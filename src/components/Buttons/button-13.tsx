import { Button } from "@/components/ui/button"
import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { StarIcon } from "lucide-react"
type ButtonNeonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
}
const ButtonNeon = ({ className, size, ...props }: ButtonNeonProps) => (
  <Button
    className={cn(
      "bg-indigo-500 text-primary-foreground hover:bg-indigo-600 dark:text-foreground shadow-lg shadow-indigo-400 dark:shadow-indigo-700",
      className
    )}
    size={size}
    {...props}
  />
)

const NeonButtonDemo = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <ButtonNeon>Neon</ButtonNeon>
    <ButtonNeon size="icon">
      <StarIcon />
    </ButtonNeon>
    <ButtonNeon>
      <StarIcon /> Star
    </ButtonNeon>
  </div>
)

export default NeonButtonDemo
