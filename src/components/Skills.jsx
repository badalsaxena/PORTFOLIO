import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'TypeScript', level: 75 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'SQL', level: 65 },
    { name: 'Firebase', level: 75 },
  ];

  const otherSkills = [
    { name: 'Git/GitHub', level: 85 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'Responsive Design', level: 90 },
    { name: 'RESTful APIs', level: 80 },
    { name: 'Testing (Jest)', level: 65 },
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-white">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            I've worked with a range of technologies in the web development world.
            Here are my core technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-blue-500/20 mr-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          {/* Backend Skills */}
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-blue-500/20 mr-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          {/* Other Skills */}
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-blue-500/20 mr-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Other Skills</h3>
            </div>
            {otherSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gray-700 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Development Workflow</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: 1, title: 'Planning', desc: 'Requirements gathering and project planning' },
              { step: 2, title: 'Design', desc: 'UI/UX design and prototyping' },
              { step: 3, title: 'Development', desc: 'Clean, efficient, and maintainable code' },
              { step: 4, title: 'Testing', desc: 'Unit testing and bug fixing' },
              { step: 5, title: 'Deployment', desc: 'Optimization and deployment' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 