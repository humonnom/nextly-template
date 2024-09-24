import React from "react";
import {Container} from "@/components/Container";

interface SectionTitleProps {
    preTitle?: string;
    title?: string;
    align?: "left" | "center";
    children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
    return (
        <Container className="">
            {props.preTitle}
            {props.title}
            {props.children}
        </Container>
    );
}

