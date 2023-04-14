import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from "@/lib";

const headingVariants = cva(
  'text-black dark:text-white text-center lb:text-left font-extrabold leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-4x1 md:text-5x1 lg:text-6x1',
        lg: 'text-5x1 md:text-6x1 lg:text-7x1',
        sm: 'text-2x1 md:text-3x1 lg:text-4x1'
      }
    }, 
    defaultVariants: {
      size: 'default'
    }
  }
)

interface LargeHeadingProps extends HTMLAttributes<HTMLHeadingElement>,
 VariantProps<typeof headingVariants> {

 }

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(({
  className, size, children, ...props
}, ref) => {
  return (
    <h1 ref={ref} {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  )
})

LargeHeading.displayName='LargeHeading' // we do that because we are using a forwardRef 

export default LargeHeading