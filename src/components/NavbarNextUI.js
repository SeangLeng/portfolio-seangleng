'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavbarNextUI() {
    const router = useRouter();
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];
    const linkPersonal = [
        {
            icon: <FaGithub />,
            link: 'https://github.com/SeangLeng'
        },
        {
            icon: <FaFacebook />,
            link: 'https://www.facebook.com/profile.php?id=100086488516436'
        },
        {
            icon: <FaLinkedin />,
            link: 'https://www.linkedin.com/in/seng-seang-leng-1a3785250/'
        }
    ]
    const manu = [
        {
            label: "Home",
            link: '/'
        },
        {
            label: 'About',
            link: '/about'
        },
        {
            label: 'Service',
            link: '/service'
        },
        {
            label: 'Contact',
            link: '/contact'
        }
    ]

    return (
        <>
            

        </>
    );
}
