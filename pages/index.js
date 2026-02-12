export default function Home() {
  const resume = {
  "name": "Sai Varshith Pujala",
  "title": "",
  "email": "",
  "phone": "",
  "location": "",
  "summary": "SAI VARSHITH PUJALA\nGuntur, Andhra Pradesh | +91 8185985336 | saivarshith8284@gmail.com\nLinkedIn: linkedin.com/in/saivarshith-pujala | GitHub: github.com/saivarshith8284\nCAREER OBJECTIVE\nDetail-oriented Analyst Trainee with hands-on experience in full-stack web development, REST API\nintegration, databases, and AI-enabled applications. Seeking an entry-level opportunity at Deloitte\nto contribute to client-focused solutions through requirement understanding, basic testing,\ndocumentation, and continuous learning while following defined development processes.\nEDUCATION\nBachelor of Technology (B.Tech) – Computer Science & Engineering (2023–2026)\nVasireddy Venkatadri Institute of Technology | CGPA: 6.5\nDiploma – Civil Engineering (2019–2023)\nChundi Ranganayakulu Polytechnic College | Percentage: 67.26%\nSecondary Education (X) (2019)\nSantans English Medium School | CGPA: 8.7\nTECHNICAL SKILLS\nProgramming: Java, JavaScript, C\nWeb & Backend: HTML, CSS, React, Node.js, Express.js, Next.js, REST APIs\nDatabases: MongoDB, PostgreSQL\nTools & Platforms: Git, GitHub, VS Code, Postman, AWS Academy, Generative AI Tools\nBasic Testing & Process Knowledge: Unit Testing (basic), API Testing (basic), Debugging, SDLC\nBasics, Agile Awareness\nCore Competencies: Requirement Understanding, Technical Documentation, Problem Solving,\nAnalytical Thinking, Team Collaboration, Communication Skills\nPROJECTS\nUniversal AI – Full Stack AI Chat Application\n• Developed a full-stack AI chat application using Next.js and REST APIs\n• Integrated APIs, handled errors, and performed basic testing and debugging\n• Documented application flow and followed structured development steps\nRecruit AI – Intelligent Recruitment Platform\n• Designed an AI-powered recruitment platform to support candidate screening\n• Understood recruitment workflows and converted them into system features\n• Assisted in frontend-backend integration and basic API testing\nNutriLens AI – Smart Nutrition Analysis System\n• Built an AI-based nutrition analysis application to evaluate food intake\n• Integrated APIs and verified application outputs through basic testing\n• Performed simple data interpretation to generate user-friendly insights\nCERTIFICATIONS\n• AWS Academy Graduate (2025)\n• Google Analytics Certification (2025)\n• Cybersecurity – EDU Skills (2024–2025)\nADDITIONAL DETAILS\n• Good written and verbal communication skills\n• Self-motivated, adaptable, and eager to learn\n• Open to relocation and flexible with work schedules",
  "skills": [],
  "experience": [],
  "education": [],
  "projects": [],
  "links": {}
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">{resume.name || 'Portfolio'}</h1>
        <h2 className="text-2xl text-blue-300 mb-6">{resume.title || 'Professional'}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          {resume.summary || 'Welcome to my portfolio'}
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          {resume.email && (
            <a 
              href={`mailto:${resume.email}`}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition"
            >
              📧 Email
            </a>
          )}
          {resume.links?.github && (
            <a 
              href={resume.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full transition"
            >
              🔗 GitHub
            </a>
          )}
          {resume.links?.linkedin && (
            <a 
              href={resume.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-full transition"
            >
              💼 LinkedIn
            </a>
          )}
        </div>
      </header>

      {resume.skills && resume.skills.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-6 text-center">🚀 Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {resume.skills.map((skill, i) => (
              <span 
                key={i}
                className="bg-blue-600/30 border border-blue-400 px-4 py-2 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {resume.experience && resume.experience.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-8 text-center">💼 Experience</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {resume.experience.map((exp, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <h4 className="text-xl font-bold text-blue-300">
                  {exp.position || 'Position'}
                </h4>
                <p className="text-gray-300 mb-2">
                  {exp.company || 'Company'} • {exp.duration || ''}
                </p>
                {exp.description && (
                  <p className="text-gray-400 mt-2">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.projects && resume.projects.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-8 text-center">🛠️ Projects</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {resume.projects.map((project, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:scale-105 transition"
              >
                <h4 className="text-xl font-bold text-blue-300 mb-2">
                  {typeof project === 'string' ? project : project.name || 'Project'}
                </h4>
                {project.description && (
                  <p className="text-gray-300 mb-4">{project.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.education && resume.education.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-8 text-center">🎓 Education</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {resume.education.map((edu, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <h4 className="text-xl font-bold text-blue-300">
                  {edu.degree || 'Degree'}
                </h4>
                <p className="text-gray-300">
                  {edu.school || 'School'} • {edu.year || ''}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="container mx-auto px-4 py-12 text-center text-gray-400 border-t border-white/20 mt-12">
        <p>Built with Next.js • Deployed on Vercel</p>
        <p className="mt-2">✨ Auto-generated from resume</p>
      </footer>
    </div>
  );
}