import React, { useState } from 'react';

const resumeData = {
  name: "Милана Уланова",
  title: "Junior Frontend Developer / Project Manager / UX/UI Designer",
  location: "Бишкек, Кыргызстан",
  contacts: {
    email: "ulanovamilana8@gmail.com",
    github: "https://github.com/milkis-ctrl",
    telegram: "@username"
  },
  about: "Студентка направления прикладной информатики с фокусом на веб-разработку, UI/UX дизайн и управление IT-проектами. Имею практический опыт участия в хакатонах в роли Team Lead, прототипирования интерфейсов в Figma и создания современных веб-приложений.",
  skills: [
    "JavaScript / React / Vite",
    "HTML5 / CSS3 / Tailwind CSS",
    "Figma (UI/UX, Prototyping)",
    "Git / GitHub",
    "Python / Java (Основы алгоритмов)",
    "Agile / Scrum / Project Management",
    "Spring Boot (Базовый уровень)"
  ],
  experience: [
    {
      role: "Team Lead / Product Designer",
      event: "AI HUB Hackathon & Хакатоны",
      period: "2025 – 2026",
      description: "Координация команды из 3 человек, распределение задач, проектирование UX/UI концептов интерфейсов и презентация решений жюри."
    },
    {
      role: "UI/UX & Frontend Разработчик",
      event: "Учебные и личные проекты",
      period: "2025 – 2026",
      description: "Разработка веб-приложений (включая трекеры и сервисные платформы), вёрстка компонентов, интеграция API и проектирование дизайн-систем в Figma."
    }
  ],
  education: [
    {
      degree: "Бакалавр, Прикладная информатика",
      institution: "INAI (Кыргызско-Германский институт прикладной информатики)",
      period: "2025 – Настоящее время"
    }
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: '#e2e8f0',
      fontFamily: 'Inter, system-ui, sans-serif',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Шапка резюме */}
        <header style={{
          borderBottom: '1px solid #334155',
          paddingBottom: '24px',
          marginBottom: '32px'
        }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#f8fafc', margin: '0 0 8px 0' }}>
            {resumeData.name}
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#38bdf8', margin: '0 0 12px 0' }}>
            {resumeData.title}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.95rem', color: '#94a3b8' }}>
            <span>📍 {resumeData.location}</span>
            <span>✉️ <a href={`mailto:${resumeData.contacts.email}`} style={{ color: '#38bdf8', textDecoration: 'none' }}>{resumeData.contacts.email}</a></span>
            <span>🐙 <a href={resumeData.contacts.github} target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>GitHub</a></span>
          </div>
        </header>

        {/* О себе */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', borderLeft: '4px solid #38bdf8', paddingLeft: '12px', marginBottom: '12px' }}>
            Обо мне
          </h2>
          <p style={{ lineHeight: '1.6', color: '#cbd5e1' }}>
            {resumeData.about}
          </p>
        </section>

        {/* Навыки */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', borderLeft: '4px solid #38bdf8', paddingLeft: '12px', marginBottom: '16px' }}>
            Навыки & Технологии
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {resumeData.skills.map((skill, index) => (
              <span key={index} style={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                color: '#38bdf8',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Опыт / Проекты */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', borderLeft: '4px solid #38bdf8', paddingLeft: '12px', marginBottom: '16px' }}>
            Опыт и проекты
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {resumeData.experience.map((exp, index) => (
              <div key={index} style={{
                backgroundColor: '#1e293b',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #334155'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '1.15rem', margin: 0, color: '#f8fafc' }}>{exp.role}</h3>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{exp.period}</span>
                </div>
                <div style={{ fontSize: '0.95rem', color: '#38bdf8', marginBottom: '8px' }}>{exp.event}</div>
                <p style={{ margin: 0, color: '#cbd5e1', lineHeight: '1.5', fontSize: '0.95rem' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Образование */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', borderLeft: '4px solid #38bdf8', paddingLeft: '12px', marginBottom: '16px' }}>
            Образование
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} style={{
              backgroundColor: '#1e293b',
              padding: '16px 20px',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 4px 0', color: '#f8fafc' }}>{edu.institution}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.9rem' }}>
                <span>{edu.degree}</span>
                <span>{edu.period}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Футер */}
        <footer style={{ textAlign: 'center', color: '#64748b', fontSize: '0.85rem', marginTop: '40px' }}>
          Создано на React + Vite
        </footer>

      </div>
    </div>
  );
}