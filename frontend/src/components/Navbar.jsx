/**
 * @title Navbar
 * @notice Global navigation bar for SPAE
 * @dev Premium glassmorphic UI with smooth interactions
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";

/**
 * @notice Navbar component
 * @dev Handles only navigation and dropdown UI
 * @returns {JSX.Element}
 */
export default function Navbar() {
  /* ---------------------------------------------------------------------- */
  /* State                                                                  */
  /* ---------------------------------------------------------------------- */

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  /* ---------------------------------------------------------------------- */
  /* Dropdown Component                                                     */
  /* ---------------------------------------------------------------------- */

  const MenuDropdown = ({ title, items }) => (
    <div
      className="relative group"
      onMouseEnter={() => setOpenDropdown(title)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      {/* Trigger */}
      <span
        className={`flex items-center gap-1 cursor-pointer transition py-2 font-medium tracking-wide
          ${openDropdown === title || items.some(i => isActive(i.path)) ? "text-white" : "text-gray-400 hover:text-white"}`}
      >
        {title}
        <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === title ? "rotate-180" : ""}`} />
      </span>

      {/* Menu */}
      <div
        className={`absolute top-full left-0 pt-4 z-50 transition-all duration-300 transform origin-top
          ${openDropdown === title ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
      >
        <div className="w-72 rounded-xl bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] overflow-hidden">
          <ul className="py-2">
            {items.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block px-5 py-3 text-sm transition-all duration-200 border-l-2
                    ${isActive(path)
                      ? "border-indigo-500 bg-white/5 text-white"
                      : "border-transparent text-gray-400 hover:bg-white/5 hover:text-white"}`}
                  onClick={() => setOpenDropdown(null)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  /* ---------------------------------------------------------------------- */
  /* Layout                                                                 */
  /* ---------------------------------------------------------------------- */

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 pointer-events-auto transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
            <Sparkles size={18} fill="currentColor" className="text-white/90" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight group-hover:text-indigo-200 transition-colors">
            SPAE
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link
            to="/"
            className={`transition-colors ${isActive("/") ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            Home
          </Link>

          <Link
            to="/ecommerce"
            className={`transition-colors ${isActive("/ecommerce") ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            E-commerce
          </Link>

          <MenuDropdown
            title="Marketing"
            items={[
              { label: "Predict Conversion", path: "/marketing/conversion" },
              { label: "Advertising Sales", path: "/marketing/advertising" },
            ]}
          />

          <MenuDropdown
            title="Economics"
            items={[
              { label: "Retail Sales Trade", path: "/economics/retail-sales" },
              { label: "Advance Retail Sales", path: "/economics/advanced-retail-sales" },
              { label: "HTS Revision 32", path: "/economics/hts-revision-32" },
              { label: "IMF IFS ARS", path: "/economics/imf-ifs-ars" },
            ]}
          />

          <MenuDropdown
            title="Retail Sales"
            items={[
              { label: "Retail Sales Dataset", path: "/retail/retail-sales" },
              { label: "Grocery Dataset", path: "/retail/grocery" },
              { label: "Supermarket Sales", path: "/retail/supermarket" },
              { label: "Rossmann Dataset", path: "/retail/rossmann" },
              { label: "Walmart Dataset", path: "/retail/walmart" },
              { label: "BigMart Dataset", path: "/retail/bigmart" },
            ]}
          />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-6 text-sm h-screen overflow-y-auto pb-32">
          <Link to="/" className="block text-gray-300 font-medium text-lg">Home</Link>
          <Link to="/ecommerce" className="block text-gray-300 font-medium text-lg">E-commerce</Link>

          <div className="space-y-3">
            <div className="text-indigo-400 font-bold uppercase tracking-wider text-xs">Marketing</div>
            <Link to="/marketing/conversion" className="block pl-4 text-gray-400 hover:text-white py-1 transition">Predict Conversion</Link>
            <Link to="/marketing/advertising" className="block pl-4 text-gray-400 hover:text-white py-1 transition">Advertising Sales</Link>
          </div>

          <div className="space-y-3">
            <div className="text-indigo-400 font-bold uppercase tracking-wider text-xs">Economics</div>
            <Link to="/economics/retail-sales" className="block pl-4 text-gray-400 hover:text-white py-1 transition">Retail Sales Trade</Link>
            <Link to="/economics/advanced-retail-sales" className="block pl-4 text-gray-400 hover:text-white py-1 transition">Advance Retail Sales</Link>
            <Link to="/economics/hts-revision-32" className="block pl-4 text-gray-400 hover:text-white py-1 transition">HTS Revision 32</Link>
            <Link to="/economics/imf-ifs-ars" className="block pl-4 text-gray-400 hover:text-white py-1 transition">IMF IFS ARS</Link>
          </div>

          <div className="space-y-3">
            <div className="text-indigo-400 font-bold uppercase tracking-wider text-xs">Retail Sales</div>
            <Link to="/retail/retail-sales" className="block pl-4 text-gray-400 hover:text-white py-1 transition">Retail Sales Dataset</Link>
            <Link to="/retail/grocery" className="block pl-4 text-gray-400 hover:text-white py-1 transition">Grocery Dataset</Link>
            <Link to="/retail/supermarket" className="block pl-4 text-gray-400 hover:text-white py-1 transition">Supermarket Sales</Link>
            <Link to="/retail/rossmann" className="block pl-4 text-gray-400 hover:text-white py-1 transition">Rossmann Dataset</Link>
            <Link to="/retail/walmart" className="block pl-4 text-gray-400 hover:text-white py-1 transition">Walmart Dataset</Link>
            <Link to="/retail/bigmart" className="block pl-4 text-gray-400 hover:text-white py-1 transition">BigMart Dataset</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
