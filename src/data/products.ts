export interface Product {
  id: string;
  name: string;
  category: 'smart-board' | 'accessories' | 'software';
  sizes: string[];
  description: string;
  features: string[];
  specs: {
    resolution: string;
    touchPoints: string;
    system: string;
    display: string;
  };
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 'qeoyo-smart-board-65',
    name: 'QEOYO Smart Board 65"',
    category: 'smart-board',
    sizes: ['65"'],
    description: 'Interactive smart panel untuk ruang meeting dan kelas dengan fitur all-in-one yang menggabungkan komputer, whiteboard, proyektor, dan TV dalam satu perangkat.',
    features: [
      '4K UHD Display dengan 1.07B warna',
      'Multi-touch hingga 20 titik sentuh',
      'Dual System: Android 13 & Windows',
      'Built-in Camera & Microphone',
      'Wireless Screen Mirroring',
      'Anti-glare screen technology'
    ],
    specs: {
      resolution: '4K UHD (3840 x 2160)',
      touchPoints: '20 Points',
      system: 'Android 13 + Windows 10/11 (Optional)',
      display: 'D-LED, 60Hz'
    },
    image: '/products/qeoyo-board.jpg',
    badge: 'Best Seller'
  },
  {
    id: 'qeoyo-smart-board-75',
    name: 'QEOYO Smart Board 75"',
    category: 'smart-board',
    sizes: ['75"'],
    description: 'Panel interaktif berukuran lebih besar untuk ruangan meeting menengah hingga besar, dilengkapi dengan fitur kolaborasi canggih.',
    features: [
      '4K UHD Display dengan 1.07B warna',
      'Multi-touch hingga 20 titik sentuh',
      'Dual System: Android 13 & Windows',
      'Built-in Camera & Microphone',
      'QR Code Meeting Minutes',
      'E-share collaboration'
    ],
    specs: {
      resolution: '4K UHD (3840 x 2160)',
      touchPoints: '20 Points',
      system: 'Android 13 + Windows 10/11 (Optional)',
      display: 'D-LED, 60Hz'
    },
    image: '/products/qeoyo-board.jpg',
    badge: 'Popular'
  },
  {
    id: 'qeoyo-smart-board-85',
    name: 'QEOYO Smart Board 85"',
    category: 'smart-board',
    sizes: ['85"'],
    description: 'Panel interaktif premium untuk auditorium, ruang konferensi besar, dan aula dengan kualitas tampilan terbaik.',
    features: [
      '4K UHD Display dengan 1.07B warna',
      'Multi-touch hingga 20 titik sentuh',
      'Dual System: Android 13 & Windows',
      '48MP AI Camera with Auto-framing',
      '8 Array Microphones (10m pickup)',
      'Welcome Bulletin Board'
    ],
    specs: {
      resolution: '4K UHD (3840 x 2160)',
      touchPoints: '20 Points',
      system: 'Android 13 + Windows 10/11 (Optional)',
      display: 'D-LED, 60Hz'
    },
    image: '/products/qeoyo-board.jpg',
    badge: 'Premium'
  },
  {
    id: 'qeoyo-smart-board-98',
    name: 'QEOYO Smart Board 98"',
    category: 'smart-board',
    sizes: ['98"'],
    description: 'Panel interaktif terbesar untuk ruangan sangat besar, stadium, atau pusat konvensi dengan visibilitas maksimal.',
    features: [
      '4K UHD Display dengan 1.07B warna',
      'Multi-touch hingga 20 titik sentuh',
      'Dual System: Android 13 & Windows',
      '48MP AI Camera with Auto-framing',
      '8 Array Microphones (10m pickup)',
      'Ultra-wide 101° angle camera'
    ],
    specs: {
      resolution: '4K UHD (3840 x 2160)',
      touchPoints: '20 Points',
      system: 'Android 13 + Windows 10/11 (Optional)',
      display: 'D-LED, 60Hz'
    },
    image: '/products/qeoyo-board.jpg',
    badge: 'Enterprise'
  },
  {
    id: 'mobile-stand',
    name: 'Mobile Stand Premium',
    category: 'accessories',
    sizes: ['Universal'],
    description: 'Stand mobile premium untuk semua ukuran QEOYO Smart Board, dengan roda yang dapat dikunci untuk mobilitas maksimal.',
    features: [
      'Heavy-duty construction',
      'Height adjustable',
      'Lockable caster wheels',
      'Cable management system',
      'Compatible with 55"-98"'
    ],
    specs: {
      resolution: 'N/A',
      touchPoints: 'N/A',
      system: 'N/A',
      display: 'N/A'
    },
    image: '/products/features.jpg'
  },
  {
    id: 'stylus-pen',
    name: 'Active Stylus Pen 4096',
    category: 'accessories',
    sizes: ['Universal'],
    description: 'Stylus pen dengan 4096 tingkat sensitivitas tekanan untuk pengalaman menulis dan menggambar yang presisi.',
    features: [
      '4096 pressure levels',
      'Palm rejection',
      'USB-C charging',
      'Replaceable tips',
      '50 hours battery life'
    ],
    specs: {
      resolution: 'N/A',
      touchPoints: '4096 Levels',
      system: 'Compatible with all QEOYO',
      display: 'N/A'
    },
    image: '/products/features.jpg'
  }
];

export const categories = [
  { id: 'all', name: 'Semua Produk' },
  { id: 'smart-board', name: 'Smart Board' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'software', name: 'Software' }
];
