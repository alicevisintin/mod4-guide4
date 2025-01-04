import React, { useState } from "react";
import { Button } from "@shadcn/ui";
import { cn } from "@shadcn/ui";

interface MenuItem {
  label: string;
  href: string;
}

interface HamburgerMenuProps {
  menuItems: MenuItem[];
  backgroundColor?: string;
  iconColor?: string;
  iconSize?: string;
  transitionDuration?: number;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  menuItems,
  backgroundColor = "#fff",
  iconColor = "#000",
  iconSize = "30px",
  transitionDuration = 0.3,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {}
      <Button
        onClick={toggleMenu}
        variant="ghost"
        aria-label="Toggle Menu"
        className={`flex flex-col justify-between items-center w-[${iconSize}] h-[${iconSize}]`}
      >
        <span
          className={cn(
            "block w-[30px] h-[4px] bg-[iconColor] transition-all",
            isOpen && "rotate-45 translate-y-[10px]"
          )}
        />
        <span
          className={cn(
            "block w-[30px] h-[4px] bg-[iconColor] transition-all",
            isOpen && "opacity-0"
          )}
        />
        <span
          className={cn(
            "block w-[30px] h-[4px] bg-[iconColor] transition-all",
            isOpen && "-rotate-45 translate-y-[-10px]"
          )}
        />
      </Button>

      {}
      <div
        className={cn(
          "absolute top-full right-0 w-[200px] bg-[backgroundColor] transition-transform transform origin-top",
          isOpen ? "scale-y-100" : "scale-y-0",
          `duration-[${transitionDuration}s]`
        )}
      >
        <ul className="list-none p-0">
          {menuItems.map((item, index) => (
            <li key={index} className="p-3 text-center">
              <a href={item.href} className="text-black no-underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
