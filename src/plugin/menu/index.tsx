// // import * as React from "react";
// import { forwardRef } from "preact/hooks";

// import {
//   useFloating,
//   offset,
//   flip,
//   shift,
//   useListNavigation,
//   useHover,
//   useTypeahead,
//   useInteractions,
//   useRole,
//   useClick,
//   useDismiss,
//   autoUpdate,
//   safePolygon,
//   FloatingPortal,
//   useFloatingTree,
//   useFloatingNodeId,
//   useFloatingParentNodeId,
//   useMergeRefs,
//   FloatingNode,
//   FloatingTree,
//   FloatingFocusManager
// } from "@floating-ui/react";

// interface MenuItemProps {
//   label: string;
//   disabled?: boolean;
// }

// export const MenuItem = React.forwardRef<
//   HTMLButtonElement,
//   MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
// >(({ label, disabled, ...props }, ref) => {
//   return (
//     <button
//       type="button"
//       {...props}
//       ref={ref}
//       role="menuitem"
//       disabled={disabled}
//     >
//       {label}
//     </button>
//   );
// });

// interface MenuProps {
//   label: string;
//   nested?: boolean;
//   children?: React.ReactNode;
// }

// export const MenuComponent = React.forwardRef<
//   HTMLButtonElement,
//   MenuProps & React.HTMLProps<HTMLButtonElement>
// >(({ children, label, ...props }, forwardedRef) => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
//   const [allowHover, setAllowHover] = React.useState(false);

//   const listItemsRef = React.useRef<Array<HTMLButtonElement | null>>([]);
//   const listContentRef = React.useRef(
//     React.Children.map(children, (child) =>
//       React.isValidElement(child) ? child.props.label : null
//     ) as Array<string | null>
//   );

//   const tree = useFloatingTree();
//   const nodeId = useFloatingNodeId();
//   const parentId = useFloatingParentNodeId();
//   const isNested = parentId != null;

//   const { refs, floatingStyles, context } = useFloating<HTMLButtonElement>({
//     nodeId,
//     open: isOpen,
//     onOpenChange: setIsOpen,
//     placement: isNested ? "right-start" : "bottom-start",
//     middleware: [
//       offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }),
//       flip(),
//       shift()
//     ],
//     whileElementsMounted: autoUpdate
//   });

//   const hover = useHover(context, {
//     enabled: isNested && allowHover,
//     delay: { open: 75 },
//     handleClose: safePolygon({
//       blockPointerEvents: true
//     })
//   });
//   const click = useClick(context, {
//     event: "mousedown",
//     toggle: !isNested || !allowHover,
//     ignoreMouse: isNested
//   });
//   const role = useRole(context, { role: "menu" });
//   const dismiss = useDismiss(context);
//   const listNavigation = useListNavigation(context, {
//     listRef: listItemsRef,
//     activeIndex,
//     nested: isNested,
//     onNavigate: setActiveIndex
//   });
//   const typeahead = useTypeahead(context, {
//     enabled: isOpen,
//     listRef: listContentRef,
//     onMatch: isOpen ? setActiveIndex : undefined,
//     activeIndex
//   });

//   const {
//     getReferenceProps,
//     getFloatingProps,
//     getItemProps
//   } = useInteractions([hover, click, role, dismiss, listNavigation, typeahead]);

//   // Event emitter allows you to communicate across tree components.
//   // This effect closes all menus when an item gets clicked anywhere
//   // in the tree.
//   React.useEffect(() => {
//     if (!tree) return;

//     function handleTreeClick() {
//       setIsOpen(false);
//     }

//     function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
//       if (event.nodeId !== nodeId && event.parentId === parentId) {
//         setIsOpen(false);
//       }
//     }

//     tree.events.on("click", handleTreeClick);
//     tree.events.on("menuopen", onSubMenuOpen);

//     return () => {
//       tree.events.off("click", handleTreeClick);
//       tree.events.off("menuopen", onSubMenuOpen);
//     };
//   }, [tree, nodeId, parentId]);

//   React.useEffect(() => {
//     if (isOpen && tree) {
//       tree.events.emit("menuopen", { parentId, nodeId });
//     }
//   }, [tree, isOpen, nodeId, parentId]);

//   // Determine if "hover" logic can run based on the modality of input. This
//   // prevents unwanted focus synchronization as menus open and close with
//   // keyboard navigation and the cursor is resting on the menu.
//   React.useEffect(() => {
//     function onPointerMove({ pointerType }: PointerEvent) {
//       if (pointerType !== "touch") {
//         setAllowHover(true);
//       }
//     }

//     function onKeyDown() {
//       setAllowHover(false);
//     }

//     window.addEventListener("pointermove", onPointerMove, {
//       once: true,
//       capture: true
//     });
//     window.addEventListener("keydown", onKeyDown, true);
//     return () => {
//       window.removeEventListener("pointermove", onPointerMove, {
//         capture: true
//       });
//       window.removeEventListener("keydown", onKeyDown, true);
//     };
//   }, [allowHover]);

//   const referenceRef = useMergeRefs([refs.setReference, forwardedRef]);

//   return (
//     <FloatingNode id={nodeId}>
//       <button
//         ref={referenceRef}
//         data-open={isOpen ? "" : undefined}
//         {...getReferenceProps({
//           ...props,
//           className: `${isNested ? "MenuItem" : "RootMenu"}`,
//           onClick(event) {
//             event.stopPropagation();
//           },
//           ...(isNested && {
//             // Indicates this is a nested <Menu /> acting as a <MenuItem />.
//             role: "menuitem"
//           })
//         })}
//       >
//         {label}{" "}
//         {isNested && (
//           <span aria-hidden style={{ marginLeft: 10 }}>
//             ➔
//           </span>
//         )}
//       </button>
//       <FloatingPortal>
//         {isOpen && (
//           <FloatingFocusManager
//             context={context}
//             // Prevent outside content interference.
//             modal={false}
//             // Only initially focus the root floating menu.
//             initialFocus={isNested ? -1 : 0}
//             // Only return focus to the root menu's reference when menus close.
//             returnFocus={!isNested}
//           >
//             <div
//               ref={refs.setFloating}
//               className="Menu"
//               style={floatingStyles}
//               {...getFloatingProps()}
//             >
//               {React.Children.map(
//                 children,
//                 (child, index) =>
//                   React.isValidElement(child) &&
//                   React.cloneElement(
//                     child,
//                     getItemProps({
//                       tabIndex: activeIndex === index ? 0 : -1,
//                       className: "MenuItem",
//                       ref(node: HTMLButtonElement) {
//                         listItemsRef.current[index] = node;
//                       },
//                       onClick(event) {
//                         child.props.onClick?.(event);
//                         tree?.events.emit("click");
//                       },
//                       // Allow focus synchronization if the cursor did not move.
//                       onMouseEnter() {
//                         if (allowHover && isOpen) {
//                           setActiveIndex(index);
//                         }
//                       }
//                     })
//                   )
//               )}
//             </div>
//           </FloatingFocusManager>
//         )}
//       </FloatingPortal>
//     </FloatingNode>
//   );
// });

// export const Menu = React.forwardRef<
//   HTMLButtonElement,
//   MenuProps & React.HTMLProps<HTMLButtonElement>
// >((props, ref) => {
//   const parentId = useFloatingParentNodeId();

//   if (parentId === null) {
//     return (
//       <FloatingTree>
//         <MenuComponent {...props} ref={ref} />
//       </FloatingTree>
//     );
//   }

//   return <MenuComponent {...props} ref={ref} />;
// });
export {}
