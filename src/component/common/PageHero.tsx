interface PageHeroProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
    return (
        <div className={`relative h-96 flex items-center justify-center ${backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-to-br from-black via-purple-900 to-black'}`}>
            {backgroundImage && <div className="absolute inset-0 bg-black opacity-50"></div>}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-purple-400/10"></div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                    {title}
                </h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-300">{subtitle}</p>
            </div>
        </div>
    );
}