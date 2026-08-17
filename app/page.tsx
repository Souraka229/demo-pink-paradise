"use client";
import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, ChefHat, Cake, PartyPopper, Menu, X, Facebook } from "lucide-react";

const WA = "https://wa.me/22990591775?text=" + encodeURIComponent("Bonjour Pink Paradise, je souhaite réserver une table.");
const TEL = "tel:+22990591775";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#fefdfb]">
      <div className="bg-[#9d174d] text-white text-center text-xs py-2 px-4">
        Démonstration commerciale – Ce n’est pas le site officiel de Pink Paradise
      </div>
      <header className="sticky top-0 z-50 bg-[#fefdfb]/95 backdrop-blur border-b border-pink-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="font-serif text-2xl font-semibold text-[#9d174d]">Pink Paradise</span>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#exp" className="hover:text-pink-600">Expérience</a>
            <a href="#spec" className="hover:text-pink-600">Spécialités</a>
            <a href="#infos" className="hover:text-pink-600">Infos</a>
            <a href={WA} target="_blank" className="bg-pink-600 text-white px-4 py-2 rounded-full">Réserver</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
        {open && (
          <div className="md:hidden px-4 py-3 space-y-2 border-t">
            <a href="#exp" onClick={() => setOpen(false)} className="block py-1">Expérience</a>
            <a href="#spec" onClick={() => setOpen(false)} className="block py-1">Spécialités</a>
            <a href="#infos" onClick={() => setOpen(false)} className="block py-1">Infos</a>
            <a href={WA} target="_blank" className="block text-center bg-pink-600 text-white py-2 rounded-full">WhatsApp</a>
          </div>
        )}
      </header>

      <section className="px-4 pt-16 pb-20 max-w-5xl mx-auto">
        <p className="text-pink-600 text-sm font-medium uppercase tracking-wide mb-3">Restaurant & Pâtisserie · Parakou</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
          Un cadre élégant<br/><span className="text-pink-700">où chaque plat</span><br/>est une œuvre
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-xl">À Amawignon, Pink Paradise vous accueille pour des moments privilégiés : petit-déjeuner, dîner romantique ou événement sur mesure.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={WA} target="_blank" className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium px-7 py-3.5 rounded-full">
            <MessageCircle size={18}/> Réserver sur WhatsApp
          </a>
          <a href={TEL} className="inline-flex items-center justify-center gap-2 border-2 border-pink-200 text-pink-800 font-medium px-7 py-3.5 rounded-full bg-white">
            <Phone size={18}/> +229 90 59 17 75
          </a>
        </div>
      </section>

      <section id="exp" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-semibold text-center mb-10">L’expérience Pink Paradise</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {i:<ChefHat className="w-6 h-6 text-pink-600"/>, t:"Cuisine soignée", d:"Produits sélectionnés, environnement sain et accueillant."},
              {i:<Cake className="w-6 h-6 text-pink-600"/>, t:"Pâtisserie sur mesure", d:"Gâteaux et desserts pour vos jours heureux."},
              {i:<PartyPopper className="w-6 h-6 text-pink-600"/>, t:"Événements privés", d:"Repas d’affaires et célébrations sur mesure."},
            ].map((x,i)=>(
              <div key={i} className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">{x.i}</div>
                <h3 className="font-semibold text-lg mb-2">{x.t}</h3>
                <p className="text-sm text-gray-600">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="spec" className="py-16 bg-pink-50/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">Nos spécialités</h2>
          <p className="text-gray-600 mb-8">Cuisine béninoise revisité, inspirations internationales, bar & cocktails, pâtisserie.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {["Poulet yassa, riz au gras, poisson braisé, igname pilée","Pâtes, burgers, salades, options végétariennes","Cocktails, jus frais, Pink Mojito maison","Cheesecakes, fondants, gâteaux sur mesure"].map((t,i)=>(
              <div key={i} className="bg-white rounded-xl p-4 border border-pink-100 text-sm text-gray-700">{t}</div>
            ))}
          </div>
          <a href={WA} target="_blank" className="inline-flex items-center gap-2 mt-8 text-pink-700 font-medium">
            <MessageCircle size={16}/> Demander le menu sur WhatsApp
          </a>
        </div>
      </section>

      <section id="infos" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-semibold text-center mb-10">Nous trouver</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-5 border border-pink-100 text-center shadow-sm">
              <MapPin className="w-7 h-7 text-pink-600 mx-auto mb-3"/><h3 className="font-semibold mb-1">Adresse</h3>
              <p className="text-sm text-gray-600">Amawignon, Av. Yayi Boni, 4e rue (RNIE2), Parakou</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-pink-100 text-center shadow-sm">
              <Clock className="w-7 h-7 text-pink-600 mx-auto mb-3"/><h3 className="font-semibold mb-1">Horaires</h3>
              <p className="text-sm text-gray-600">Lun–Sam 08h–23h30<br/>Dim 12h–23h30</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-pink-100 text-center shadow-sm">
              <Phone className="w-7 h-7 text-pink-600 mx-auto mb-3"/><h3 className="font-semibold mb-1">Contact</h3>
              <p className="text-sm text-gray-600"><a href={TEL}>+229 90 59 17 75</a><br/><a href="mailto:pinkparadisebj@gmail.com">pinkparadisebj@gmail.com</a></p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href={WA} target="_blank" className="inline-flex items-center gap-2 bg-pink-600 text-white font-medium px-8 py-3.5 rounded-full">
              <MessageCircle size={18}/> Réserver maintenant
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#831843] text-pink-100 py-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl text-white">Pink Paradise</p>
            <p className="text-sm text-pink-300">Restaurant & Pâtisserie · Parakou</p>
          </div>
          <a href="https://www.facebook.com/pinkparadisebj" target="_blank" className="w-9 h-9 rounded-full bg-pink-900 flex items-center justify-center"><Facebook size={16}/></a>
        </div>
        <p className="text-center text-xs text-pink-400 mt-6">Démonstration commerciale – Ce site n’est pas le site officiel</p>
      </footer>

      <div className="fixed bottom-0 inset-x-0 p-3 md:hidden bg-gradient-to-t from-[#fefdfb]">
        <a href={WA} target="_blank" className="flex items-center justify-center gap-2 w-full bg-pink-600 text-white font-medium py-3 rounded-full shadow-lg">
          <MessageCircle size={18}/> WhatsApp – Réserver
        </a>
      </div>
    </div>
  );
}
