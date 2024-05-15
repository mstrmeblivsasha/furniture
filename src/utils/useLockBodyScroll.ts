import { useEffect } from "react";

export function useLockBodyScroll(isOpen: boolean) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);
}
