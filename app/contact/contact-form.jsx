"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Formulario de contacto (v1).
 *
 * Fase 1: sin backend. Al enviar, abre el cliente de correo con los datos
 * prellenados (mailto), como solución funcional de arranque.
 *
 * Fase 2 (docs/roadmap.md): reemplazar `handleSubmit` por un POST a
 * `app/api/contact/route.js` que persista el lead en Supabase y/o notifique.
 */
const CONTACT_EMAIL = "hola@fedeaistudio.com";

const PROJECT_TYPES = [
  "Producto digital a la medida",
  "Sistema de IA",
  "Plataforma / SaaS",
  "App móvil",
  "Automatización",
  "Consultoría",
  "Otro",
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: PROJECT_TYPES[0],
    message: "",
  });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = `Nuevo proyecto: ${form.type} — ${form.name}`;
    const body = [
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      `Tipo: ${form.type}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  const fieldClass =
    "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

  const labelClass = "text-sm font-medium text-foreground";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className={labelClass}>
            Nombre
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Tu nombre"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="tu@correo.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="type" className={labelClass}>
          Tipo de proyecto
        </label>
        <select id="type" value={form.type} onChange={update("type")} className={fieldClass}>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelClass}>
          Cuéntanos tu idea
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="¿Qué quieres construir? ¿Qué problema resuelve?"
          className={fieldClass}
        />
      </div>

      <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
        Enviar mensaje
        <Send />
      </Button>
    </form>
  );
}
