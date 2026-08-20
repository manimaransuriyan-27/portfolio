import {
  Home,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { personalData } from "@/constants/profile";
import { cn } from "@/lib/utils";

const sectionItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: Mail },
];

const iconLinkClass =
  "flex size-full items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-cyan-600 dark:hover:text-cyan-400";

function ThemeDockIcon() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className={iconLinkClass}
          />
        }
      >
        {resolvedTheme === "dark" ? (
          <Sun className="size-full" />
        ) : (
          <Moon className="size-full" />
        )}
      </TooltipTrigger>
      <TooltipContent>
        <p>Toggle theme</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function DockNav() {
  return (
    <TooltipProvider>
      <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
        <Dock
          direction="middle"
          className="border-border bg-card/70 shadow-2xl shadow-black/10 dark:shadow-black/50"
        >
          {sectionItems.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger render={<a href={item.href} aria-label={item.name} className={iconLinkClass} />}>
                  <item.icon className="size-full" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-8 bg-border" />

          <DockIcon>
            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    href={personalData.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className={cn(iconLinkClass, "hover:text-cyan-600 dark:hover:text-cyan-400")}
                  />
                }
              >
                <Github className="size-full" />
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    href={personalData.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className={cn(iconLinkClass, "hover:text-purple-600 dark:hover:text-purple-400")}
                  />
                }
              >
                <Linkedin className="size-full" />
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator orientation="vertical" className="h-8 bg-border" />

          <DockIcon>
            <ThemeDockIcon />
          </DockIcon>
        </Dock>
      </div>
    </TooltipProvider>
  );
}
