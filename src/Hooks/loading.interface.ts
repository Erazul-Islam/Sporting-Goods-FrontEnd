import { ReactNode } from "react";

export interface TLoadingComponentProps {
    initialLoading: boolean;
    delay: number;
    children: ReactNode;
}