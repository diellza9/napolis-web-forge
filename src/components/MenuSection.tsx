
import React, { useState } from 'react';
import { ChefHat, Utensils, Wine, Fish, Sandwich, Pizza, Coffee } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  vealPrice?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
  note?: string;
}

const MenuSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const menuCategories: MenuCategory[] = [
    {
      id: 'appetizers',
      title: 'Appetizers',
      icon: <Utensils className="h-5 w-5" />,
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
      icon: <Wine className="h-5 w-5" />,
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
      icon: <ChefHat className="h-5 w-5" />,
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
      icon: <Utensils className="h-5 w-5" />,
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
      icon: <ChefHat className="h-5 w-5" />,
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
      icon: <Fish className="h-5 w-5" />,
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
      icon: <ChefHat className="h-5 w-5" />,
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
      icon: <Sandwich className="h-5 w-5" />,
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
      icon: <Pizza className="h-5 w-5" />,
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

  const sauces = [
    { name: 'Alfredo Sauce', price: '$5.99' },
    { name: 'Alla Panna', price: '$5.99', description: 'Alfredo sauce with a little marinara.' },
    { name: 'Olive Oil, Garlic & Basil', price: '$3.50' },
    { name: 'Marinara Sauce', price: '$3.50' }
  ];

  const lunchSpecials = {
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

  const beverages = [
    'Pepsi', 'Diet Pepsi', 'Dr. Pepper', 'Diet Dr. Pepper', 'Mist', 'Mountain Dew',
    'Lemonade', 'Pink Lemonade', 'Strawberry', 'Melon Brisk Tea', 'Iced Tea', 'Coffee'
  ];

  const renderMenuItem = (item: MenuItem) => (
    <div key={item.name} className="mb-4 last:mb-0">
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-cinzel font-semibold text-deep-red text-lg flex-1">
          {item.name}
        </h4>
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
  );

  return (
    <section id="menu" className="py-20 bg-cream-50 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gold-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-deep-red rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-olive-green rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-5xl font-bold text-deep-red mb-6">Our Menu</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="font-lato text-xl text-espresso-800 max-w-2xl mx-auto">
            Authentic Italian cuisine crafted with love and tradition
          </p>
        </div>

        {/* Desktop Tabs / Mobile Accordion */}
        <div className="hidden lg:block">
          <Tabs defaultValue="appetizers" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9 mb-8 bg-white shadow-lg">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center gap-1 p-3 font-cinzel data-[state=active]:bg-deep-red data-[state=active]:text-white"
                >
                  {category.icon}
                  <span className="text-xs">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    {category.icon}
                    <h3 className="font-cinzel text-3xl font-bold text-deep-red">
                      {category.title}
                    </h3>
                  </div>
                  {category.note && (
                    <p className="font-lato text-sm text-espresso-600 italic mb-6 bg-olive-50 p-3 rounded">
                      {category.note}
                    </p>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map(renderMenuItem)}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden">
          <Accordion type="single" collapsible className="space-y-4">
            {menuCategories.map((category) => (
              <AccordionItem key={category.id} value={category.id} className="bg-white rounded-lg shadow-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <span className="font-cinzel text-xl font-bold text-deep-red">
                      {category.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  {category.note && (
                    <p className="font-lato text-sm text-espresso-600 italic mb-4 bg-olive-50 p-3 rounded">
                      {category.note}
                    </p>
                  )}
                  <div className="space-y-4">
                    {category.items.map(renderMenuItem)}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Sauces Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="font-cinzel text-2xl font-bold text-deep-red mb-6 flex items-center gap-3">
            <Utensils className="h-6 w-6" />
            Sauces
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {sauces.map((sauce) => (
              <div key={sauce.name} className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-cinzel font-semibold text-deep-red">{sauce.name}</h4>
                  {sauce.description && (
                    <p className="font-lato text-espresso-700 italic text-sm">{sauce.description}</p>
                  )}
                </div>
                <span className="font-lato font-bold text-gold-500 ml-4">{sauce.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lunch Specials */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="font-cinzel text-2xl font-bold text-deep-red mb-4">
            {lunchSpecials.title}
          </h3>
          <p className="font-lato text-espresso-700 mb-6 font-semibold">
            {lunchSpecials.subtitle}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-cinzel text-xl font-bold text-gold-500 mb-4">$11.99</h4>
              <ul className="space-y-2">
                {lunchSpecials.highPrice.map((item, index) => (
                  <li key={index} className="font-lato text-sm text-espresso-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-cinzel text-xl font-bold text-gold-500 mb-4">$10.99</h4>
              <ul className="space-y-2">
                {lunchSpecials.lowPrice.map((item, index) => (
                  <li key={index} className="font-lato text-sm text-espresso-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Beverages */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="font-cinzel text-2xl font-bold text-deep-red mb-6 flex items-center gap-3">
            <Coffee className="h-6 w-6" />
            Beverages - $2.29
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {beverages.map((beverage) => (
              <p key={beverage} className="font-lato text-espresso-700">• {beverage}</p>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center bg-olive-50 rounded-lg p-6">
          <p className="font-lato text-espresso-800 font-semibold">
            All dishes come with fresh baked Italian dinner rolls.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
