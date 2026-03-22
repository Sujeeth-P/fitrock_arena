import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FloatingDock } from '../ui/floating-dock';
import {
    IconHome,
    IconInfoCircle,
    IconMountain,
    IconBuildingBridge2,
    IconMail,
} from '@tabler/icons-react';
import './Navbar.css';

const DOCK_LINKS = [
    {
        title: 'FitRock Arena',
        icon: (
            <img
                src="/fitrock_arena/images/fitrock.png"
                alt="FitRock Arena"
                className="h-full w-full object-contain"

            />
        ),
        href: '/',
    },
    {
        title: 'Home',
        icon: <IconHome className="h-full w-full text-neutral-300" />,
        href: '/',
    },
    {
        title: 'About',
        icon: <IconInfoCircle className="h-full w-full text-neutral-300" />,
        href: '/about',
    },
    {
        title: 'Climbing',
        icon: <IconMountain className="h-full w-full text-neutral-300" />,
        href: '/climbing',
    },
    {
        title: 'Construction',
        icon: <IconBuildingBridge2 className="h-full w-full text-neutral-300" />,
        href: '/construction',
    },
    {
        title: 'Contact',
        icon: <IconMail className="h-full w-full text-neutral-300" />,
        href: '/contact',
    },
    // {
    //     title: 'Get in Touch',
    //     icon: (
    //         <span className="navbar__dock-cta-icon">
    //             <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                 <path d="M5 12h14M12 5l7 7-7 7" />
    //             </svg>
    //         </span>
    //     ),
    //     href: '/contact',
    // },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();

    const isCollapsed = scrolled && !isHovered;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
            <div className="navbar__inner container">
                {/* Unified Floating Dock with logo + nav + CTA */}
                <motion.div
                    className="navbar__dock"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    layout
                    initial={false}
                    animate={{
                        left: scrolled ? 24 : '50%',
                        x: scrolled ? 0 : '-50%',
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                    style={{
                        position: 'absolute',
                        top: '40%',
                        // display: 'flex',
                    }}
                >
                    <FloatingDock
                        items={DOCK_LINKS}
                        desktopClassName={`navbar__dock-desktop ${isCollapsed ? 'navbar__dock-desktop--collapsed' : ''}`}
                        mobileClassName="navbar__dock-mobile"
                        collapsed={isCollapsed}
                    />
                </motion.div>
            </div>
        </nav>
    );
}
