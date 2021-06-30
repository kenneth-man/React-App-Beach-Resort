import { roomImages } from "./Images";

export const rooms = [
    {
        name: 'Single Basic',
        price: 149.99,
        image: `${roomImages[0]}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        size: 300,
        capacity: 1,
        pets: false,
        breakfast: false,
        extras: [
                    'Plush pillow and breathable bed linens',
                    'Soft, oversized bath towels',
                    'Complimentary refreshments',
                    'Adequate safety/security',
                    'Comfortable beds',
                    '24hr Food Ordering',
                    'Free Internet and Ethernet',
                    'Complimentary Toiletries'
                ]
    },
    {
        name: 'Single Standard',
        price: 159.99,
        image: `${roomImages[1]}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        size: 400,
        capacity: 1,
        pets: false,
        breakfast: true,
        extras: [
                    'Plush pillow and breathable bed linens',
                    'Soft, oversized bath towels',
                    'Complimentary refreshments',
                    'Adequate safety/security',
                    'Comfortable beds',
                    '24hr Food Ordering',
                    'Free Internet and Ethernet',
                    'Complimentary Toiletries'
                ]
    },
    {
        name: 'Single Economy',
        price: 169.99,
        image: `${roomImages[2]}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        size: 500,
        capacity: 1,
        pets: false,
        breakfast: true,
        extras: [
                    'Plush pillow and breathable bed linens',
                    'Soft, oversized bath towels',
                    'Complimentary refreshments',
                    'Adequate safety/security',
                    'Comfortable beds',
                    '24hr Food Ordering',
                    'Free Internet and Ethernet',
                    'Complimentary Toiletries'
                ]
    },
    {
        name: 'Single Deluxe',
        price: 179.99,
        image: `${roomImages[3]}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        size: 600,
        capacity: 1,
        pets: true,
        breakfast: true,
        extras: [
                    'Plush pillow and breathable bed linens',
                    'Soft, oversized bath towels',
                    'Complimentary refreshments',
                    'Adequate safety/security',
                    'Comfortable beds',
                    '24hr Food Ordering',
                    'Free Internet and Ethernet',
                    'Complimentary Toiletries'
                ]
    },
    {
        name: 'Double Basic',
        price: 189.99,
        image: `${roomImages[4]}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        size: 500,
        capacity: 2,
        pets: false,
        breakfast: false,
        extras: [
                    'Plush pillow and breathable bed linens',
                    'Soft, oversized bath towels',
                    'Complimentary refreshments',
                    'Adequate safety/security',
                    'Comfortable beds',
                    '24hr Food Ordering',
                    'Free Internet and Ethernet',
                    'Complimentary Toiletries'
                ]
    },
    {
        name: 'Double Standard',
        price: 199.99,
        image: `${roomImages[5]}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        size: 600,
        capacity: 2,
        pets: false,
        breakfast: true,
        extras: [
                    'Plush pillow and breathable bed linens',
                    'Soft, oversized bath towels',
                    'Complimentary refreshments',
                    'Adequate safety/security',
                    'Comfortable beds',
                    '24hr Food Ordering',
                    'Free Internet and Ethernet',
                    'Complimentary Toiletries'
                ]
    },
    {
        name: 'Double Economy',
        price: 1109.99,
        image: `${roomImages[6]}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        size: 700,
        capacity: 2,
        pets: false,
        breakfast: true,
        extras: [
                    'Plush pillow and breathable bed linens',
                    'Soft, oversized bath towels',
                    'Complimentary refreshments',
                    'Adequate safety/security',
                    'Comfortable beds',
                    '24hr Food Ordering',
                    'Free Internet and Ethernet',
                    'Complimentary Toiletries'
                ]
    },
    {
        name: 'Double Deluxe',
        price: 1119.99,
        image: `${roomImages[7]}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        size: 800,
        capacity: 2,
        pets: true,
        breakfast: true,
        extras: [
                    'Plush pillow and breathable bed linens',
                    'Soft, oversized bath towels',
                    'Complimentary refreshments',
                    'Adequate safety/security',
                    'Comfortable beds',
                    '24hr Food Ordering',
                    'Free Internet and Ethernet',
                    'Complimentary Toiletries'
                ]
    },
    {
        name: 'Family Basic',
        price: 1129.99,
        image: `${roomImages[8]}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        size: 900,
        capacity: 6,
        pets: false,
        breakfast: false,
        extras: [
                    'Plush pillow and breathable bed linens',
                    'Soft, oversized bath towels',
                    'Complimentary refreshments',
                    'Adequate safety/security',
                    'Comfortable beds',
                    '24hr Food Ordering',
                    'Free Internet and Ethernet',
                    'Complimentary Toiletries'
                ]
    },
    {
        name: 'Family Standard',
        price: 1139.99,
        image: `${roomImages[9]}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        size: 1100,
        capacity: 6,
        pets: false,
        breakfast: true,
        extras: [
                    'Plush pillow and breathable bed linens',
                    'Soft, oversized bath towels',
                    'Complimentary refreshments',
                    'Adequate safety/security',
                    'Comfortable beds',
                    '24hr Food Ordering',
                    'Free Internet and Ethernet',
                    'Complimentary Toiletries'
                ]
    },
    {
        name: 'Family Economy',
        price: 1149.99,
        image: `${roomImages[10]}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        size: 1300,
        capacity: 6,
        pets: false,
        breakfast: true,
        extras: [
                    'Plush pillow and breathable bed linens',
                    'Soft, oversized bath towels',
                    'Complimentary refreshments',
                    'Adequate safety/security',
                    'Comfortable beds',
                    '24hr Food Ordering',
                    'Free Internet and Ethernet',
                    'Complimentary Toiletries'
                ]
    },
    {
        name: 'Family Deluxe',
        price: 1159.99,
        image: `${roomImages[11]}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        size: 1500,
        capacity: 6,
        pets: true,
        breakfast: true,
        extras: [
                    'Plush pillow and breathable bed linens',
                    'Soft, oversized bath towels',
                    'Complimentary refreshments',
                    'Adequate safety/security',
                    'Comfortable beds',
                    '24hr Food Ordering',
                    'Free Internet and Ethernet',
                    'Complimentary Toiletries'
                ]
    },
];  