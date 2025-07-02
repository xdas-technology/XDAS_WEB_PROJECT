interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    popular?: boolean;
}

export default function PricingCard({ title, price, features, popular }: PricingCardProps) {
    return (
        <div className={`bg-white p-8 rounded-lg shadow-lg ${popular ? 'border-2 border-blue-500 transform scale-105' : ''}`}>
            {popular && (
                <div className="bg-blue-500 text-white text-sm font-semibold py-1 px-3 rounded-full mb-4 inline-block">
                    Most Popular
                </div>
            )}
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">{price}</div>
            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                    </li>
                ))}
            </ul>
            <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                Get Started
            </button>
        </div>
    );
}