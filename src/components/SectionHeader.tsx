interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
