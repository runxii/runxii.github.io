import React from 'react';
import { Project } from '@/data/proejcts';
import { getRoleById, cn } from '@/lib/utils';
import { Zap, Link, Code } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const role = getRoleById(project.roleId);
    const roleColor = role ? `text-${role.color}` : 'text-foreground';
    const roleBorder = role ? `border-${role.color}` : 'border-foreground';

    return (
        <div className={cn(
            "pixel-border p-6 bg-black shadow-brutal transition-all duration-150",
            "hover:shadow-brutal-sm hover:translate-x-[-1px] hover:translate-y-[-1px]",
            roleBorder // Apply border color based on the associated role
        )}>

            {/* Title and Role */}
            <div className="flex justify-between items-start mb-3 border-b-2 border-retro-gray/50 pb-2">
                <h3 className="font-pixel text-lg uppercase leading-tight mr-4">
                    {project.title}
                </h3>
                <span className={cn("font-mono text-xs font-bold px-2 py-1 border border-foreground/50", roleColor)}>
          {project.roleId}
        </span>
            </div>

            {/* Description */}
            <p className="font-mono text-sm mb-4 text-foreground/80 min-h-[50px]">
                {project.shortDescription}
            </p>

            {/* Tech Stack / Stats */}
            <div className="border-t border-retro-gray/50 pt-2 mb-4">
                <div className="flex items-center text-xs font-mono text-retro-yellow mb-2">
                    <Zap className="w-3 h-3 mr-1" />
                    <span className="font-bold">{project.expPoints} XP GAINED</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-retro-gray uppercase">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="px-2 py-0.5 border border-retro-gray/70">
              {tech}
            </span>
                    ))}
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 border-t-2 border-foreground pt-4">
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("font-pixel text-xs flex items-center hover:text-retro-green", roleColor)}
                    >
                        <Link className="w-3 h-3 mr-1" /> DEMO
                    </a>
                )}
                {project.repoUrl && (
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("font-pixel text-xs flex items-center hover:text-retro-green", roleColor)}
                    >
                        <Code className="w-3 h-3 mr-1" /> REPO
                    </a>
                )}
            </div>
        </div>
    );
};