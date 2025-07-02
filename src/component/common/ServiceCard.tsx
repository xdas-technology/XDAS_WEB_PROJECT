interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-blue-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}