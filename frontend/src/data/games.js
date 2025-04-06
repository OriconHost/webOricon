import {
    Shield,
    Zap,
    Wifi,
    LayoutDashboard,
    Cpu,
    MemoryStick,
    HardDrive,
    Plug,
    Database
} from "lucide-react";

import minecraftHeroImage from '../assets/minecraft-hero-image.png';
import minecraftBottomImage from '../assets/minecraft-bottom-image.png';
import minecraftSideImage from '../assets/minecraft-side-image.png';

import rustHeroImage from '../assets/rust-hero-image.png';
import rustBottomImage from '../assets/rust-bottom-image.png';
import rustSideImage from '../assets/rust-side-image.png';

export const games = [
    {
        id: "minecraft",
        name: "Minecraft",
        description: "Создавай свой Minecraft-сервер за считанные минуты. Минимальный пинг, 24/7 поддержка и удобная панель управления, мгновенный запуск, DDoS-защита, 7-дневный пробный период!",
        heroImage: minecraftHeroImage,
        bottomImage: minecraftBottomImage,
        sideImage: minecraftSideImage,
        features: [
            {
                iconFeature: Shield,
                iconColor: "text-[#2466F4]",
                nameFeature: "DDoS-защита"
            },
            {
                iconFeature: Zap,
                iconColor: "text-[#2466F4]",
                nameFeature: "Мгновенная настройка"
            },
            {
                iconFeature: Wifi ,
                iconColor: "text-[#2466F4]",
                nameFeature: "Стабильный пинг"
            },
            {
                iconFeature: LayoutDashboard,
                iconColor: "text-[#2466F4]",
                nameFeature: "Гибкая конфигурация"
            },
        ],
        ctaButtons:[
            {
                ctaText: "Бесплатный 7-дневный тариф",
                ctaTextColor: "text-white",
                ctaColor: "bg-[#2466F4]"
            },
            {
                ctaText: "Начать настройку",
                ctaTextColor: "text-[#1C1917]",
                ctaColor: "bg-white"
            }
        ],
        plans:[
            {
                cpuLogo: Cpu,
                cpu: 0.5,
                ramLogo: MemoryStick,
                ram: 2,
                storageLogo: HardDrive,
                storage: 12,
                portLogo: Plug,
                port: 3,
                databaseLogo: Database,
                database: 0,
            },
            {
                cpuLogo: Cpu,
                cpu: 5,
                ramLogo: MemoryStick,
                ram: 4,
                storageLogo: HardDrive,
                storage: 24,
                portLogo: Plug,
                port: 10,
                databaseLogo: Database,
                database: 3,
                status: "popular",
            },
        ],
        freePlans:[
            {
                cpuLogo: Cpu,
                cpu: 999,
                ramLogo: MemoryStick,
                ram: 2,
                storageLogo: HardDrive,
                storage: 12,
                portLogo: Plug,
                port: 3,
                databaseLogo: Database,
                database: 0,
                status: "free",
            },
            {
                cpuLogo: Cpu,
                cpu: 999,
                ramLogo: MemoryStick,
                ram: 4,
                storageLogo: HardDrive,
                storage: 24,
                portLogo: Plug,
                port: 10,
                databaseLogo: Database,
                database: 3,
                status: "boost",
            },
        ]
    },
    {
        id: "rust",
        name: "Rust",
        description: "Создавай свой Rust-сервер за считанные минуты. Минимальный пинг, 24/7 поддержка и удобная панель управления, мгновенный запуск, DDoS-защита, 7-дневный пробный период!",
        heroImage: rustHeroImage,
        bottomImage: rustBottomImage,
        sideImage: rustSideImage,
        features: [
            {
                iconFeature: Shield,
                iconColor: "text-[#2466F4]",
                nameFeature: "DDoS-защита"
            },
            {
                iconFeature: Zap,
                iconColor: "text-[#2466F4]",
                nameFeature: "Мгновенная настройка"
            },
            {
                iconFeature: Wifi ,
                iconColor: "text-[#2466F4]",
                nameFeature: "Стабильный пинг"
            },
            {
                iconFeature: LayoutDashboard,
                iconColor: "text-[#2466F4]",
                nameFeature: "Гибкая конфигурация"
            },
        ],
        ctaButtons:[
            {
                ctaText: "Начать настройку",
                ctaTextColor: "text-white",
                ctaColor: "bg-[#2466F4]"
            }
        ],
        plans:[
            {
                cpuLogo: Cpu,
                cpu: 0.5,
                ramLogo: MemoryStick,
                ram: 2,
                storageLogo: HardDrive,
                storage: 12,
                portLogo: Plug,
                port: 3,
                databaseLogo: Database,
                database: 0,
            },
            {
                cpuLogo: Cpu,
                cpu: 5,
                ramLogo: MemoryStick,
                ram: 4,
                storageLogo: HardDrive,
                storage: 24,
                portLogo: Plug,
                port: 10,
                databaseLogo: Database,
                database: 3,
                status: "popular",
            },
        ],
        freePlans:[
        ]
    },
];