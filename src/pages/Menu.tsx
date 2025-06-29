
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  vealPrice?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
  note?: string;
  bgColor?: string;
}

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('appetizers');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const menuCategories: MenuCategory[] = [
    {
      id: 'appetizers',
      title: 'Appetizers',
      icon: '🍤',
      bgColor: 'bg-orange-50',
      items: [
        {
          name: 'Shrimp Napoleon',
          price: '$10.99',
          description: 'Five jumbo shrimp sauteed in butter, brandy wine, garlic, fresh basil and shallots.'
        },
        {
          name: 'Sliced Italian Sausage',
          price: '$8.99',
          description: 'Sauteed in olive oil, garlic, shallots, basil, marinara sauce and sherry wine.'
        },
        {
          name: 'Stuffed Mushrooms',
          price: '$9.99',
          description: 'Stuffed with crab meat mixture and sautéed in an Alla Panna sauce.'
        },
        {
          name: 'Fried Ravioli',
          price: '$9.99',
          description: 'Cheese ravioli fried and served with marinara sauce.'
        },
        {
          name: 'Bruschetta',
          price: '$9.99',
          description: 'Tomato, garlic, oil, basil & mozzarella cheese.'
        },
        {
          name: 'Fried Calamari',
          price: '$10.99',
          description: 'Fried to a golden brown & served with marinara sauce.'
        },
        {
          name: 'Spinach Artichoke Dip with Bread',
          price: '$9.99'
        },
        {
          name: 'Fried Mozzarella Cheese',
          price: '$8.99',
          description: 'Five sticks served with marinara sauce.'
        }
      ]
    },
    {
      id: 'salads',
      title: 'Salads',
      icon: '🥗',
      bgColor: 'bg-green-50',
      items: [
        {
          name: 'Greek Salad with Chicken',
          price: '$10.99'
        },
        {
          name: 'Greek Salad',
          price: '$9.99',
          description: 'Lettuce, tomatoes, black olives, feta cheese topped with balsamic vinegar and olive oil dressing.'
        },
        {
          name: 'Chef Salad with Chicken',
          price: '$12.99'
        },
        {
          name: 'Chef Salad',
          price: '$10.99',
          description: 'Fresh mixed greens with yellow squash, zucchini, squash, onions, peppers, mushrooms, tomatoes, artichoke hearts & black olives.'
        },
        {
          name: 'Caesar Salad with Chicken',
          price: '$12.99'
        },
        {
          name: 'Caesar Salad',
          price: '$8.99',
          description: 'Fresh romaine lettuce tossed with homemade Caesar dressing and croutons.'
        },
        {
          name: "Napoli's Salad with Chicken",
          price: '$10.99'
        },
        {
          name: 'Tossed Salad',
          price: '$3.50',
          description: 'Fresh mixed greens and tomatoes.'
        }
      ],
      note: 'Choice of Dressings: House Italian, Blue Cheese, Ranch, Thousand Island, Oil/Vinegar.'
    },
    {
      id: 'specialties',
      title: 'House Specialties',
      icon: '🍝',
      bgColor: 'bg-yellow-50',
      items: [
        {
          name: "Napoli's Special",
          price: '$17.99',
          description: 'Chicken & sausage with bell peppers, ham, black olives & artichoke hearts in a white wine cream sauce with a touch of marinara, served over spaghetti.'
        },
        {
          name: 'Viva Italia',
          price: '$17.99',
          description: 'Portobello mushrooms, sliced Italian sausage with chopped chicken breast in our own savory Alfredo sauce, poured over penne pasta.'
        },
        {
          name: 'Ravioli Plate',
          price: '$16.99',
          description: 'Two meat, two cheese & two spinach with marinara, topped with mozzarella cheese.'
        },
        {
          name: 'Chicken Gorgonzola',
          price: '$16.99',
          description: 'Chicken with crumbled gorgonzola and Italian blue cheese, served over penne pasta with Alfredo sauce.'
        },
        {
          name: 'Chicken Scarporelo',
          price: '$15.99',
          description: 'Sautéed in a creamy sauce with fresh mushrooms and sweet bell peppers, baked with mozzarella cheese & served over spaghetti.'
        },
        {
          name: 'Chicken Pasta Primavera',
          price: '$15.99',
          description: 'Chicken with fresh mixed vegetables in a creamy sauce with a touch of marinara.'
        },
        {
          name: 'Fettuccini Alfredo',
          price: '$14.99',
          description: 'Creamy white wine sauce served over fettuccini.'
        },
        {
          name: 'Chicken Pomodoro',
          price: '$15.99',
          description: 'Chicken sauteed with fresh tomatoes, basil, olive oil, garlic, light marinara, sherry wine & served over penne pasta.'
        },
        {
          name: "Napoli's Combo",
          price: '$17.99',
          description: 'Lasagna, chicken parmigiana & fettuccini Alfredo.'
        },
        {
          name: 'Chef Favorite',
          price: '$17.99',
          description: 'Four large shrimp, chicken breast, capers sautéed in our Alfredo sauce poured over cheese tortellini.'
        },
        {
          name: 'Ravioli Portobello',
          price: '$16.99',
          description: 'Ravioli with portobello mushrooms & Alfredo sauce.'
        },
        {
          name: 'Chicken Pesto',
          price: '$15.99',
          description: 'Sautéed chicken with pesto sauce served over penne pasta.'
        },
        {
          name: 'Chicken Calabrese',
          price: '$15.99',
          description: 'Sautéed mushrooms, artichoke hearts in Alla Panna sauce over spaghetti.'
        },
        {
          name: 'Chicken Parm Cremora',
          price: '$15.99',
          description: 'Chicken breast sautéed in Alfredo sauce topped with mozzarella over spaghetti.'
        },
        {
          name: 'Chicken Florentino',
          price: '$15.99',
          description: 'Chicken breast sautéed with spinach, garlic, olive oil & fresh lemon, topped with cheese & baked, served over penne pasta.'
        },
        {
          name: 'Chicken Milano',
          price: '$15.99',
          description: 'Sautéed chicken with spinach in a creamy white wine sauce served over spaghetti.'
        },
        {
          name: 'Chicken Broccoli',
          price: '$15.99',
          description: 'Chicken, broccoli in white cream over tortellini.'
        },
        {
          name: 'Chicken Cacciatore',
          price: '$15.99',
          description: 'Sautéed mushrooms, onions, peppers in marinara sauce over spaghetti.'
        }
      ],
      note: 'Add $1.00 to substitute gluten free.'
    },
    {
      id: 'entrees',
      title: 'Entrees',
      icon: '🍽️',
      bgColor: 'bg-red-50',
      items: [
        {
          name: 'Sausage Pizzaiola',
          price: '$15.99',
          description: 'Sausage sautéed with mushrooms, onions, green peppers, marinara, served over spaghetti pasta.'
        },
        {
          name: 'Spaghetti "The Works"',
          price: '$14.99',
          description: 'Spaghetti with meatballs, meat sauce, mushrooms & sausage.'
        },
        {
          name: 'Spaghetti w/ Meatballs',
          price: '$12.99'
        },
        {
          name: 'Spaghetti w/ Meat Sauce',
          price: '$12.99'
        },
        {
          name: 'Spaghetti w/ Mushrooms',
          price: '$12.99'
        },
        {
          name: 'Spaghetti w/ Olive Oil, Garlic & Basil',
          price: '$12.99'
        },
        {
          name: 'Spaghetti w/ Sausage',
          price: '$12.99'
        },
        {
          name: 'Spaghetti w/ Marinara Sauce',
          price: '$12.99'
        },
        {
          name: 'Chicken Minestrone',
          price: '$12.99'
        },
        {
          name: 'Minestrone Soup',
          price: '$11.99',
          description: 'Mixed vegetables & chicken base with a touch of marinara.'
        },
        {
          name: 'Tortellini Pesto',
          price: '$14.99',
          description: 'Cheese tortellini in a creamy pesto sauce.'
        },
        {
          name: 'Tortellini Modo Mio w/ Chicken',
          price: '$15.99',
          description: 'Cheese tortellini & chicken sautéed with basil, tomatoes, broccoli, garlic in a white wine sauce.'
        },
        {
          name: 'Tortellini Gorgonzola',
          price: '$15.99',
          description: 'Crumbled gorgonzola Italian blue cheese and Alfredo sauce.'
        },
        {
          name: 'Tortellini Siciliano',
          price: '$15.99',
          description: 'Cheese tortellini sautéed with ham, olives, cream sauce & a touch of marinara.'
        },
        {
          name: 'Tortellini Alla Panna',
          price: '$14.99',
          description: 'Cheese tortellini sautéed in cream sauce with a touch of marinara.'
        },
        {
          name: 'Tortellini Alla Panna w/ Chicken',
          price: '$16.99'
        },
        {
          name: 'Sausage Pepper Parmigiana',
          price: '$14.99',
          description: 'Sausage & peppers sautéed in marinara, topped with mozzarella cheese in a sherry wine over spaghetti.'
        },
        {
          name: 'Spaghetti Carbonara',
          price: '$14.99',
          description: 'Spaghetti with sautéed mushrooms, ham, in a rich cream & a touch of marinara over spaghetti.'
        }
      ]
    },
    {
      id: 'baked',
      title: 'Homemade Baked Pastas',
      icon: '🧀',
      bgColor: 'bg-amber-50',
      items: [
        {
          name: 'Baked Ziti',
          price: '$13.99',
          description: 'Penne pasta, ricotta cheese & marinara topped with mozzarella cheese.'
        },
        {
          name: 'Cheese Ravioli',
          price: '$13.99',
          description: 'Jumbo ravioli stuffed with ricotta cheese & topped with marinara & mozzarella cheese.'
        },
        {
          name: 'Lasagna',
          price: '$13.99',
          description: 'Pasta layered with beef, mozzarella cheese, topped with marinara & mozzarella cheese.'
        },
        {
          name: 'Meat Ravioli',
          price: '$13.99',
          description: 'Jumbo ravioli stuffed with beef & topped with marinara & mozzarella cheese.'
        },
        {
          name: 'Spinach Ravioli',
          price: '$13.99',
          description: 'Jumbo ravioli stuffed with spinach & cheese, topped with marinara & mozzarella cheese.'
        },
        {
          name: 'Eggplant Parmigiana',
          price: '$13.99',
          description: 'Breaded eggplant rolled & topped with marinara & mozzarella cheese, served over spaghetti.'
        },
        {
          name: 'Eggplant Rollatini',
          price: '$13.99',
          description: 'Breaded eggplant stuffed with ricotta cheese, rolled & topped with marinara & mozzarella cheese.'
        },
        {
          name: 'Manicotti',
          price: '$13.99',
          description: 'Pasta stuffed & rolled with ricotta cheese, topped with marinara & mozzarella cheese.'
        },
        {
          name: 'Pasta Sampler',
          price: '$13.99',
          description: 'Ravioli, lasagna & manicotti topped with marinara & mozzarella cheese.'
        }
      ],
      note: 'Add $1.00 to substitute Alfredo sauce for the marinara sauce.'
    },
    {
      id: 'seafood',
      title: 'Seafood',
      icon: '🐟',
      bgColor: 'bg-blue-50',
      items: [
        {
          name: 'Linguini Tuttomare',
          price: '$20.99',
          description: 'Mussels, shrimp, scallops, calamari, & baby clams sauteed in garlic & butter, served over linguini with red or white wine sauce.'
        },
        {
          name: 'Shrimp & Scallops Alfredo',
          price: '$18.99'
        },
        {
          name: 'Salmon Piccata',
          price: '$19.99',
          description: 'Sauteed in white wine, lemon, butter, capers & served over spaghetti.'
        },
        {
          name: 'Shrimp Alvino',
          price: '$17.99',
          description: 'Sauteed in butter, garlic, lemon, white wine & a touch of marinara sauce served over linguini.'
        },
        {
          name: 'Shrimp Gorgonzola',
          price: '$17.99',
          description: 'Crumbled gorgonzola Italian blue cheese served over penne pasta with Alfredo sauce.'
        },
        {
          name: 'Shrimp Pesto',
          price: '$17.99',
          description: 'Sauteed in a white wine sauce with pesto and served over penne pasta.'
        },
        {
          name: 'Lobster Ravioli',
          price: '$17.99',
          description: 'Ravioli pastas sauteed with tomatoes, lobster base, white cream sauce & a touch of marinara.'
        },
        {
          name: 'Shrimp Crab Alfredo',
          price: '$18.99',
          description: 'Brandy creamy wine sauce over fettuccini with real crab meat.'
        },
        {
          name: 'Shrimp Scaloppini',
          price: '$18.99',
          description: 'Shrimp, mussels & scallops sauteed in marinara and sherry wine, olive oil, garlic & basil, served over linguini.'
        },
        {
          name: 'Shrimp Diavolo',
          price: '$17.99',
          description: 'Sauteed in hot diavolo sauce & served over linguini.'
        },
        {
          name: 'Linguini with Clams - Red Sauce or White Sauce',
          price: '$15.99',
          description: 'Baby clams sauteed with a touch of marinara (red) or white wine (white), served over linguini.'
        }
      ]
    },
    {
      id: 'chicken-veal',
      title: 'Chicken or Veal',
      icon: '🍗',
      bgColor: 'bg-orange-50',
      items: [
        {
          name: 'Arrabbiata',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed with mushrooms, shallots, hot cherry peppers in white wine served over spaghetti.'
        },
        {
          name: 'Damabianka',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed with mushrooms in rich brandy cream sauce over spaghetti.'
        },
        {
          name: 'Marsala',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed with mushrooms in rich marsala wine, served over spaghetti.'
        },
        {
          name: 'Piccata',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed with capers in white wine, lemon & butter, served over spaghetti.'
        },
        {
          name: 'Capelini',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed in olive oil, garlic, basil, artichoke hearts & vegetables in white wine served over spaghetti.'
        },
        {
          name: 'Diavolo',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed in spice, light marinara & served over spaghetti.'
        },
        {
          name: 'Parmigiana',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Lightly breaded & topped with marinara & mozzarella cheese over spaghetti.'
        },
        {
          name: 'Siciliana',
          price: '$15.99',
          vealPrice: '$17.99',
          description: 'Sauteed with capers, mushrooms & artichoke hearts in white wine, lemon & butter sauce, served over spaghetti.'
        }
      ]
    },
    {
      id: 'sandwiches',
      title: 'Sandwiches',
      icon: '🥪',
      bgColor: 'bg-yellow-50',
      items: [
        {
          name: 'Calzone',
          price: '$13.99',
          description: 'Sausage, mozzarella & ricotta cheese wrapped in pizza crust, served with marinara.'
        },
        {
          name: 'Chicken Parmigiana Sub',
          price: '$13.99',
          description: 'Baked bread topped with chicken, marinara & mozzarella cheese.'
        },
        {
          name: 'Sausage Parmigiana Sub',
          price: '$13.99',
          description: 'Baked bread topped with sausage, marinara & mozzarella cheese.'
        },
        {
          name: 'Spinach Calzone',
          price: '$13.99',
          description: 'Spinach, mozzarella & ricotta cheese wrapped in pizza crust served with marinara.'
        },
        {
          name: 'Meatball Parmigiana Sub',
          price: '$13.99',
          description: 'Baked bread topped with meatballs, marinara & mozzarella cheese.'
        },
        {
          name: 'Philly Cheese Steak',
          price: '$13.99',
          description: 'Baked bread topped with sauteed onions, peppers, mozarella cheese & steak.'
        },
        {
          name: 'Stromboli',
          price: '$13.99',
          description: 'Pepperoni, sausage, Canadian bacon, hamburger & mozzarella cheese wrapped in pizza crust & served with marinara.'
        }
      ]
    },
    {
      id: 'pizza',
      title: 'Pizza',
      icon: '🍕',
      bgColor: 'bg-red-50',
      items: [
        {
          name: 'Cheese',
          price: 'S-$11.99 / M-$12.99 / L-$13.99'
        },
        {
          name: 'Supreme',
          price: 'S-$15.99 / M-$16.99 / L-$17.99'
        },
        {
          name: 'Create Your Own Pizza',
          price: '$1.00 per topping',
          description: 'Toppings: Pepperoni, Italian sausage, Canadian bacon, hamburger, mushrooms, green peppers, onions, black olives & jalapenos on request. Four toppings or more is a supreme.'
        },
        {
          name: 'White Pizza',
          price: 'M-$14.99 / L-$15.99',
          description: 'Garlic, ricotta and mozzarella cheese.'
        },
        {
          name: 'Gluten Free Cheese Pizza',
          price: '10"-$12.99'
        }
      ],
      note: 'S - 12", M - 14", L - 16"'
    }
  ];

  // Sauces section
  const sauces = {
    id: 'sauces',
    title: 'Sauces',
    icon: '🥄',
    bgColor: 'bg-purple-50',
    items: [
      { name: 'Alfredo Sauce', price: '$5.99' },
      { name: 'Alla Panna', price: '$5.99', description: 'Alfredo sauce with a little marinara.' },
      { name: 'Olive Oil, Garlic & Basil', price: '$3.50' },
      { name: 'Marinara Sauce', price: '$3.50' }
    ]
  };

 // Lunch Specials section
  const lunchSpecials = {
    id: 'lunch-specials',
    title: 'Lunch Specials',
    icon: '☀️',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
    subtitle: 'Tuesday – Friday 11:00am – 3:00pm (includes tossed salad)',
    highPrice: [
      'Chicken Alfredo - Chicken breast in a creamy white wine sauce served over fettuccini.',
      'Chicken Marsala - Sauteed with mushrooms in a rich marsala wine, served over spaghetti.',
      'Chicken Piccata - Sauteed with capers in white wine & lemon butter, served over spaghetti.',
      'Tortellini Alla Panna - Cheese tortellini sauteed in cream sauce with a touch of marinara.',
      'Chicken Broccoli - Chicken, broccoli in white cream over tortellini.',
      'Chicken Milano - Sautéed chicken with spinach in a creamy white wine sauce served over spaghetti.',
      'Chicken Pomodoro - Chicken sauteed with fresh tomatoes, basil, olive oil, garlic, light marinara, sherry wine & served over penne pasta.',
      'Fettuccini Alfredo - Creamy white wine sauce served over fettuccini.',
      'Sausage Pepper Parmigiana - Sausage & peppers sauteed in marinara, topped with mozzarella cheese in sherry wine over spaghetti.',
      'Chicken Cacciatore - Sauteed with mushrooms, onions, peppers in marinara, served over spaghetti.',
      'Chicken Parmigiana - Lightly breaded & topped with marinara & mozzarella cheese, served over spaghetti.',
      'Spaghetti Carbonara - Sauteed with mushrooms, ham, in a rich cream with a touch of marinara over spaghetti.',
      'Eggplant Parmigiana - Breaded & topped with marinara & mozzarella cheese, served over spaghetti.'
    ],
    lowPrice: [
      'Baked Ziti - Penne pasta, ricotta cheese and marinara topped with mozzarella cheese.',
      'Eggplant Rollatini - Breaded & stuffed with ricotta cheese, topped with marinara & mozzarella cheese.',
      'Meat Ravioli - Ravioli pasta stuffed with beef & topped with marinara and mozzarella cheese.',
      'Spaghetti with (Choose One...) - Marinara sauce, meatballs, meat sauce, mushrooms, olive oil + garlic, basil, or sausage. ADD ANOTHER FOR $1.00 EACH',
      'Calzone - Canadian Bacon, mozzarella & ricotta cheese wrapped in a pizza crust & served with marinara.',
      'Lasagna - Pasta layered with beef & mozzarella cheese topped with marinara & mozzarella cheese.',
      'Minestrone Soup - Mixed vegetables & chicken base.',
      'Spinach Ravioli - Ravioli pasta stuffed with spinach & topped with marinara and mozzarella cheese.',
      'Chicken Caesar Salad - Chicken served on fresh romaine lettuce, tossed with homemade Caesar dressing and croutons.',
      'Greek Salad (with or without chicken) - Lettuce, fresh tomatoes, black olives, feta cheese, onions, balsamic vinegar and olive oil dressing.',
      'Cheese Ravioli - Ravioli pasta stuffed with ricotta cheese, topped with marinara & mozzarella cheese.',
      'Manicotti - Pasta rolled & stuffed with ricotta, mozzarella cheese, topped with marinara & mozzarella cheese.',
      'Pasta Sampler - Meat ravioli, lasagna & manicotti.',
      'Spinach Calzone - Spinach, mozzarella cheese, ricotta cheese wrapped in pizza crust served with marinara.',
      'Stromboli - Pepperoni, sausage, Canadian bacon, hamburger, mozzarella cheese wrapped in pizza crust & served with marinara.'
    ]
  };


  // Beverages section
  const beverages = {
    id: 'beverages',
    title: 'Beverages',
    icon: '☕',
    bgColor: 'bg-brown-50',
    price: '$2.29',
    items: [
      'Pepsi', 'Diet Pepsi', 'Dr. Pepper', 'Diet Dr. Pepper', 'Mist', 'Mountain Dew',
      'Lemonade', 'Pink Lemonade', 'Strawberry', 'Melon Brisk Tea', 'Iced Tea', 'Coffee'
    ]
  };

  // All sections combined
  const allSections = [
    ...menuCategories,
    sauces,
    { ...lunchSpecials },
    beverages
  ];

  // Navigation items
  const navItems = [
    { id: 'appetizers', label: 'Appetizers', icon: '🍤' },
    { id: 'salads', label: 'Salads', icon: '🥗' },
    { id: 'specialties', label: 'House Specialties', icon: '🍝' },
    { id: 'entrees', label: 'Entrees', icon: '🍽️' },
    { id: 'baked', label: 'Baked Pastas', icon: '🧀' },
    { id: 'seafood', label: 'Seafood', icon: '🐟' },
    { id: 'chicken-veal', label: 'Chicken/Veal', icon: '🍗' },
    { id: 'sandwiches', label: 'Sandwiches', icon: '🥪' },
    { id: 'pizza', label: 'Pizza', icon: '🍕' },
    { id: 'sauces', label: 'Sauces', icon: '🥄' },
    { id: 'lunch-specials', label: 'Lunch Specials', icon: '☀️' },
    { id: 'beverages', label: 'Beverages', icon: '☕' }
  ];

  // Filter menu items based on search
  const filterItems = (items: MenuItem[] | string[]) => {
    if (!searchTerm) return items;
    return items.filter(item => {
      if (typeof item === 'string') {
        return item.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
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
          if (rect.top <= 100 && rect.bottom >= 100) {
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

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-deep-red text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="font-lato text-xl max-w-2xl mx-auto">
            Authentic Italian cuisine crafted with love and tradition
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="sticky top-0 z-40 bg-white shadow-lg border-b-2 border-gold-400">
        <div className="container mx-auto px-4 py-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search menu items..."
              className="pl-10 py-2 border-2 border-gray-200 focus:border-deep-red"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-16 z-30 bg-white shadow-md">
        <ScrollArea className="w-full">
          <div className="flex space-x-1 p-2 min-w-max">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className={`flex items-center space-x-2 whitespace-nowrap px-4 py-2 ${
                  activeSection === item.id 
                    ? 'bg-deep-red text-white' 
                    : 'hover:bg-deep-red hover:text-white'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-lato text-sm">{item.label}</span>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Regular Menu Categories */}
        {menuCategories.map((category) => {
          const filteredItems = filterItems(category.items);
          if (filteredItems.length === 0 && searchTerm) return null;

          return (
            <section
              key={category.id}
              ref={(el) => { sectionRefs.current[category.id] = el; }}
              className={`mb-12 rounded-lg shadow-lg overflow-hidden ${category.bgColor}`}
            >
              <div className="bg-white p-6 border-l-4 border-deep-red">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="font-cinzel text-3xl font-bold text-deep-red">
                    {category.title}
                  </h2>
                </div>
                {category.note && (
                  <p className="font-lato text-sm text-espresso-600 italic mb-6 bg-olive-50 p-3 rounded">
                    {category.note}
                  </p>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-cinzel font-semibold text-deep-red text-lg flex-1">
                          {item.name}
                        </h3>
                        <span className="font-lato font-bold text-gold-500 text-lg ml-4">
                          {item.vealPrice ? `C-${item.price} / V-${item.vealPrice}` : item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="font-lato text-espresso-700 italic text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Sauces Section */}
        <section
          ref={(el) => { sectionRefs.current['sauces'] = el; }}
          className={`mb-12 rounded-lg shadow-lg overflow-hidden ${sauces.bgColor}`}
        >
          <div className="bg-white p-6 border-l-4 border-deep-red">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{sauces.icon}</span>
              <h2 className="font-cinzel text-3xl font-bold text-deep-red">
                {sauces.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {sauces.items.map((sauce, index) => (
                <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-2">
                  <div className="flex-1">
                    <h3 className="font-cinzel font-semibold text-deep-red">{sauce.name}</h3>
                    {sauce.description && (
                      <p className="font-lato text-espresso-700 italic text-sm">{sauce.description}</p>
                    )}
                  </div>
                  <span className="font-lato font-bold text-gold-500 ml-4">{sauce.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lunch Specials Section */}
        <section
          ref={(el) => { sectionRefs.current['lunch-specials'] = el; }}
          className={`mb-12 rounded-lg shadow-lg overflow-hidden ${lunchSpecials.bgColor}`}
        >
          <div className="bg-white p-6 border-l-4 border-deep-red">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{lunchSpecials.icon}</span>
              <h2 className="font-cinzel text-3xl font-bold text-deep-red">
                {lunchSpecials.title}
              </h2>
            </div>
            <p className="font-lato text-espresso-700 mb-6 font-semibold">
              {lunchSpecials.subtitle}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-cinzel text-2xl font-bold text-deep-red mb-4 text-center">$11.99</h3>
                <div className="space-y-3">
                  {lunchSpecials.highPrice.map((item, index) => (
                    <div key={index} className="p-3 bg-white rounded shadow-sm">
                      <p className="font-lato text-sm text-espresso-700">
                        • {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-cinzel text-2xl font-bold text-deep-red mb-4 text-center">$10.99</h3>
                <div className="space-y-3">
                  {lunchSpecials.lowPrice.map((item, index) => (
                    <div key={index} className="p-3 bg-white rounded shadow-sm">
                      <p className="font-lato text-sm text-espresso-700">
                        • {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beverages Section */}
        <section
          ref={(el) => { sectionRefs.current['beverages'] = el; }}
          className={`mb-12 rounded-lg shadow-lg overflow-hidden ${beverages.bgColor}`}
        >
          <div className="bg-white p-6 border-l-4 border-deep-red">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{beverages.icon}</span>
              <h2 className="font-cinzel text-3xl font-bold text-deep-red">
                {beverages.title} - {beverages.price}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {beverages.items.map((beverage, index) => (
                <p key={index} className="font-lato text-espresso-700 p-2 bg-cream-50 rounded">
                  • {beverage}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center bg-olive-50 rounded-lg p-6 shadow-lg">
          <p className="font-lato text-espresso-800 font-semibold text-lg">
            All dishes come with fresh baked Italian dinner rolls.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-deep-red hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Menu;
