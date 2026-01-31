import HybridScene from "@/components/HybridScene";

/**
 * @title ComingSoonPage
 * @notice Reusable placeholder page for features under development
 * @dev Standardizes the "Coming Soon" UI across all modules
 * @param {string} title - The specific title or dataset name to display
 * @param {string} badge - Optional pill badge text (e.g. "Marketing Module")
 */
export default function ComingSoonPage({ title, badge = "Development in progress" }) {
    return (
        <main className="pt-20 h-screen w-screen relative overflow-hidden bg-black">

            {/* ------------------------------------------------------------------ */}
            {/* 3D Background Scene                                                 */}
            {/* ------------------------------------------------------------------ */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
                <HybridScene />
            </div>

            {/* ------------------------------------------------------------------ */}
            {/* Content Layer                                                       */}
            {/* ------------------------------------------------------------------ */}
            <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
                <div className="max-w-4xl p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">

                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium tracking-wider uppercase mb-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                        {badge}
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Coming Soon
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mt-2">
                            {title}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We are actively collecting and processing the
                        <span className="text-gray-300 font-semibold px-1"> {title} </span>
                        dataset. Advanced analytics, forecasting models, and actionable insights
                        will be available here shortly.
                    </p>

                </div>
            </div>
        </main>
    );
}
