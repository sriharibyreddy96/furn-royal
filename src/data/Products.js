import bedImage1 from '../assets/Royal_Furn_Beds/1.jpg';
import bedImage2 from '../assets/Royal_Furn_Beds/2.jpg';
import bedImage3 from '../assets/Royal_Furn_Beds/3.jpg';
import bedImage4 from '../assets/Royal_Furn_Beds/4.jpg';
import bedImage5 from '../assets/Royal_Furn_Beds/5.jpg';
import bedImage6 from '../assets/Royal_Furn_Beds/6.jpg';
import bedImage7 from '../assets/Royal_Furn_Beds/7.jpg';
import bedImage8 from '../assets/Royal_Furn_Beds/8.jpg';
import bedImage9 from '../assets/Royal_Furn_Beds/9.jpg';
import bedImage10 from '../assets/Royal_Furn_Beds/10.jpg';
import bedImage11 from '../assets/Royal_Furn_Beds/11.jpg';
import bedImage12 from '../assets/Royal_Furn_Beds/12.jpg';
import bedImage13 from '../assets/Royal_Furn_Beds/13.jpg';
import bedImage14 from '../assets/Royal_Furn_Beds/14.jpg';
import bedImage15 from '../assets/Royal_Furn_Beds/15.jpg';
import bedImage16 from '../assets/Royal_Furn_Beds/16.jpg';
import bedImage17 from '../assets/Royal_Furn_Beds/17.jpg';

import sofaImage1 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_.jpg';
import sofaImage2 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_1.jpg';
import sofaImage3 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_2.jpg';
import sofaImage4 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_3.jpg';
import sofaImage5 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_4.jpg';
import sofaImage6 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_5.jpg';
import sofaImage7 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_6.jpg';
import sofaImage8 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_7.jpg';
import sofaImage9 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_8.jpg';
import sofaImage10 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_9.jpg';
import sofaImage11 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_10.jpg';
import sofaImage12 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_11.jpg';
import sofaImage13 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_12.jpg';
import sofaImage14 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_13.jpg';
import sofaImage15 from '../assets/Royal_Furn_Sofas/Five_Seating_Sofa_14.jpg';

import sofaImage16 from '../assets/Royal_Furn_Sofas/Sofa_bed_2.jpg';
import sofaImage17 from '../assets/Royal_Furn_Sofas/Single_Sofa_1.jpg';
import sofaImage18 from '../assets/Royal_Furn_Sofas/Single_Sofa_2.jpg';
import sofaImage19 from '../assets/Royal_Furn_Sofas/Single_Sofa_3.jpg';
import sofaImage20 from '../assets/Royal_Furn_Sofas/Sofa_bed_1.jpg';

import chairImage1 from '../assets/Royal_Furn_Tables/Big_Table_1.jpg';
import chairImage2 from '../assets/Royal_Furn_Tables/Big_Table_2.jpg';
import chairImage3 from '../assets/Royal_Furn_Tables/Big_Table_3.jpg';
import chairImage4 from '../assets/Royal_Furn_Tables/Big_Table_4.jpg';
import chairImage6 from '../assets/Royal_Furn_Tables/Big_Table_5.jpg';
import chairImage7 from '../assets/Royal_Furn_Tables/Big_Table_6.jpg';
import chairImage8 from '../assets/Royal_Furn_Tables/Big_Table_7.jpg';
import chairImage9 from '../assets/Royal_Furn_Tables/Big_Table_8.jpg';

import chairImage10 from '../assets/Royal_Furn_Tables/Small_Table_1.jpg';
import chairImage11 from '../assets/Royal_Furn_Tables/Small_Table_2.jpg';
import chairImage12 from '../assets/Royal_Furn_Tables/Small_Table_3.jpg';
import chairImage13 from '../assets/Royal_Furn_Tables/Small_Table_4.jpg';
import chairImage14 from '../assets/Royal_Furn_Tables/Small_Table_1.jpg';
import chairImage15 from '../assets/Royal_Furn_Tables/Small_Table_1.jpg';
import chairImage16 from '../assets/Royal_Furn_Tables/Small_Table_1.jpg';
import chairImage17 from '../assets/Royal_Furn_Tables/Small_Table_1.jpg';

const products = [
  {
    id: 1,
    title: "Modern Sofa",
    image: sofaImage1,
    price: 500,
    category: "sofa",
    subcategory: "5seating",
    description: "A sleek, contemporary sofa designed for smaller spaces, offering comfort and style. Perfect for cozy living rooms.",
    size: "Height: 35 inches, Width: 60 inches, Depth: 30 inches",
    popular: true,
  },
  {
    id: 2,
    title: "Luxury Sofa",
    image: sofaImage2,
    price: 800,
    category: "sofa",
    subcategory: "5seating",
    description: "A premium, plush sofa offering luxury comfort and elegance. Ideal for larger living spaces with style and support.",
    size: "Height: 36 inches, Width: 84 inches, Depth: 32 inches",
    popular: true,
  },
  {
    id: 3,
    title: "Banquet Table ",
    image: chairImage1,
    price: 150,
    category: "dining",
    subcategory: "big",
    description: "A comfortable Table designed for long at the desk, featuring ergonomic support and adjustable height.",
    size: "Height: 42 inches, Width: 22 inches, Depth: 22 inches",
    popular: false,
  },
  {
    id: 4,
    title: "Dining Table",
    image: chairImage2,
    price: 120,
    category: "dining",
    subcategory: "big",
    description: "A stylish dining chair with a sleek wooden frame, offering comfort and support for family meals.",
    size: "Height: 40 inches, Width: 18 inches, Depth: 18 inches",
    popular: false,
  },
  {
    id: 5,
    title: "Wooden Bed",
    image: bedImage1,
    price: 600,
    category: "bed",
    subcategory: "doublecot",
    description: "A sturdy and elegant wooden bed frame that adds a rustic touch to any bedroom. Built to last with classic design.",
    size: "Length: 75 inches, Width: 60 inches, Height: 35 inches",
    popular: true,
  },
  {
    id: 6,
    title: "Queen Size Bed",
    image: bedImage2,
    price: 1000,
    category: "bed",
    subcategory: "doublecot",
    description: "A luxurious queen-size bed designed for ultimate comfort with high-quality wood and craftsmanship.",
    size: "Length: 80 inches, Width: 60 inches, Height: 40 inches",
    popular: true,
  },
  {
    id: 7,
    title: "Luxury Sofa Set",
    image: sofaImage3,
    price: 1200,
    category: "sofa",
    subcategory: "5seating",
    description: "An expansive luxury sofa set perfect for large families, featuring soft cushions and a sophisticated design.",
    size: "Height: 35 inches, Width: 96 inches, Depth: 40 inches",
    popular: false,
  },
  {
    id: 8,
    title: "Compact Table",
    image: chairImage3,
    price: 180,
    category: "dining",
    subcategory: "big",
    description: "A stylish dining Table with a sleek wooden frame, offering comfort and support for family meals.",
    size: "Height: 38 inches, Width: 22 inches, Depth: 22 inches",
    popular: true,
  },
  {
    id: 9,
    title: "Recliner Sofa",
    image: sofaImage4,
    price: 950,
    category: "sofa",
    subcategory: "5seating",
    description: "A recliner sofa with adjustable seating, perfect for relaxing after a long day. A must-have for comfort lovers.",
    size: "Height: 38 inches, Width: 85 inches, Depth: 35 inches",
    popular: true,
  },
  {
    id: 10,
    title: "Dining Set",
    image: chairImage4,
    price: 220,
    category: "dining",
    subcategory: "big",
    description: " A complete set of dining furniture, including the table and matching chairs.",
    size: "Height: 44 inches, Width: 24 inches, Depth: 22 inches",
    popular: false,
  },
  {
    id: 11,
    title: "King Size Bed",
    image: bedImage3,
    price: 1500,
    category: "bed",
    subcategory: "doublecot",
    description: "A luxurious king-size bed with an elegant upholstered frame, designed for a lavish bedroom experience.",
    size: "Length: 84 inches, Width: 76 inches, Height: 45 inches",
    popular: true,
  },
  {
    id: 12,
    title: "Single Bed",
    image: bedImage4,
    price: 350,
    category: "bed",
    subcategory: "singlecot",
    description: "A compact and comfortable single bed, perfect for small bedrooms or guest rooms.",
    size: "Length: 75 inches, Width: 38 inches, Height: 35 inches",
    popular: false,
  },
  {
    id: 13,
    title: "Modern Sofa Bed",
    image: sofaImage5,
    price: 850,
    category: "sofa",
    subcategory: "5seating",
    description: "A versatile modern sofa that easily converts into a bed, ideal for multifunctional spaces.",
    size: "Height: 34 inches, Width: 75 inches, Depth: 32 inches",
    popular: true,
  },
  {
    id: 14,
    title: "Ergonomic Table",
    image: chairImage6,
    price: 250,
    category: "dining",
    subcategory: "big",
    description: "An ergonomic Table designed to provide optimal back support for all-day comfort.",
    size: "Height: 42 inches, Width: 24 inches, Depth: 24 inches",
    popular: true,
  },
  {
    id: 15,
    title: "Contemporary Bed",
    image: bedImage5,
    price: 700,
    category: "bed",
    subcategory: "doublecot",
    description: "A sleek contemporary bed frame that combines style with functionality. Ideal for modern bedrooms.",
    size: "Length: 78 inches, Width: 60 inches, Height: 38 inches",
    popular: false,
  },
  {
    id: 16,
    title: "Nightstand Bed",
    image: bedImage6,
    price: 450,
    category: "bed",
    subcategory: "singlecot",
    description: "A compact bed with built-in nightstands for added storage and convenience.",
    size: "Length: 75 inches, Width: 40 inches, Height: 35 inches",
    popular: false,
  },
  {
    id: 17,
    title: "Chesterfield Sofa",
    image: sofaImage6,
    price: 1200,
    category: "sofa",
    subcategory: "5seating",
    description: "A luxurious Chesterfield sofa with deep button tufting and a timeless design, perfect for classy living rooms.",
    size: "Height: 36 inches, Width: 84 inches, Depth: 38 inches",
    popular: true,
  },
  {
    id: 18,
    title: "Buffet Table ",
    image: chairImage6,
    price: 200,
    category: "dining",
    subcategory: "big",
    description: "A wide table designed for serving food at a buffet-style meal.",
    size: "Height: 43 inches, Width: 24 inches, Depth: 23 inches",
    popular: true,
  },
  {
    id: 19,
    title: "Sleek Recliner",
    image: sofaImage7,
    price: 800,
    category: "sofa",
    subcategory: "5seating",
    description: "A sleek, modern recliner sofa designed for compact spaces. Perfect for unwinding after a busy day.",
    size: "Height: 40 inches, Width: 58 inches, Depth: 36 inches",
    popular: false,
  },
  {
    id: 20,
    title: "Dining dining Set",
    image: chairImage7,
    price: 450,
    category: "dining",
    subcategory: "big",
    description: "A set of four elegant dining dining, perfect for family meals and stylish dinner parties.",
    size: "Height: 40 inches, Width: 18 inches, Depth: 18 inches",
    popular: true,
  },
  {
    id: 21,
    title: "Platform Bed",
    image: bedImage7,
    price: 650,
    category: "bed",
    subcategory: "doublecot",
    description: "A minimalist platform bed that enhances modern bedroom aesthetics. No box spring required for convenience.",
    size: "Length: 75 inches, Width: 60 inches, Height: 12 inches",
    popular: true,
  },
  {
    id: 22,
    title: "Daybed with Trundle",
    image: bedImage8,
    price: 850,
    category: "bed",
    subcategory: "doublecot",
    description: "A versatile daybed with an additional trundle for extra sleeping space, ideal for guest rooms or small apartments.",
    size: "Length: 80 inches, Width: 60 inches, Height: 40 inches",
    popular: true,
  },
  {
    id: 23,
    title: "Compact Sofa",
    image: sofaImage8,
    price: 500,
    category: "sofa",
    subcategory: "5seating",
    description: "A compact sofa designed for smaller spaces, offering comfort without compromising on style.",
    size: "Height: 34 inches, Width: 55 inches, Depth: 30 inches",
    popular: false,
  },
  {
    id: 24,
    title: "Leather Recliner",
    image: sofaImage9,
    price: 700,
    category: "sofa",
    subcategory: "5seating",
    description: "A luxurious leather recliner that provides optimal relaxation and comfort with just a push of a button.",
    size: "Height: 40 inches, Width: 60 inches, Depth: 36 inches",
    popular: true,
  },
  {
    id: 25,
    title: "Gathering Table ",
    image: chairImage8,
    price: 180,
    category: "dining",
    subcategory: "big",
    description: "A spacious table meant to bring people together for meals or socializing.",
    size: "Height: 42 inches, Width: 23 inches, Depth: 22 inches",
    popular: true,
  },
  {
    id: 26,
    title: "Family Table",
    image: chairImage9,
    price: 140,
    category: "dining",
    subcategory: "big",
    description: " A sturdy, comfortable table meant for everyday family dining.",
    size: "Height: 38 inches, Width: 20 inches, Depth: 20 inches",
    popular: false,
  },
  {
    id: 27,
    title: "King Size Upholstered Bed",
    image: bedImage9,
    price: 1600,
    category: "bed",
    subcategory: "doublecot",
    description: "A regal king-size upholstered bed with a soft fabric finish, ideal for creating a luxurious and comfortable sleep space.",
    size: "Length: 84 inches, Width: 76 inches, Height: 45 inches",
    popular: true,
  },
  {
    id: 28,
    title: "Foldable Bed Frame",
    image: bedImage10,
    price: 450,
    category: "bed",
    subcategory: "singlecot",
    description: "A foldable bed frame that's both space-saving and functional, perfect for guest rooms or temporary use.",
    size: "Length: 75 inches, Width: 38 inches, Height: 14 inches",
    popular: false,
  },
  {
    id: 29,
    title: "Two-Seat Sofa",
    image: sofaImage10,
    price: 600,
    category: "sofa",
    subcategory: "5seating",
    description: "A comfortable two-seat sofa designed for small living rooms or apartments. Stylish and practical for cozy spaces.",
    size: "Height: 35 inches, Width: 60 inches, Depth: 32 inches",
    popular: true,
  },
  {
    id: 30,
    title: "Round Dining Table",
    image: chairImage10,
    price: 230,
    category: "dining",
    subcategory: "small",
    description: "A circular table that promotes intimacy and conversation during meals.",
    size: "Height: 42 inches, Width: 22 inches, Depth: 22 inches",
    popular: true,
  },
  {
    id: 31,
    title: "Wooden Platform Bed",
    image: bedImage11,
    price: 700,
    category: "bed",
    subcategory: "doublecot",
    description: "A modern wooden platform bed with a minimalist design, offering sturdy support and a natural wood finish.",
    size: "Length: 80 inches, Width: 60 inches, Height: 12 inches",
    popular: true,
  },
  {
    id: 32,
    title: "Farmhouse Table ",
    image: chairImage11,
    price: 170,
    category: "dining",
    subcategory: "small",
    description: "A rustic dining table with a natural wood finish, evoking country charm.",
    size: "Height: 43 inches, Width: 24 inches, Depth: 23 inches",
    popular: false,
  },
  {
    id: 33,
    title: "Tufted Bed",
    image: bedImage12,
    price: 800,
    category: "bed",
    subcategory: "doublecot",
    description: "A tufted bed frame that combines elegance with comfort, adding a luxurious touch to any bedroom.",
    size: "Length: 80 inches, Width: 60 inches, Height: 45 inches",
    popular: true,
  },
  {
    id: 34,
    title: "Rustic Bed Frame",
    image: bedImage13,
    price: 650,
    category: "bed",
    subcategory: "doublecot",
    description: "A rustic wooden bed frame with a natural finish, perfect for creating a cozy and warm bedroom atmosphere.",
    size: "Length: 75 inches, Width: 60 inches, Height: 36 inches",
    popular: false,
  },
  {
    id: 35,
    title: "Luxury Dining",
    image: chairImage12,
    price: 250,
    category: "dining",
    subcategory: "small",
    description: "An elegant dining designed for comfort and style. Upholstered in premium fabric for a luxurious dining experience.",
    size: "Height: 42 inches, Width: 20 inches, Depth: 20 inches",
    popular: true,
  },
  {
    id: 36,
    title: "Bunk Bed",
    image: bedImage14,
    price: 500,
    category: "bed",
    subcategory: "doublecot",
    description: "A space-saving bunk bed ideal for kids' rooms or shared spaces, built for safety and durability.",
    size: "Length: 75 inches, Width: 38 inches (per bed), Height: 60 inches",
    popular: false,
  },
  {
    id: 37,
    title: "Upholstered King Bed",
    image: bedImage16,
    price: 1300,
    category: "bed",
    subcategory: "doublecot",
    description: "An upholstered king-size bed with a padded headboard, offering both comfort and luxury for your bedroom.",
    size: "Length: 84 inches, Width: 76 inches, Height: 50 inches",
    popular: true,
  },
  {
    id: 38,
    title: "Modular Sofa Set",
    image: sofaImage11,
    price: 1400,
    category: "sofa",
    subcategory: "5seating",
    description: "A modular sofa set with interchangeable parts, designed for large families or spacious living rooms.",
    size: "Height: 36 inches, Width: 100 inches, Depth: 40 inches",
    popular: false,
  },
  {
    id: 39,
    title: "Ergonomic Dining",
    image: chairImage13,
    price: 180,
    category: "dining",
    subcategory: "small",
    description: "A modern ergonomic dining that offers both comfort and style, perfect for family meals or dinner parties.",
    size: "Height: 38 inches, Width: 19 inches, Depth: 18 inches",
    popular: true,
  },
  {
    id: 40,
    title: "Parsons Table",
    image: chairImage14,
    price: 220,
    category: "dining",
    subcategory: "small",
    description: "A minimalist, modern table with clean lines and square legs, ideal for contemporary spaces.",
    size: "Height: 45 inches, Width: 24 inches, Depth: 24 inches",
    popular: true,
  },
  {
    id: 41,
    title: "Bistro Table",
    image: chairImage15,
    price: 350,
    category: "dining",
    subcategory: "small",
    description: "A small, round table perfect for casual dining or smaller spaces.",
    size: "Height: 42 inches, Width: 28 inches, Depth: 35 inches",
    popular: false,
  },
  {
    id: 42,
    title: "L-Shaped Sofa",
    image: sofaImage12,
    price: 1500,
    category: "sofa",
    subcategory: "5seating",
    description: "An elegant L-shaped sofa offering ample seating for large living rooms or family spaces.",
    size: "Height: 36 inches, Width: 100 inches (long side), Depth: 40 inches",
    popular: true,
  },
  {
    id: 43,
    title: "Barrel Table",
    image: chairImage16,
    price: 250,
    category: "dining",
    subcategory: "small",
    description: "A distinctive table made from a barrel base, adding rustic or vintage flair to the space.",
    size: "Height: 40 inches, Width: 24 inches, Depth: 30 inches",
    popular: true,
  },
  {
    id: 44,
    title: "Bunk Bed with Stairs",
    image: bedImage15,
    price: 850,
    category: "bed",
    subcategory: "doublecot",
    description: "A safe and functional bunk bed with stairs, perfect for children's rooms or shared spaces.",
    size: "Length: 80 inches, Width: 38 inches (per bed), Height: 70 inches",
    popular: false,
  },
  {
    id: 45,
    title: "Convertible Sofa Bed",
    image: sofaImage13,
    price: 950,
    category: "sofa",
    subcategory: "5seating",
    description: "A space-saving convertible sofa bed, ideal for guests or apartments with limited space.",
    size: "Height: 36 inches, Width: 84 inches, Depth: 36 inches",
    popular: true,
  },
  {
    id: 46,
    title: "Twin Bed with Storage",
    image: bedImage16,
    price: 600,
    category: "bed",
    subcategory: "singlecot",
    description: "A twin bed with built-in storage drawers, perfect for small bedrooms or kids' rooms.",
    size: "Length: 75 inches, Width: 39 inches, Height: 14 inches",
    popular: false,
  },
  {
    id: 47,
    title: "3-Seater Leather Sofa",
    image: sofaImage14,
    price: 1200,
    category: "sofa",
    subcategory: "5seating",
    description: "A luxurious 3-seater leather sofa designed for comfort and style in your living room.",
    size: "Height: 34 inches, Width: 80 inches, Depth: 35 inches",
    popular: true,
  },
  {
    id: 48,
    title: "Banquet Table",
    image: chairImage17,
    price: 350,
    category: "dining",
    subcategory: "small",
    description: "A long, formal table designed for large gatherings and events.",
    size: "Height: 45 inches, Width: 24 inches, Depth: 24 inches",
    popular: true,
  },
  {
    id: 49,
    title: "Luxury Leather King Bed",
    image: bedImage17,
    price: 2000,
    category: "bed",
    subcategory: "doublecot",
    description: "A premium leather upholstered king-size bed with a stylish headboard for a luxurious bedroom experience.",
    size: "Length: 84 inches, Width: 76 inches, Height: 50 inches",
    popular: true,
  },
  {
    id: 50,
    title: "Futon Sofa Bed",
    image: sofaImage15,
    price: 750,
    category: "sofa",
    subcategory: "5seating",
    description: "A versatile futon sofa bed that quickly converts into a comfortable sleeping space for guests.",
    size: "Height: 32 inches, Width: 56 inches, Depth: 35 inches",
    popular: false,
  },
  {
    id: 51,
    title: "Futon Sofa Bed",
    image: sofaImage16,
    price: 700,
    category: "sofa",
    subcategory: "Sofabed",
    description: "A versatile futon sofa bed that quickly converts into a comfortable sleeping space for guests.",
    size: "Height: 32 inches, Width: 56 inches, Depth: 35 inches",
    popular: false,
  },
  {
    id: 52,
    title: "Sofa Bed",
    image: sofaImage20,
    price: 750,
    category: "sofa",
    subcategory: "Sofabed",
    description: "A versatile futon sofa bed that quickly converts into a comfortable sleeping space for guests.",
    size: "Height: 32 inches, Width: 56 inches, Depth: 35 inches",
    popular: false,
  },
  {
    id: 53,
    title: "Modular Sofa Single",
    image: sofaImage18,
    price: 1400,
    category: "sofa",
    subcategory: "1seating",
    description: "A modular sofa set with interchangeable parts, designed for large families or spacious living rooms.",
    size: "Height: 36 inches, Width: 100 inches, Depth: 40 inches",
    popular: false,
  },
  {
    id: 54,
    title: "Single Luxury Sofa",
    image: sofaImage19,
    price: 500,
    category: "sofa",
    subcategory: "1seating",
    description: "A Luxury sofa set with interchangeable parts, designed for large families or spacious living rooms.",
    size: "Height: 36 inches, Width: 100 inches, Depth: 40 inches",
    popular: false,
  },
  {
    id: 55,
    title: "Single Sofa ",
    image: sofaImage17,
    price: 690,
    category: "sofa",
    subcategory: "1seating",
    description: "A Single sofa set with interchangeable parts, designed for large families or spacious living rooms.",
    size: "Height: 36 inches, Width: 100 inches, Depth: 40 inches",
    popular: false,
  },
];

export default products;
