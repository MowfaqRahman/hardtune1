import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";

const navigationItems = [
  { label: "Shop", hasDropdown: true },
  { label: "On Sale", hasDropdown: false },
  { label: "New Arrivals", hasDropdown: false },
  { label: "Brands", hasDropdown: false },
];

const categoryTabs = [
  { id: "chair", label: "Chair" },
  { id: "beds", label: "Beds" },
  { id: "sofa", label: "Sofa" },
  { id: "lamp", label: "Lamp" },
];

const products = [
  {
    id: 1,
    name: "Sakarias Armchair",
    category: "Chair",
    price: 392,
    image: "/group-3742.png",
  },
  {
    id: 2,
    name: "Baltsar Chair",
    category: "Chair",
    price: 299,
    image: "/rectangle-55.svg",
  },
  {
    id: 3,
    name: "Anjay Chair",
    category: "Chair",
    price: 519,
    image: "/rectangle-55.svg",
  },
  {
    id: 4,
    name: "Nyantuy Chair",
    category: "Chair",
    price: 921,
    image: "/group-3742-1.png",
  },
];

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <nav className="flex items-center justify-between px-[100px] py-8">
        <div className="flex items-center gap-12">
          <h1 className="[font-family:'Volkhov',Helvetica] font-normal text-[#484848] text-[52px] tracking-[0] leading-[52px]">
            HARD
          </h1>

          <div className="flex items-center gap-6">
            {navigationItems.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] cursor-pointer">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <img className="w-4 h-4" alt="Dropdown" src="/frame.svg" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5 px-4 py-3 bg-[#efefef] rounded-[62px] w-[450px]">
            <SearchIcon className="w-6 h-6 text-[#00000066]" />
            <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#00000066] text-base tracking-[0] leading-[normal] flex-1">
              SearchIcon for products...
            </span>
            <span className="[font-family:'Inder',Helvetica] font-normal text-[#00000066] text-base tracking-[0] leading-[normal]">
              All
            </span>
            <span className="rotate-90 [font-family:'Inder',Helvetica] font-normal text-[#00000066] text-base tracking-[0] leading-[normal]">
              &gt;
            </span>
          </div>

          <ShoppingCartIcon className="w-6 h-6 cursor-pointer" />
          <UserIcon className="w-6 h-6 cursor-pointer" />
        </div>
      </nav>

      <section className="relative px-[100px] py-12 mb-24">
        <div className="grid grid-cols-3 gap-6 h-[756px]">
          <div className="relative bg-[#e0e0e0] rounded-[10px] overflow-hidden">
            <img
              className="absolute bottom-0 left-0 w-full h-[553px] object-cover"
              alt="B w"
              src="/b-w.png"
            />
          </div>

          <div className="relative flex flex-col items-center justify-center bg-[url(/bg.svg)] bg-cover bg-center rounded-[10px]">
            <div className="text-center">
              <div className="[font-family:'Poppins',Helvetica] font-medium text-[#484848] text-[91px] tracking-[-3.64px] leading-[91px] whitespace-nowrap">
                ULTIMATE
              </div>
              <div className="[-webkit-text-stroke:1px_#484848] [font-family:'Poppins',Helvetica] font-medium text-transparent text-[187px] tracking-[-10.29px] leading-[187px] whitespace-nowrap">
                SALE
              </div>
              <Button className="mt-12 bg-black text-white rounded-[10px] shadow-[0px_20px_35px_#00000026] px-[59px] py-5 h-14 [font-family:'Poppins',Helvetica] font-medium text-base tracking-[0] leading-4">
                SHOP NOW
              </Button>
            </div>
          </div>

          <div className="relative bg-[url(/bg-1.svg)] bg-cover bg-center rounded-[10px]" />
        </div>

        <img
          className="absolute top-12 left-[100px] w-[392px] h-[756px] z-10"
          alt="Product"
          src="/image-2-29.png"
        />
      </section>

      <section className="px-[100px] mb-24">
        <div className="flex items-center justify-between mb-12">
          <img
            className="w-[494px] h-[329px] object-cover"
            alt="Feature"
            src="/img-7418copy-2.png"
          />
          <img
            className="w-[272px] h-[272px] object-cover"
            alt="Feature"
            src="/images-2.png"
          />
        </div>
      </section>

      <section className="px-[100px] mb-24">
        <h2 className="text-center [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#1e1e1e] text-[50.9px] tracking-[0] leading-[normal] mb-8">
          Best Selling Product
        </h2>

        <div className="flex justify-center mb-12">
          <ToggleGroup
            type="single"
            defaultValue="chair"
            className="bg-[#eeeeee] rounded-[53.33px] p-[7.27px]"
          >
            {categoryTabs.map((tab) => (
              <ToggleGroupItem
                key={tab.id}
                value={tab.id}
                className="rounded-[38.79px] px-[12.12px] py-[4.85px] data-[state=on]:bg-white [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-[#1e1e1e] text-[21.8px] leading-[40.4px] tracking-[0] opacity-80 h-auto"
              >
                {tab.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[108px] h-[108px] rounded-full"
          >
            <ChevronLeftIcon className="w-12 h-12" />
          </Button>

          <div className="grid grid-cols-4 gap-[50.9px] px-[150px]">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-white rounded-[24.24px] border-0 shadow-sm"
              >
                <CardContent className="p-0">
                  <div className="relative w-full h-[290px] bg-gray-100 rounded-t-[24.24px] flex items-center justify-center">
                    <img
                      className="max-w-[242px] max-h-[147px] object-contain"
                      alt={product.name}
                      src={product.image}
                    />
                  </div>

                  <div className="p-[26px]">
                    <div className="mb-[7.4px]">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#8d8d8d] text-[20.3px] leading-[normal] tracking-[0]">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#0d1a39] text-[25.8px] tracking-[0] leading-[normal] mb-[73.9px]">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-[3.7px]">
                        <span className="[font-family:'Inter',Helvetica] font-semibold text-[#0d1a39] text-[18.5px] tracking-[0] leading-[normal]">
                          $
                        </span>
                        <span className="[font-family:'Inter',Helvetica] font-semibold text-[#0d1a39] text-[25.8px] tracking-[0] leading-[normal]">
                          {product.price}
                        </span>
                      </div>
                      <Button
                        size="icon"
                        className="w-[59.08px] h-[59.08px] rounded-full bg-black hover:bg-black/90"
                      >
                        <img
                          className="w-6 h-6"
                          alt="Add to cart"
                          src="/frame-174.svg"
                        />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[108px] h-[108px] rounded-full"
          >
            <ChevronRightIcon className="w-12 h-12" />
          </Button>
        </div>
      </section>

      <section className="px-[100px] mb-24">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              className="w-full rounded-[49px] blur-[25px] object-cover"
              alt="Background"
              src="/rectangle-1453.png"
            />
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[629px] h-[445px]"
              alt="Feature car"
              src="/rectangle-1456.png"
            />
          </div>

          <div>
            <p className="opacity-80 [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-[#1e1e1e] text-lg tracking-[0] leading-[33.3px] mb-8">
              You don&apos;t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and lucurious style and with premium quality
              materials
            </p>
            <div className="flex items-center gap-[13px]">
              <span className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-[#e58311] text-sm tracking-[0] leading-[25.9px]">
                More Info
              </span>
              <img
                className="w-12 h-6"
                alt="Arrow"
                src="/grommet-icons-form-next-link.svg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-[100px] mb-24">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#1e1e1e] text-[42px] tracking-[0] leading-[normal] mb-8">
              Very Serious Materials For Making Furniture
            </h2>
            <p className="opacity-80 [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-[#1e1e1e] text-lg tracking-[0] leading-[33.3px]">
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
          </div>

          <div className="relative">
            <img
              className="w-full rounded-[49px] blur-[25px] object-cover"
              alt="Background"
              src="/rectangle-1457.png"
            />
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[629px] h-[445px] rounded-[20px] object-cover"
              alt="Feature materials"
              src="/rectangle-1459.png"
            />
            <div className="absolute top-[100px] left-[-100px] w-[223px] h-[229px]">
              <img
                className="absolute top-0 left-0 w-full h-full"
                alt="Material sample"
                src="/rectangle-1450.png"
              />
            </div>
            <div className="absolute bottom-[100px] left-[-100px] w-[223px] h-[317px]">
              <img
                className="absolute top-0 left-0 w-full h-full"
                alt="Material sample"
                src="/rectangle-1450-1.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
