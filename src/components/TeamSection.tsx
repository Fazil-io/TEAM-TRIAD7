import React from 'react';
import { teamMembers } from '../data/team';
import { 
  Users, 
  Mail, 
  Edit3
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-sky-600" />
            <span>Smart India Hackathon 2026 Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            Meet TRIAD7
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Building technology for meaningful public impact.
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium">
            <Edit3 className="w-3.5 h-3.5 text-slate-400" />
            <span>Configurable data: customize team members in <code className="text-slate-800 font-mono bg-white px-1 py-0.5 rounded border border-slate-200">src/data/team.ts</code></span>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar Initial Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.colorScheme} text-white flex items-center justify-center font-bold text-lg font-['Outfit'] shadow-md group-hover:scale-105 transition-transform duration-200`}>
                    {member.avatarInitial}
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {member.focus}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] tracking-tight">
                  {member.name}
                </h3>
                <span className="text-xs font-semibold text-sky-700 block mt-0.5 mb-3">
                  {member.role}
                </span>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {member.bio}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-50 text-slate-600 border border-slate-200/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social / Contact Links */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-slate-400">
                <span className="text-[11px] font-mono text-slate-400">
                  SIH 2026 Contributor
                </span>

                <div className="flex items-center gap-2">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
