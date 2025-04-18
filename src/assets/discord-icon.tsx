import { SVGProps, Ref, forwardRef } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M18.894 4.344A17.409 17.409 0 0 0 14.532 3c-.192.33-.406.779-.555 1.13a16.677 16.677 0 0 0-4.833 0c-.15-.351-.373-.8-.555-1.13a17.162 17.162 0 0 0-4.363 1.344C1.463 8.419.716 12.397 1.09 16.323A17.782 17.782 0 0 0 6.435 19a13 13 0 0 0 1.14-1.845 11.182 11.182 0 0 1-1.802-.864c.15-.107.299-.224.438-.342 3.477 1.59 7.243 1.59 10.678 0 .15.118.288.235.437.342a11.18 11.18 0 0 1-1.802.864A13 13 0 0 0 16.665 19a17.684 17.684 0 0 0 5.345-2.677c.459-4.544-.726-8.491-3.116-11.979ZM8.056 13.901c-1.045 0-1.899-.949-1.899-2.112 0-1.162.832-2.112 1.899-2.112 1.056 0 1.92.95 1.899 2.112 0 1.163-.843 2.112-1.9 2.112Zm7.009 0c-1.045 0-1.9-.949-1.9-2.112 0-1.162.833-2.112 1.9-2.112 1.056 0 1.92.95 1.899 2.112 0 1.163-.832 2.112-1.899 2.112Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
ForwardRef.displayName = "Discord";
export default ForwardRef;
