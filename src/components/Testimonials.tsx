import Image from "next/image";
import React from "react";
import {Container} from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
    return (
        <Container>
            <p className="">
                Share a real testimonial
                that hits some of your benefits from one of your popular customer.
            </p>
            <Avatar
                image={userOneImg}
                name="Sarah Steiner"
                title="VP Sales at Google"
            />
            <p className="">
                Make sure you only pick the right sentence
                to keep it short and simple.
            </p>
            <Avatar
                image={userTwoImg}
                name="Dylan Ambrose"
                title="Lead marketer at Netflix"
            />
            <p className="">
                This is an awesome landing page template I&apos;ve
                seen. I would use this for anything.
            </p>

            <Avatar
                image={userThreeImg}
                name="Gabrielle Winn"
                title="Co-founder of Acme Inc"
            />
        </Container>
    );
};

interface AvatarProps {
    image: any;
    name: string;
    title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
    return (
        <div className="">
            <div className="">
                <Image
                    src={props.image}
                    width="40"
                    height="40"
                    alt="Avatar"
                    placeholder="blur"
                />
            </div>
            <div>
                <div className="">{props.name}</div>
                <div className="">{props.title}</div>
            </div>
        </div>
    );
}