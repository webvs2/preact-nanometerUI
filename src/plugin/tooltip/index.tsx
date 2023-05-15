import { useState, useRef } from "preact/hooks";
import { trim } from "lodash-es";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  FloatingArrow,
  useTransitionStyles,
  autoPlacement,
  arrow,
} from "@floating-ui/react";

import "./style.scss";


interface tooltipProps {
  value?: string | number;
  children: any;
}

function Tooltip(props: tooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "right",

    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      autoPlacement(),
      arrow({
        element: arrowRef,
      }),
      flip({
        fallbackAxisSideDirection: "start",
      }),
      shift(),
    ],
  });
  const { isMounted, styles } = useTransitionStyles(context);
  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <div
        class={`na-tooltip`}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {props.children}
      </div>
      <FloatingPortal>
        {isOpen && (
          <div
            className="Tooltip"
            ref={refs.setFloating}
            style={{ ...floatingStyles, ...styles }}
            {...getFloatingProps()}
          >
            {/* staticOffset='end' */}
            <FloatingArrow
              fill="#4B5563"
              ref={arrowRef}
              context={context}
            ></FloatingArrow>
            <span>{props.value}</span>
          </div>
        )}
      </FloatingPortal>
    </>
  );
}
export default Tooltip;
