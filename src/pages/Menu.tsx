import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowUp, Filter, Share, Printer, X, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  vealPrice?: string;
  tags?: string[];
  rating?: number;
  review?: string;
  isSpecial?: boolean;
  isNew?: boolean;
  availability?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  note?: string;
}

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('appetizers');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());
  const [hasVisited, setHasVisited] = useState(false);
  const [hoverPreview, setHoverPreview] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Check if user has visited before
  useEffect(() => {
    const lastVisit = localStorage.getItem('napoli-last-visit');
    if (lastVisit) {
      setHasVisited(true);
    }
    localStorage.setItem('napoli-last-visit', new Date().toISOString());
  }, []);

  const menuCategories: MenuCategory[] = [
    {
      id: 'appetizers',
      title: 'Appetizers',
      items: [
        {
          name: 'Shrimp Napoleon',
          price: '$10.99',
          description: 'Five jumbo shrimp sauteed in butter, brandy wine, garlic, fresh basil and shallots.',
          tags: ['seafood', 'shrimp', 'garlic'],
          rating: 4.8,
          review: '"Absolutely divine! The shrimp was perfectly cooked." - Maria'
        },
        {
          name: 'Sliced Italian Sausage',
          price: '$8.99',
          description: 'Sauteed in olive oil, garlic, shallots, basil, marinara sauce and sherry wine.',
          tags: ['sausage', 'spicy'],
          rating: 4.5,
          review: '"Rich flavors and perfect spice level." - Tony'
        },
        {
          name: 'Stuffed Mushrooms',
          price: '$9.99',
          description: 'Stuffed with crab meat mixture and sautéed in an Alla Panna sauce.',
          tags: ['seafood', 'vegetarian', 'mushrooms'],
          rating: 4.7,
          review: '"The crab filling is generous and delicious." - Lisa'
        },
        {
          name: 'Fried Ravioli',
          price: '$9.99',
          description: 'Cheese ravioli fried and served with marinara sauce.',
          tags: ['cheese', 'fried'],
          rating: 4.6,
          review: '"Crispy outside, creamy inside - perfection!" - Mike',
          isSpecial: true
        },
        {
          name: 'Bruschetta',
          price: '$9.99',
          description: 'Tomato, garlic, oil, basil & mozzarella cheese.',
          tags: ['vegetarian', 'cheese', 'tomato'],
          rating: 4.4,
          review: '"Fresh and light, great start to the meal." - Anna'
        },
        {
          name: 'Fried Calamari',
          price: '$10.99',
          description: 'Fried to a golden brown & served with marinara sauce.',
          tags: ['seafood', 'fried'],
          rating: 4.9,
          review: '"Best calamari in town!" - Jamie',
          availability: 'Only 3 left!'
        },
        {
          name: 'Spinach Artichoke Dip with Bread',
          price: '$9.99',
          tags: ['vegetarian', 'cheese', 'spinach'],
          rating: 4.3,
          review: '"Creamy and flavorful dip." - Sarah'
        },
        {
          name: 'Fried Mozzarella Cheese',
          price: '$8.99',
          description: 'Five sticks served with marinara sauce.',
          tags: ['cheese', 'fried'],
          rating: 4.5,
          review: '"Classic appetizer done right." - Dave'
        }
      ]
    },
    {
      id: 'salads',
      title: 'Salads',
      items: [
        {
          name: 'Greek Salad with Chicken',
          price: '$10.99',
          tags: ['chicken', 'healthy'],
          rating: 4.4,
          review: '"Fresh and filling." - Elena'
        },
        {
          name: 'Greek Salad',
          price: '$9.99',
          description: 'Lettuce, tomatoes, black olives, feta cheese topped with balsamic vinegar and olive oil dressing.',
          tags: ['vegetarian', 'healthy', 'cheese'],
          rating: 4.3,
          review: '"Authentic Greek flavors." - Nick'
        },
        {
          name: 'Chef Salad with Chicken',
          price: '$12.99',
          tags: ['chicken', 'healthy'],
          rating: 4.5,
          review: '"Generous portions and fresh ingredients." - Beth'
        },
        {
          name: 'Chef Salad',
          price: '$10.99',
          description: 'Fresh mixed greens with yellow squash, zucchini, squash, onions, peppers, mushrooms, tomatoes, artichoke hearts & black olives.',
          tags: ['vegetarian', 'healthy'],
          rating: 4.2,
          review: '"Colorful and nutritious." - Amy'
        },
        {
          name: 'Caesar Salad with Chicken',
          price: '$12.99',
          tags: ['chicken', 'cheese'],
          rating: 4.6,
          review: '"Classic Caesar with perfectly grilled chicken." - John'
        },
        {
          name: 'Caesar Salad',
          price: '$8.99',
          description: 'Fresh romaine lettuce tossed with homemade Caesar dressing and croutons.',
          tags: ['vegetarian', 'cheese'],
          rating: 4.4,
          review: '"Best Caesar dressing ever!" - Rose'
        },
        {
          name: "Napoli's Salad with Chicken",
          price: '$10.99',
          tags: ['chicken', 'healthy'],
          rating: 4.3,
          review: '"House special is fantastic." - Tom',
          isSpecial: true
        },
        {
          name: 'Tossed Salad',
          price: '$3.50',
          description: 'Fresh mixed greens and tomatoes.',
          tags: ['vegetarian', 'healthy'],
          rating: 4.0,
          review: '"Simple and fresh." - Kate'
        }
      ],
      note: 'Choice of Dressings: House Italian, Blue Cheese, Ranch, Thousand Island, Oil/Vinegar.'
    },
    {
      id: 'specialties',
      title: 'House Specialties',
      items: [
        {
          name: "Napoli's Special",
          price: '$17.99',
          description: 'Chicken & sausage with bell peppers, ham, black olives & artichoke hearts in a white wine cream sauce with a touch of marinara, served over spaghetti.',
          tags: ['chicken', 'sausage', 'specialty'],
          rating: 4.9,
          review: '"The signature dish - absolutely incredible!" - Victoria',
          isSpecial: true
        },
        {
          name: 'Viva Italia',
          price: '$17.99',
          description: 'Portobello mushrooms, sliced Italian sausage with chopped chicken breast in our own savory Alfredo sauce, poured over penne pasta.',
          tags: ['chicken', 'sausage', 'mushrooms'],
          rating: 4.8,
          review: '"Rich and satisfying Italian feast." - Giuseppe'
        },
        {
          name: 'Ravioli Plate',
          price: '$16.99',
          description: 'Two meat, two cheese & two spinach with marinara, topped with mozzarella cheese.',
          tags: ['cheese', 'meat', 'spinach'],
          rating: 4.7,
          review: '"Great variety on one plate." - Carmen'
        },
        {
          name: 'Chicken Gorgonzola',
          price: '$16.99',
          description: 'Chicken with crumbled gorgonzola and Italian blue cheese, served over penne pasta with Alfredo sauce.',
          tags: ['chicken', 'cheese'],
          rating: 4.6,
          review: '"The gorgonzola adds amazing flavor." - Frank'
        },
        {
          name: 'Chicken Scarporelo',
          price: '$15.99',
          description: 'Sautéed in a creamy sauce with fresh mushrooms and sweet bell peppers, baked with mozzarella cheese & served over spaghetti.',
          tags: ['chicken', 'mushrooms', 'cheese'],
          rating: 4.5,
          review: '"Comfort food at its finest." - Rita'
        },
        {
          name: 'Chicken Pasta Primavera',
          price: '$15.99',
          description: 'Chicken with fresh mixed vegetables in a creamy sauce with a touch of marinara.',
          tags: ['chicken', 'vegetables'],
          rating: 4.4,
          review: '"Fresh vegetables make this dish special." - Linda'
        },
        {
          name: 'Fettuccini Alfredo',
          price: '$14.99',
          description: 'Creamy white wine sauce served over fettuccini.',
          tags: ['vegetarian', 'cheese'],
          rating: 4.5,
          review: '"Rich and creamy perfection." - Paul'
        },
        {
          name: 'Chicken Pomodoro',
          price: '$15.99',
          description: 'Chicken sauteed with fresh tomatoes, basil, olive oil, garlic, light marinara, sherry wine & served over penne pasta.',
          tags: ['chicken', 'tomato', 'basil'],
          rating: 4.6,
          review: '"Fresh tomatoes make all the difference." - Marie',
          isNew: true
        }
      ],
      note: 'Add $1.00 to substitute gluten free.'
    },
    {
      id: 'entrees',
      title: 'Entrees',
      items: [
        {
          name: 'Sausage Pizzaiola',
          price: '$15.99',
          description: 'Sausage sautéed with mushrooms, onions, green peppers, marinara, served over spaghetti pasta.',
          tags: ['sausage', 'mushrooms'],
          rating: 4.4,
          review: '"Hearty and flavorful." - Mark'
        },
        {
          name: 'Spaghetti "The Works"',
          price: '$14.99',
          description: 'Spaghetti with meatballs, meat sauce, mushrooms & sausage.',
          tags: ['meatballs', 'sausage', 'mushrooms'],
          rating: 4.5,
          review: '"A classic done right." - Susan'
        },
        {
          name: 'Spaghetti w/ Meatballs',
          price: '$12.99',
          tags: ['meatballs'],
          rating: 4.3,
          review: '"Comfort food at its best." - Greg'
        },
        {
          name: 'Spaghetti w/ Meat Sauce',
          price: '$12.99',
          tags: ['meat'],
          rating: 4.2,
          review: '"Rich and satisfying." - Linda'
        },
        {
          name: 'Spaghetti w/ Mushrooms',
          price: '$12.99',
          tags: ['mushrooms', 'vegetarian'],
          rating: 4.1,
          review: '"Earthy and delicious." - Paul'
        },
        {
          name: 'Spaghetti w/ Olive Oil, Garlic & Basil',
          price: '$12.99',
          tags: ['vegetarian', 'garlic', 'basil'],
          rating: 4.3,
          review: '"Simple and flavorful." - Anna'
        },
        {
          name: 'Spaghetti w/ Sausage',
          price: '$12.99',
          tags: ['sausage'],
          rating: 4.4,
          review: '"Perfectly seasoned." - Mike'
        },
        {
          name: 'Spaghetti w/ Marinara Sauce',
          price: '$12.99',
          tags: ['vegetarian'],
          rating: 4.0,
          review: '"Classic and comforting." - Rose'
        },
        {
          name: 'Chicken Minestrone',
          price: '$12.99',
          tags: ['chicken', 'soup'],
          rating: 4.2,
          review: '"Hearty and warming." - Tom'
        },
        {
          name: 'Minestrone Soup',
          price: '$11.99',
          description: 'Mixed vegetables & chicken base with a touch of marinara.',
          tags: ['vegetarian', 'soup'],
          rating: 4.1,
          review: '"Fresh and tasty." - Kate'
        },
        {
          name: 'Tortellini Pesto',
          price: '$14.99',
          description: 'Cheese tortellini in a creamy pesto sauce.',
          tags: ['cheese', 'pesto', 'vegetarian'],
          rating: 4.5,
          review: '"Bright and flavorful." - Sarah'
        },
        {
          name: 'Tortellini Modo Mio w/ Chicken',
          price: '$15.99',
          description: 'Cheese tortellini & chicken sautéed with basil, tomatoes, broccoli, garlic in a white wine sauce.',
          tags: ['chicken', 'cheese', 'vegetables'],
          rating: 4.6,
          review: '"A delightful combination." - Dave'
        },
        {
          name: 'Tortellini Gorgonzola',
          price: '$15.99',
          description: 'Crumbled gorgonzola Italian blue cheese and Alfredo sauce.',
          tags: ['cheese', 'gorgonzola', 'vegetarian'],
          rating: 4.4,
          review: '"Rich and creamy." - Amy'
        },
        {
          name: 'Tortellini Siciliano',
          price: '$15.99',
          description: 'Cheese tortellini sautéed with ham, olives, cream sauce & a touch of marinara.',
          tags: ['cheese', 'ham', 'olives'],
          rating: 4.3,
          review: '"Savory and satisfying." - John'
        },
        {
          name: 'Tortellini Alla Panna',
          price: '$14.99',
          description: 'Cheese tortellini sautéed in cream sauce with a touch of marinara.',
          tags: ['cheese', 'cream', 'vegetarian'],
          rating: 4.2,
          review: '"Smooth and delicious." - Lisa'
        },
        {
          name: 'Tortellini Alla Panna w/ Chicken',
          price: '$16.99',
          tags: ['chicken', 'cheese', 'cream'],
          rating: 4.5,
          review: '"Comfort food elevated." - Frank'
        },
        {
          name: 'Sausage Pepper Parmigiana',
          price: '$14.99',
          description: 'Sausage & peppers sautéed in marinara, topped with mozzarella cheese in a sherry wine over spaghetti.',
          tags: ['sausage', 'peppers', 'cheese'],
          rating: 4.4,
          review: '"Bold and flavorful." - Rita'
        },
        {
          name: 'Spaghetti Carbonara',
          price: '$14.99',
          description: 'Spaghetti with sautéed mushrooms, ham, in a rich cream & a touch of marinara over spaghetti.',
          tags: ['mushrooms', 'ham', 'cream'],
          rating: 4.5,
          review: '"Rich and satisfying." - Paul'
        }
      ]
    },
    {
      id: 'baked',
      title: 'Homemade Baked Pastas',
      items: [
        {
          name: 'Baked Ziti',
          price: '$13.99',
          description: 'Penne pasta, ricotta cheese & marinara topped with mozzarella cheese.',
          tags: ['cheese', 'pasta', 'baked'],
          rating: 4.4,
          review: '"Cheesy and comforting." - Maria'
        },
        {
          name: 'Cheese Ravioli',
          price: '$13.99',
          description: 'Jumbo ravioli stuffed with ricotta cheese & topped with marinara & mozzarella cheese.',
          tags: ['cheese', 'pasta'],
          rating: 4.3,
          review: '"Creamy and delicious." - Tony'
        },
        {
          name: 'Lasagna',
          price: '$13.99',
          description: 'Pasta layered with beef, mozzarella cheese, topped with marinara & mozzarella cheese.',
          tags: ['beef', 'cheese', 'pasta'],
          rating: 4.5,
          review: '"Classic Italian favorite." - Lisa'
        },
        {
          name: 'Meat Ravioli',
          price: '$13.99',
          description: 'Jumbo ravioli stuffed with beef & topped with marinara & mozzarella cheese.',
          tags: ['beef', 'pasta'],
          rating: 4.2,
          review: '"Hearty and tasty." - Mike'
        },
        {
          name: 'Spinach Ravioli',
          price: '$13.99',
          description: 'Jumbo ravioli stuffed with spinach & cheese, topped with marinara & mozzarella cheese.',
          tags: ['spinach', 'cheese', 'pasta'],
          rating: 4.3,
          review: '"Fresh and flavorful." - Anna'
        },
        {
          name: 'Eggplant Parmigiana',
          price: '$13.99',
          description: 'Breaded eggplant rolled & topped with marinara & mozzarella cheese, served over spaghetti.',
          tags: ['eggplant', 'cheese', 'vegetarian'],
          rating: 4.4,
          review: '"Rich and satisfying." - Dave'
        },
        {
          name: 'Eggplant Rollatini',
          price: '$13.99',
          description: 'Breaded eggplant stuffed with ricotta cheese, rolled & topped with marinara & mozzarella cheese.',
          tags: ['eggplant', 'cheese', 'vegetarian'],
          rating: 4.3,
          review: '"Delicious and comforting." - Sarah'
        },
        {
          name: 'Manicotti',
          price: '$13.99',
          description: 'Pasta stuffed & rolled with ricotta cheese, topped with marinara & mozzarella cheese.',
          tags: ['cheese', 'pasta'],
          rating: 4.2,
          review: '"Creamy and tasty." - Tom'
        },
        {
          name: 'Pasta Sampler',
          price: '$13.99',
          description: 'Ravioli, lasagna & manicotti topped with marinara & mozzarella cheese.',
          tags: ['cheese', 'pasta'],
          rating: 4.5,
          review: '"Great variety and flavor." - Kate'
        }
      ],
      note: 'Add $1.00 to substitute Alfredo sauce for the marinara sauce.'
    },
    {
      id: 'seafood',
      title: 'Seafood',
      items: [
        {
          name: 'Linguini Tuttomare',
          price: '$20.99',
          description: 'Mussels, shrimp, scallops, calamari, & baby clams sauteed in garlic & butter, served over linguini with red or white wine sauce.',
          tags: ['seafood', 'shellfish', 'garlic'],
          rating: 4.8,
          review: '"Fresh and flavorful seafood medley." - Victoria'
        },
        {
          name: 'Shrimp & Scallops Alfredo',
          price: '$18.99',
          tags: ['seafood', 'shrimp', 'scallops', 'cheese'],
          rating: 4.7,
          review: '"Creamy and delicious." - Giuseppe'
        },
        {
          name: 'Salmon Piccata',
          price: '$19.99',
          description: 'Sauteed in white wine, lemon, butter, capers & served over spaghetti.',
          tags: ['seafood', 'salmon', 'lemon'],
          rating: 4.6,
          review: '"Light and tasty." - Carmen'
        },
        {
          name: 'Shrimp Alvino',
          price: '$17.99',
          description: 'Sauteed in butter, garlic, lemon, white wine & a touch of marinara sauce served over linguini.',
          tags: ['seafood', 'shrimp', 'garlic', 'lemon'],
          rating: 4.7,
          review: '"Perfect balance of flavors." - Frank'
        },
        {
          name: 'Shrimp Gorgonzola',
          price: '$17.99',
          description: 'Crumbled gorgonzola Italian blue cheese served over penne pasta with Alfredo sauce.',
          tags: ['seafood', 'shrimp', 'cheese'],
          rating: 4.5,
          review: '"Rich and creamy." - Rita'
        },
        {
          name: 'Shrimp Pesto',
          price: '$17.99',
          description: 'Sauteed in a white wine sauce with pesto and served over penne pasta.',
          tags: ['seafood', 'shrimp', 'pesto'],
          rating: 4.6,
          review: '"Bright and flavorful." - Linda'
        },
        {
          name: 'Lobster Ravioli',
          price: '$17.99',
          description: 'Ravioli pastas sauteed with tomatoes, lobster base, white cream sauce & a touch of marinara.',
          tags: ['seafood', 'lobster', 'cheese'],
          rating: 4.7,
          review: '"Decadent and delicious." - Paul'
        },
        {
          name: 'Shrimp Crab Alfredo',
          price: '$18.99',
          description: 'Brandy creamy wine sauce over fettuccini with real crab meat.',
          tags: ['seafood', 'shrimp', 'crab', 'cheese'],
          rating: 4.8,
          review: '"Rich and flavorful." - Maria'
        },
        {
          name: 'Shrimp Scaloppini',
          price: '$18.99',
          description: 'Shrimp, mussels & scallops sauteed in marinara and sherry wine, olive oil, garlic & basil, served over linguini.',
          tags: ['seafood', 'shrimp', 'mussels', 'scallops', 'garlic'],
          rating: 4.7,
          review: '"A seafood lover’s dream." - Tony'
        },
        {
          name: 'Shrimp Diavolo',
          price: '$17.99',
          description: 'Sauteed in hot diavolo sauce & served over linguini.',
          tags: ['seafood', 'shrimp', 'spicy'],
          rating: 4.6,
          review: '"Spicy and delicious." - Lisa'
        },
        {
          name: 'Linguini with Clams - Red Sauce or White Sauce',
          price: '$15.99',
          description: 'Baby clams sauteed with a touch of marinara (red) or white wine (white), served over linguini.',
          tags: ['seafood', 'clams'],
          rating: 4.5,
          review: '"Fresh and tasty." - Mike'
        }
      ]
    },
    {
      id: 'chicken-veal',
      title: 'Chicken or Veal',
      items: [
        {
          name: 'Arrabbiata',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed with mushrooms, shallots, hot cherry peppers in white wine served over spaghetti.',
          tags: ['chicken', 'veal', 'spicy', 'mushrooms'],
          rating: 4.5,
          review: '"Perfectly spicy and flavorful." - Anna'
        },
        {
          name: 'Damabianka',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed with mushrooms in rich brandy cream sauce over spaghetti.',
          tags: ['chicken', 'veal', 'mushrooms', 'cream'],
          rating: 4.4,
          review: '"Rich and comforting." - Dave'
        },
        {
          name: 'Marsala',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed with mushrooms in rich marsala wine, served over spaghetti.',
          tags: ['chicken', 'veal', 'mushrooms', 'wine'],
          rating: 4.5,
          review: '"Classic and delicious." - Sarah'
        },
        {
          name: 'Piccata',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed with capers in white wine, lemon & butter, served over spaghetti.',
          tags: ['chicken', 'veal', 'lemon', 'capers'],
          rating: 4.6,
          review: '"Light and flavorful." - Tom'
        },
        {
          name: 'Capelini',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed in olive oil, garlic, basil, artichoke hearts & vegetables in white wine served over spaghetti.',
          tags: ['chicken', 'veal', 'vegetables', 'garlic', 'basil'],
          rating: 4.4,
          review: '"Fresh and tasty." - Kate'
        },
        {
          name: 'Diavolo',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed in spice, light marinara & served over spaghetti.',
          tags: ['chicken', 'veal', 'spicy'],
          rating: 4.3,
          review: '"Spicy and delicious." - Mark'
        },
        {
          name: 'Parmigiana',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Lightly breaded & topped with marinara & mozzarella cheese over spaghetti.',
          tags: ['chicken', 'veal', 'cheese'],
          rating: 4.5,
          review: '"Classic and comforting." - Susan'
        },
        {
          name: 'Siciliana',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed with capers, mushrooms & artichoke hearts in white wine, lemon & butter sauce, served over spaghetti.',
          tags: ['chicken', 'veal', 'capers', 'mushrooms'],
          rating: 4.4,
          review: '"Rich and flavorful." - Greg'
        }
      ]
    },
    {
      id: 'sandwiches',
      title: 'Sandwiches',
      items: [
        {
          name: 'Calzone',
          price: '$13.99',
          description: 'Sausage, mozzarella & ricotta cheese wrapped in pizza crust, served with marinara.',
          tags: ['sausage', 'cheese', 'fried'],
          rating: 4.3,
          review: '"Delicious and filling." - Linda'
        },
        {
          name: 'Chicken Parmigiana Sub',
          price: '$13.99',
          description: 'Baked bread topped with chicken, marinara & mozzarella cheese.',
          tags: ['chicken', 'cheese'],
          rating: 4.4,
          review: '"Perfect sandwich." - Paul'
        },
        {
          name: 'Sausage Parmigiana Sub',
          price: '$13.99',
          description: 'Baked bread topped with sausage, marinara & mozzarella cheese.',
          tags: ['sausage', 'cheese'],
          rating: 4.3,
          review: '"Hearty and tasty." - Maria'
        },
        {
          name: 'Spinach Calzone',
          price: '$13.99',
          description: 'Spinach, mozzarella & ricotta cheese wrapped in pizza crust served with marinara.',
          tags: ['spinach', 'cheese', 'vegetarian'],
          rating: 4.2,
          review: '"Fresh and delicious." - Tony'
        },
        {
          name: 'Meatball Parmigiana Sub',
          price: '$13.99',
          description: 'Baked bread topped with meatballs, marinara & mozzarella cheese.',
          tags: ['meatballs', 'cheese'],
          rating: 4.4,
          review: '"Classic and satisfying." - Lisa'
        },
        {
          name: 'Philly Cheese Steak',
          price: '$13.99',
          description: 'Baked bread topped with sauteed onions, peppers, mozarella cheese & steak.',
          tags: ['beef', 'cheese', 'peppers'],
          rating: 4.5,
          review: '"Rich and flavorful." - Mike'
        },
        {
          name: 'Stromboli',
          price: '$13.99',
          description: 'Pepperoni, sausage, Canadian bacon, hamburger & mozzarella cheese wrapped in pizza crust & served with marinara.',
          tags: ['pepperoni', 'sausage', 'cheese', 'meat'],
          rating: 4.3,
          review: '"Delicious and filling." - Anna'
        }
      ]
    },
    {
      id: 'pizza',
      title: 'Pizza',
      items: [
        {
          name: 'Cheese',
          price: 'S-$11.99 / M-$12.99 / L-$13.99',
          tags: ['cheese', 'vegetarian'],
          rating: 4.5,
          review: '"Classic and delicious." - Dave'
        },
        {
          name: 'Supreme',
          price: 'S-$15.99 / M-$16.99 / L-$17.99',
          tags: ['pepperoni', 'sausage', 'peppers', 'onions', 'olives'],
          rating: 4.6,
          review: '"Loaded with toppings." - Sarah'
        },
        {
          name: 'Create Your Own Pizza',
          price: '$1.00 per topping',
          description: 'Toppings: Pepperoni, Italian sausage, Canadian bacon, hamburger, mushrooms, green peppers, onions, black olives & jalapenos on request. Four toppings or more is a supreme.',
          tags: ['custom'],
          rating: 4.7,
          review: '"Endless possibilities." - Tom'
        },
        {
          name: 'White Pizza',
          price: 'M-$14.99 / L-$15.99',
          description: 'Garlic, ricotta and mozzarella cheese.',
          tags: ['cheese', 'garlic', 'vegetarian'],
          rating: 4.4,
          review: '"Creamy and flavorful." - Kate'
        },
        {
          name: 'Gluten Free Cheese Pizza',
          price: '10"-$12.99',
          tags: ['gluten-free', 'cheese', 'vegetarian'],
          rating: 4.3,
          review: '"Great option for gluten-free." - Mark'
        }
      ],
      note: 'S - 12", M - 14", L - 16"'
    }
  ];

  // Available filter tags
  const availableFilters = [
    'vegetarian', 'seafood', 'chicken', 'cheese', 'spicy', 'healthy', 
    'fried', 'gluten-free', 'specialty', 'mushrooms', 'tomato'
  ];

  // Filter menu items based on search and filters
  const filterMenuItems = (items: MenuItem[]) => {
    let filtered = items;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }

    // Filter by selected tags
    if (selectedFilters.length > 0) {
      filtered = filtered.filter(item => 
        item.tags && selectedFilters.every(filter => 
          item.tags!.includes(filter)
        )
      );
    }

    return filtered;
  };

  // Toggle filter
  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  // Toggle description expansion
  const toggleDescription = (itemName: string) => {
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemName)) {
        newSet.delete(itemName);
      } else {
        newSet.add(itemName);
      }
      return newSet;
    });
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      
      // Update active section based on scroll position
      const sections = Object.keys(sectionRefs.current);
      for (const sectionId of sections) {
        const element = sectionRefs.current[sectionId];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Print menu
  const printMenu = () => {
    window.print();
  };

  // Share menu
  const shareMenu = () => {
    if (navigator.share) {
      navigator.share({
        title: "Napoli's Italian Restaurant Menu",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Could add toast notification here
    }
  };

  // Navigation items
  const navItems = [
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'salads', label: 'Salads' },
    { id: 'specialties', label: 'House Specialties' },
    { id: 'entrees', label: 'Entrees' },
    { id: 'baked', label: 'Baked Pastas' },
    { id: 'seafood', label: 'Seafood' },
    { id: 'chicken-veal', label: 'Chicken/Veal' },
    { id: 'sandwiches', label: 'Sandwiches' },
    { id: 'pizza', label: 'Pizza' }
  ];

  // Calculate total visible items
  const totalVisibleItems = menuCategories.reduce((total, category) => {
    return total + filterMenuItems(category.items).length;
  }, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-800 to-red-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Our Menu</h1>
          <p className="font-lato text-xl max-w-2xl mx-auto text-cream-50 animate-fade-in">
            Authentic Italian cuisine crafted with love and tradition
          </p>
          
          {/* Welcome back message */}
          {hasVisited && (
            <div className="mt-6 bg-yellow-600/20 rounded-lg p-4 animate-fade-in">
              <p className="text-yellow-100">Welcome back! Check out what's new since your last visit.</p>
            </div>
          )}
        </div>
      </div>

      {/* Controls Bar */}
      <div className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search menu items..."
                  className="pl-10 py-3 border border-gray-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters {selectedFilters.length > 0 && `(${selectedFilters.length})`}
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={shareMenu}>
                <Share className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={printMenu}>
                <Printer className="h-4 w-4 mr-1" />
                Print
              </Button>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-fade-in">
              <div className="flex flex-wrap gap-2">
                {availableFilters.map((filter) => (
                  <Badge
                    key={filter}
                    variant={selectedFilters.includes(filter) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-red-100 transition-colors capitalize"
                    onClick={() => toggleFilter(filter)}
                  >
                    {filter}
                    {selectedFilters.includes(filter) && (
                      <X className="h-3 w-3 ml-1" />
                    )}
                  </Badge>
                ))}
              </div>
              {selectedFilters.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedFilters([])}
                  className="mt-2"
                >
                  Clear all filters
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-200">
        <ScrollArea className="w-full">
          <div className="flex space-x-1 p-3 min-w-max">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`whitespace-nowrap px-4 py-2 font-lato text-sm transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'bg-red-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Sticky Summary Bar */}
      <div className="sticky top-32 z-30 bg-red-50 border-b border-red-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-red-700">
            <span className="font-cinzel font-semibold capitalize">
              {activeSection.replace('-', ' ')}
            </span>
            <span className="font-lato">
              {totalVisibleItems} items shown
            </span>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-12">
        {menuCategories.map((category) => {
          const filteredItems = filterMenuItems(category.items);
          if (filteredItems.length === 0 && (searchTerm || selectedFilters.length > 0)) return null;

          return (
            <section
              key={category.id}
              ref={(el) => { sectionRefs.current[category.id] = el; }}
              className="mb-16 animate-fade-in"
            >
              <div className="mb-8">
                <h2 className="font-cinzel text-4xl font-bold text-red-800 mb-4">
                  {category.title}
                </h2>
                <div className="w-16 h-0.5 bg-red-600 mb-6"></div>
                {category.note && (
                  <p className="font-lato text-sm text-gray-600 italic mb-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    {category.note}
                  </p>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {filteredItems.map((item, index) => {
                  const isDescriptionLong = item.description && item.description.length > 100;
                  const isExpanded = expandedDescriptions.has(item.name);
                  const displayDescription = isDescriptionLong && !isExpanded 
                    ? item.description!.substring(0, 100) + '...'
                    : item.description;

                  return (
                    <div 
                      key={index} 
                      className="group border-b border-dotted border-gray-300 pb-6 mb-6 last:border-b-0 last:mb-0 hover:bg-gray-50 p-4 rounded-lg transition-all duration-200 relative"
                      onMouseEnter={() => setHoverPreview(item.name)}
                      onMouseLeave={() => setHoverPreview(null)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-lato font-bold text-lg text-gray-900">
                              {item.name}
                            </h3>
                            {item.isSpecial && (
                              <Badge className="bg-yellow-500 text-white text-xs">
                                Today's Special
                              </Badge>
                            )}
                            {item.isNew && (
                              <Badge className="bg-green-500 text-white text-xs">
                                New
                              </Badge>
                            )}
                          </div>
                          
                          {item.tags && (
                            <div className="flex flex-wrap gap-1 mb-2">
                              {item.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs capitalize">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className="text-right">
                          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {item.vealPrice ? `C ${item.price} / V ${item.vealPrice}` : item.price}
                          </span>
                          {item.availability && (
                            <p className="text-xs text-orange-600 font-semibold mt-1">
                              {item.availability}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      {displayDescription && (
                        <div className="mb-3">
                          <p className="font-lato text-gray-600 italic text-sm leading-relaxed">
                            {displayDescription}
                          </p>
                          {isDescriptionLong && (
                            <button
                              onClick={() => toggleDescription(item.name)}
                              className="text-red-600 text-xs font-medium hover:underline mt-1"
                            >
                              {isExpanded ? 'Show less' : 'Show more'}
                            </button>
                          )}
                        </div>
                      )}

                      {item.rating && (
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(item.rating!)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="font-semibold ml-1">{item.rating}</span>
                          </div>
                          {item.review && (
                            <p className="text-gray-600 italic">
                              {item.review}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Hover Preview */}
                      {hoverPreview === item.name && (
                        <div className="absolute left-full top-0 ml-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64 z-10 hidden lg:block">
                          <div className="w-full h-32 bg-gray-200 rounded mb-2 flex items-center justify-center">
                            <span className="text-gray-500 text-sm">Preview Image</span>
                          </div>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Read More Reviews Link */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
          <h3 className="font-cinzel text-2xl font-bold text-gray-800 mb-4">
            Love what you see?
          </h3>
          <p className="font-lato text-gray-600 mb-4">
            Read more reviews from our satisfied customers
          </p>
          <Button className="bg-red-600 hover:bg-red-700">
            Read More Reviews
          </Button>
        </div>

        {/* Footer Note */}
        <div className="text-center bg-cream-50 rounded-lg p-8 border border-gray-200 mt-12">
          <p className="font-lato text-gray-800 font-semibold text-lg">
            All dishes come with fresh baked Italian dinner rolls.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-bounce"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Menu;
