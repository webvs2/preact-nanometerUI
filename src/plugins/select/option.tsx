// function option(){
//     return <>
//       <FloatingPortal>
//           <FloatingFocusManager context={context} modal={false}>
//             <div
//               ref={refs.setFloating}
//               class={`optionBox`}
//               style={{
//                 ...floatingStyles,
//               }}
//               {...getFloatingProps()}
//             >
//               {options.map((value, i) => (
//                 <div
//                   key={value}
//                   ref={(node) => {
//                     listRef.current[i] = node;
//                   }}
//                   role="option"
//                   tabIndex={i === activeIndex ? 0 : -1}
//                   aria-selected={i === selectedIndex && i === activeIndex}
            
                  
//                   class={ `${i === activeIndex?'present': ""} usual` }
//                   {...getItemProps({
//                     // Handle pointer select.
//                     onClick() {
//                       handleSelect(i);
//                     },
//                     // Handle keyboard select.
//                     onKeyDown(event) {
//                       if (event.key === "Enter") {
//                         event.preventDefault();
//                         handleSelect(i);
//                       }

//                       if (event.key === " " && !isTypingRef.current) {
//                         event.preventDefault();
//                         handleSelect(i);
//                       }
//                     },
//                   })}
//                 >
//                   {value}
//                   <span
//                     aria-hidden
//                     style={{
//                       position: "absolute",
//                       right: 10,
//                     }}
//                   >
//                     {i === selectedIndex ? " ✓" : ""}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </FloatingFocusManager>
//         </FloatingPortal></>
// }
export {}