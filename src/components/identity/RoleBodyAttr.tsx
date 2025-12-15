"use client";

import { useEffect } from "react";
import { useRoleStore } from "@/store/roleStore";

export function RoleBodyAttr() {
    const role = useRoleStore((s) => s.role);

    useEffect(() => {
        document.body.dataset.role = role;
        return () => {
            // optional cleanup
            delete document.body.dataset.role;
        };
    }, [role]);

    return null;
}
