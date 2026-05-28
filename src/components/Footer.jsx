import React from 'react';

export default function Footer({
  designer = "sandeep Tech",
  role = "MERN Stack Developer",
  year = 2026
}) {
  return (
    <footer className="border-t border-borderCustom p-10 text-center text-mutedCustom text-sm">
      <p>
        Designed &amp; built with <span className="text-accentCustom2">♥</span> by {designer} · {role} · {year}
      </p>
    </footer>
  );
}
