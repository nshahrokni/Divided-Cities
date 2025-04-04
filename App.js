
import React from 'react';

export default function App() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Urban Divides: Segregation in Vancouver</h1>
        <p className="text-lg text-gray-600">A collaborative archive of student research and visual storytelling from the course "Urban Segregation Through a Global Lens." This public-facing website showcases final projects exploring spatial, racial, economic, and gendered segregation in Vancouver.</p>
      </header>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📘 Book of Vancouver</h2>
        <p className="mb-4 text-gray-700">Each year, students collaborate to produce a multi-chapter digital book exploring different dimensions of urban segregation in Vancouver. Each chapter combines written analysis and a visual storytelling component. Browse this year's edition below:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Displacement & Development</h3>
            <p className="mb-2 text-sm text-gray-500">How infrastructure projects have affected Indigenous communities in Vancouver.</p>
            <a href="/books/2025/displacement" className="text-blue-600 underline">View Chapter</a>
          </div>
          <div className="p-4 border rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Transit Inequality</h3>
            <p className="mb-2 text-sm text-gray-500">Racialized and class-based disparities in access to public transportation.</p>
            <a href="/books/2025/transit" className="text-blue-600 underline">View Chapter</a>
          </div>
          <div className="p-4 border rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Gentrification in East Vancouver</h3>
            <p className="mb-2 text-sm text-gray-500">A visual and textual analysis of neighborhood transformation and housing precarity.</p>
            <a href="/books/2025/gentrification" className="text-blue-600 underline">View Chapter</a>
          </div>
        </div>
      </section>
    </div>
  );
}
