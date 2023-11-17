// data.ts

export interface CardData {
  icon: string
  title: string
  desc: string
  link: string
  linkDesc: string
}

export const data: CardData[] = [
  {
    icon: 'path-to-icon1',
    title: 'City Exploration',
    desc: 'Find the most amazing places to visit in your city.',
    link: 'explore-link1',
    linkDesc: 'Explore Now',
  },
  {
    icon: 'path-to-icon2',
    title: 'Shop Owners',
    desc: 'Create your store and showcase your products.',
    link: 'create-store-link',
    linkDesc: 'Create Store',
  },
  {
    icon: 'path-to-icon3',
    title: 'Food Bloggers',
    desc: 'Share your food journey with the world.',
    link: 'blog-link',
    linkDesc: 'Start Blogging',
  },
  {
    icon: 'path-to-icon4',
    title: 'Chat Platform',
    desc: 'Connect with like-minded people.',
    link: 'chat-link',
    linkDesc: 'Join Chat',
  },
]
