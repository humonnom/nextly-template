"use client";
import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
    const navigation = [
        "Product",
        "Features",
        "Pricing",
        "Company",
        "Blog",
    ];

    return (
        <div className="w-full">
            <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
                {/* Logo */}
                {/* 로고 구현 */}

                {/* Get Started 버튼 */}
                {/* Get Started 버튼 구현 */}

                {/* 모바일 메뉴 */}
                {/* Disclosure 컴포넌트를 사용한 모바일 메뉴 구현 */}

                {/* 데스크탑 메뉴 */}
                {/* 데스크탑 메뉴 구현 */}
            </nav>
        </div>
    );
}