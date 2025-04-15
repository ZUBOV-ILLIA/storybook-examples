export interface Product {
  name: string;
  screen: string;
  screen_type: string;
  processor: string;
  ram: string;
  storage: string;
  video_adapter: string;
  os: string;
  weight: string;
  price: string;
  img: string;
  slug: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    name: "Asus ROG Strix G814JV_G814JV",
    screen: "18\" IPS (2560x1600) WQXGA",
    screen_type: "матовый",
    processor: "Intel Core i9-13980HX (2.2 - 5.6 ГГц) / 24 - ядерный",
    ram: "64 ГБ (DDR5)",
    storage: "4 ТБ (SSD)",
    video_adapter: "NVidia GeForce RTX 4060, 8 ГБ GDDR6",
    os: "Windows 11 Prо",
    weight: "3.1 кг",
    price: '136 438 грн',
    img: '/images/1.webp',
    slug: 'asus-rog-strix-g814jv_g814jv',
    inStock: true
  },
  {
    name: "HP Omen 16-wd0072dx",
    screen: "16.1\" IPS (1920x1080) Full HD",
    screen_type: "антибликовый",
    processor: "Intel Core i7-13700HX (2.1 - 5.0 ГГц) / 16 - ядерный",
    ram: "32 ГБ (DDR5)",
    storage: "1 ТБ (SSD)",
    video_adapter: "NVidia GeForce RTX 4070, 8 ГБ GDDR6",
    os: "Windows 11 Home",
    weight: "2.4 кг",
    price: "99 999 грн",
    img: "/images/2.webp",
    slug: 'hp-omen-16-wd0072dx',
    inStock: true
  },
  {
    name: "Lenovo Legion 5 Pro 16IRX8",
    screen: "16\" IPS (2560x1600) WQXGA",
    screen_type: "матовый",
    processor: "Intel Core i7-13700H (2.4 - 5.0 ГГц) / 14 - ядерный",
    ram: "32 ГБ (DDR5)",
    storage: "2 ТБ (SSD)",
    video_adapter: "NVidia GeForce RTX 4060, 8 ГБ GDDR6",
    os: "Windows 11 Home",
    weight: "2.45 кг",
    price: "92 350 грн",
    img: "/images/3.webp",
    slug: 'lenovo-legion-5-pro-16irx8',
    inStock: true
  },
  {
    name: "Apple MacBook Pro 14 M3 Pro",
    screen: "14.2\" Liquid Retina XDR (3024x1964)",
    screen_type: "глянцевый",
    processor: "Apple M3 Pro (11‑ядерный CPU / 14‑ядерный GPU)",
    ram: "18 ГБ (Unified)",
    storage: "1 ТБ (SSD)",
    video_adapter: "Integrated Apple GPU",
    os: "macOS Sonoma",
    weight: "1.63 кг",
    price: "119 999 грн",
    img: "/images/4.webp",
    slug: 'apple-macbook-pro-14-m3-pro',
    inStock: true
  },
  {
    name: "Dell XPS 15 9530",
    screen: "15.6\" OLED (3456x2160) 3.5K",
    screen_type: "глянцевый",
    processor: "Intel Core i9-13900H (2.6 - 5.4 ГГц) / 14 - ядерный",
    ram: "32 ГБ (DDR5)",
    storage: "1 ТБ (SSD)",
    video_adapter: "NVidia GeForce RTX 4070, 8 ГБ GDDR6",
    os: "Windows 11 Pro",
    weight: "1.92 кг",
    price: "124 500 грн",
    img: "/images/5.webp",
    slug: 'dell-xps-15-9530',
    inStock: true
  },
  {
    name: "Acer Predator Helios 300",
    screen: "17.3\" IPS (1920x1080) Full HD 165 Гц",
    screen_type: "антибликовый",
    processor: "Intel Core i7-12700H (2.3 - 4.7 ГГц) / 14 - ядерный",
    ram: "16 ГБ (DDR5)",
    storage: "1 ТБ (SSD)",
    video_adapter: "NVidia GeForce RTX 3060, 6 ГБ GDDR6",
    os: "Windows 11 Home",
    weight: "2.9 кг",
    price: "76 250 грн",
    img: "/images/6.webp",
    slug: 'acer-predator-helios-300',
    inStock: true
  },
  {
    name: "MSI Stealth 14 Studio A13VG",
    screen: "14\" IPS (2560x1600) WQXGA+ 240 Гц",
    screen_type: "матовый",
    processor: "Intel Core i7-13620H (2.4 - 4.9 ГГц) / 10 - ядерный",
    ram: "32 ГБ (DDR5)",
    storage: "1 ТБ (SSD)",
    video_adapter: "NVidia GeForce RTX 4070, 8 ГБ GDDR6",
    os: "Windows 11 Pro",
    weight: "1.7 кг",
    price: "108 499 грн",
    img: "/images/7.webp",
    slug: 'msi-stealth-14-studio-a13vg',
    inStock: true
  },
  {
    name: "Gigabyte AORUS 17H BXF",
    screen: "17.3\" IPS (1920x1080) Full HD 360 Гц",
    screen_type: "антибликовый",
    processor: "Intel Core i9-13900HX (2.2 - 5.4 ГГц) / 24 - ядерный",
    ram: "32 ГБ (DDR5)",
    storage: "2 ТБ (SSD)",
    video_adapter: "NVidia GeForce RTX 4080, 12 ГБ GDDR6",
    os: "Windows 11 Home",
    weight: "2.9 кг",
    price: "142 700 грн",
    img: "/images/8.webp",
    slug: 'gigabyte-aorus-17h-bxg',
    inStock: true
  }
]; 