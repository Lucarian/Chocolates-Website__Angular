import { Leader } from "./leader";

export const LEADERS: Leader[] = [
  {
    id: 0,
    name: 'Jimmy Falcon',
    image: '/assets/images/aft.png',
    designation: ' Chief Executive Officer ',
    abbr: 'CEO',
    featured: false,
    description: 'Jimmy Falcon is the CEO of our company. He is responsible for the policy and strategy of our company.'
  },
  {
    id: 1,
    name: 'Myriam Brownstone',
    image: '/assets/images/girl.jpg',
    designation: 'Chief Financial Officer ',
    abbr: 'CFO',
    featured: false,
    description: 'Myriam Brownstone is the CFO of our company. She is responsible for all the financial decisions of our company.'
  },
  {
    id: 2,
    name: 'Vasilis Cook',
    image: '/assets/images/cartoonVasilis.png',
    designation: 'Chef',
    abbr: 'Chef',
    featured: false,
    description: 'Our Chef, Vasilis Cook has specialized in the production of chocolates and he has created the receipts for our chocolates.'
  },
  {
    id: 3,
    name: 'George Mitronikas',
    image: '/assets/images/georgeMit.jpg',
    designation: 'Sous-chef',
    abbr: 'SC',
    featured: true,
    description: 'George Mitronikas is well informed of all the current trends in pastry and contributes his innovative ideas in our products.'
  }
];
