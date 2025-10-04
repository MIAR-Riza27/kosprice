"use client";

import { useRef } from "react";
import Card from "./Card";
import Typography from "./Typography";

const features = [
	{
		icon: "🧠",
		title: "Smart Analysis",
		description:
			"Algoritma machine learning yang menganalisis pola fasilitas dan tren pasar untuk prediksi yang presisi.",
		gradient: "from-[var(--color-primary)] to-[var(--color-primary-300)]",
	},
	{
		icon: "📍",
		title: "Location Intelligence",
		description:
			"Integrasi data geografis untuk pricing yang akurat berdasarkan kedekatan dengan kampus dan fasilitas.",
		gradient: "from-[var(--color-secondary)] to-[var(--color-secondary-300)]",
	},
	{
		icon: "⚡",
		title: "Real-time Results",
		description:
			"Dapatkan prediksi harga instan dalam hitungan detik dengan sistem pemrosesan AI yang dioptimalkan.",
		gradient: "from-[var(--color-primary)] to-[var(--color-secondary)]",
	},
	{
		icon: "📊",
		title: "Market Insights",
		description:
			"Analisis mendalam tentang tren pasar kos dan faktor-faktor yang mempengaruhi harga di setiap lokasi.",
		gradient: "from-[var(--color-secondary)] to-[var(--color-primary-300)]",
	},
	{
		icon: "🔒",
		title: "Data Security",
		description:
			"Keamanan data terjamin dengan enkripsi tingkat tinggi dan sistem backup otomatis yang reliable.",
		gradient: "from-[var(--color-primary-200)] to-[var(--color-secondary)]",
	},
	{
		icon: "📱",
		title: "Mobile Friendly",
		description:
			"Interface responsif yang sempurna di semua perangkat, dari desktop hingga smartphone.",
		gradient: "from-[var(--color-secondary-200)] to-[var(--color-primary)]",
	},
];

export default function FeatureScroller() {
	const scrollerRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		if (scrollerRef.current) {
			scrollerRef.current.style.animationPlayState = "paused";
		}
	};

	const handleMouseLeave = () => {
		if (scrollerRef.current) {
			scrollerRef.current.style.animationPlayState = "running";
		}
	};

	// Create enough duplicates for truly seamless scroll
	const scrollingFeatures = [...features, ...features, ...features, ...features];

	return (
		<div className="relative overflow-hidden py-8 px-4 sm:px-8">
			{/* Scrolling container with proper spacing */}
			<div
				ref={scrollerRef}
				className="flex gap-8 animate-scroll-faster"
				style={{
					width: "max-content",
					willChange: "transform",
					// Ensure seamless loop by setting exact width
					minWidth: "200%",
				}}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{scrollingFeatures.map((feature, index) => (
					<div
						key={`${feature.title}-${index}`}
						className="flex-shrink-0"
						style={{ width: "320px" }}
					>
						<Card
							variant="default"
							className="p-6 sm:p-8 backdrop-blur-sm w-full h-full group transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 hover:-translate-y-2"
						>
							{/* Icon container with enhanced hover effect */}
							<div
								className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.gradient} rounded-xl mb-4 sm:mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
							>
								<span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
									{feature.icon}
								</span>
							</div>

							{/* Title with enhanced typography */}
							<Typography
								variant="h5"
								texture="default"
								className="mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300"
							>
								{feature.title}
							</Typography>

							{/* Description */}
							<Typography
								variant="p"
								texture="muted"
								size="sm"
								className="leading-relaxed group-hover:text-[var(--foreground)] transition-colors duration-300"
							>
								{feature.description}
							</Typography>

							{/* Hover indicator */}
							<div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[var(--color-primary)]/30 transition-all duration-300 pointer-events-none"></div>
						</Card>
					</div>
				))}
			</div>

			{/* Gradient fade effects with more spacing */}
			<div className="absolute top-0 left-0 w-12 sm:w-20 h-full bg-gradient-to-r from-[var(--background-light-alt)] via-[var(--background-light-alt)]/90 to-transparent pointer-events-none z-10"></div>
			<div className="absolute top-0 right-0 w-12 sm:w-20 h-full bg-gradient-to-l from-[var(--background-light-alt)] via-[var(--background-light-alt)]/90 to-transparent pointer-events-none z-10"></div>

			{/* Mobile touch indicator */}
			<div className="block sm:hidden absolute bottom-2 left-1/2 transform -translate-x-1/2 pointer-events-none"></div>
				<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary-600)]/20 backdrop-blur-sm border border-[var(--color-primary-600)]/30">
					<span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse"></span>
					<Typography
						variant="small"
						texture="primary"
						size="xs"
						weight="medium"
					>
						Hover pada card untuk pause animasi
					</Typography>
				</div>
			</div>
	);
}