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
        heroImage: "https://i.imgur.com/XeCM31s.png",
        bottomImage: "https://i.imgur.com/nbe2b9f.png",
        sideImage: "https://i.imgur.com/6YQa9nT.png",
        features: [
            {
                iconFeature: 1,
                iconColor: "bg-[#2466F4]",
                nameFeature: "DDoS-защита"
            },
            {
                iconFeature: 1,
                iconColor: "bg-[#2466F4]",
                nameFeature: "Мгновенная настройка"
            },
            {
                iconFeature: 1,
                iconColor: "bg-[#2466F4]",
                nameFeature: "Стабильный пинг"
            },
            {
                iconFeature: 1,
                iconColor: "bg-[#2466F4]",
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
                cpuLogo: "cpu-1",
                cpu: "50% CPU",
                ramLogo: "ram-1",
                ram: "2GB RAM",
                storageLogo: "storage-1",
                storage: "12GB SSD",
                portLogo: "port-1",
                port: 3,
                databaseLogo: "database-1",
                database: 0,
            },
            {
                cpuLogo: "cpu-1",
                cpu: "200% CPU",
                ramLogo: "ram-1",
                ram: "4GB RAM",
                storageLogo: "storage-1",
                storage: "24GB SSD",
                portLogo: "port-1",
                port: 10,
                databaseLogo: "database-1",
                database: 3,
            },
        ]
    },
];