
import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  vealPrice?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  note?: string;
}

interface BeverageSection {
  id: string;
  title: string;
  price: string;
  items: string[];
}

interface LunchSpecialSection {
  id: string;
  title: string;
  subtitle: string;
  highPrice: string[];
  lowPrice: string[];
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
    items: [
      { name: 'Alfredo Sauce', price: '$5.99' },
      { name: 'Alla Panna', price: '$5.99', description: 'Alfredo sauce with a little marinara.' },
      { name: 'Olive Oil, Garlic & Basil', price: '$3.50' },
      { name: 'Marinara Sauce', price: '$3.50' }
    ]
  };

  // Lunch Specials section
  const lunchSpecials: LunchSpecialSection = {
    id: 'lunch-specials',
    title: 'Lunch Specials',
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
      'Sausage Pepper Parmigiana - Sausage & peppers sautéed in marinara, topped with mozzarella cheese in sherry wine over spaghetti.',
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
  const beverages: BeverageSection = {
    id: 'beverages',
    title: 'Beverages',
    price: '$2.29',
    items: [
      'Pepsi', 'Diet Pepsi', 'Dr. Pepper', 'Diet Dr. Pepper', 'Mist', 'Mountain Dew',
      'Lemonade', 'Pink Lemonade', 'Strawberry', 'Melon Brisk Tea', 'Iced Tea', 'Coffee'
    ]
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
    { id: 'pizza', label: 'Pizza' },
    { id: 'sauces', label: 'Sauces' },
    { id: 'lunch-specials', label: 'Lunch Specials' },
    { id: 'beverages', label: 'Beverages' }
  ];

  // Filter menu items based on search
  const filterMenuItems = (items: MenuItem[]) => {
    if (!searchTerm) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const filterStringItems = (items: string[]) => {
    if (!searchTerm) return items;
    return items.filter(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-deep-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-6">Our Menu</h1>
          <p className="font-lato text-xl max-w-2xl mx-auto text-cream-50">
            Authentic Italian cuisine crafted with love and tradition
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search menu items..."
              className="pl-10 py-3 border border-gray-300 focus:border-deep-red focus:ring-1 focus:ring-deep-red rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200">
        <ScrollArea className="w-full">
          <div className="flex space-x-1 p-3 min-w-max">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`whitespace-nowrap px-4 py-2 font-lato text-sm transition-colors ${
                  activeSection === item.id 
                    ? 'bg-deep-red text-white' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-deep-red'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Regular Menu Categories */}
        {menuCategories.map((category) => {
          const filteredItems = filterMenuItems(category.items);
          if (filteredItems.length === 0 && searchTerm) return null;

          return (
            <section
              key={category.id}
              ref={(el) => { sectionRefs.current[category.id] = el; }}
              className="mb-16"
            >
              <div className="mb-8">
                <h2 className="font-cinzel text-4xl font-bold text-deep-red mb-4">
                  {category.title}
                </h2>
                <div className="w-16 h-0.5 bg-deep-red mb-6"></div>
                {category.note && (
                  <p className="font-lato text-sm text-gray-600 italic mb-6 bg-gray-50 p-4 rounded-lg">
                    {category.note}
                  </p>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {filteredItems.map((item, index) => (
                  <div key={index} className="border-b border-dotted border-gray-300 pb-6 mb-6 last:border-b-0 last:mb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-lato font-bold text-lg text-gray-900 flex-1 pr-4">
                        {item.name}
                      </h3>
                      <div className="text-right">
                        <span className="inline-block bg-deep-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {item.vealPrice ? `C ${item.price} / V ${item.vealPrice}` : item.price}
                        </span>
                      </div>
                    </div>
                    {item.description && (
                      <p className="font-lato text-gray-600 italic text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Sauces Section */}
        <section
          ref={(el) => { sectionRefs.current['sauces'] = el; }}
          className="mb-16"
        >
          <div className="mb-8">
            <h2 className="font-cinzel text-4xl font-bold text-deep-red mb-4">
              {sauces.title}
            </h2>
            <div className="w-16 h-0.5 bg-deep-red mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {sauces.items.map((sauce, index) => (
              <div key={index} className="flex justify-between items-start border-b border-dotted border-gray-300 pb-4">
                <div className="flex-1">
                  <h3 className="font-lato font-bold text-lg text-gray-900">{sauce.name}</h3>
                  {sauce.description && (
                    <p className="font-lato text-gray-600 italic text-sm">{sauce.description}</p>
                  )}
                </div>
                <span className="inline-block bg-deep-red text-white px-3 py-1 rounded-full text-sm font-semibold ml-4">
                  {sauce.price}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Lunch Specials Section */}
        <section
          ref={(el) => { sectionRefs.current['lunch-specials'] = el; }}
          className="mb-16"
        >
          <div className="mb-8">
            <h2 className="font-cinzel text-4xl font-bold text-deep-red mb-4">
              {lunchSpecials.title}
            </h2>
            <div className="w-16 h-0.5 bg-deep-red mb-6"></div>
            <p className="font-lato text-gray-700 text-lg font-medium">
              {lunchSpecials.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-center mb-6">
                <span className="inline-block bg-deep-red text-white px-6 py-2 rounded-full text-xl font-bold">
                  $11.99
                </span>
              </div>
              <div className="space-y-4">
                {lunchSpecials.highPrice.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <p className="font-lato text-gray-800 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-center mb-6">
                <span className="inline-block bg-olive-green text-white px-6 py-2 rounded-full text-xl font-bold">
                  $10.99
                </span>
              </div>
              <div className="space-y-4">
                {lunchSpecials.lowPrice.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <p className="font-lato text-gray-800 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beverages Section */}
        <section
          ref={(el) => { sectionRefs.current['beverages'] = el; }}
          className="mb-16"
        >
          <div className="mb-8">
            <h2 className="font-cinzel text-4xl font-bold text-deep-red mb-4">
              {beverages.title} - {beverages.price}
            </h2>
            <div className="w-16 h-0.5 bg-deep-red mb-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filterStringItems(beverages.items).map((beverage, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="font-lato text-gray-800 font-medium">{beverage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center bg-cream-50 rounded-lg p-8 border border-gray-200">
          <p className="font-lato text-gray-800 font-semibold text-lg">
            All dishes come with fresh baked Italian dinner rolls.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-deep-red hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Menu;
