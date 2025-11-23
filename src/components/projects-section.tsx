"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import React from "react";

const BLUR_FADE_DELAY = 0.04;

const categories = ["All", "Full Stack", "Frontend", "Backend", "AI Projects"] as const;

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") {
      return DATA.projects;
    }
    return DATA.projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my Work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, that include from{" "}
                <br />
                <strong> Simple websites to complex AI/ML projects</strong>.
                Here are a few of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
          <div className="flex flex-wrap justify-center gap-2 max-w-[800px] mx-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "transition-all duration-200",
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "hover:bg-accent"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </BlurFade>
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {filteredProjects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  imageDimensions={{ width: 800, height: 600 }}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        ) : (
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex flex-col items-center justify-center py-16 px-4 max-w-[800px] mx-auto">
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-xl font-semibold text-muted-foreground">
                  PSSSSSS... Cooking some backend magic
                </h3>
                <p className="text-sm text-muted-foreground/80">
                  Will be shown here soon...
                </p>
                <div className="mt-6 text-xs text-muted-foreground/60 font-mono">
                  <code className="block mb-2">$ npm run build-backend</code>
                  <code className="block">[INFO] Backend projects loading...</code>
                </div>
              </div>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
}

