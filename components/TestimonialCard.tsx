import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  content: string;
  avatar?: string | null;
};

const PALETTE = [
  "bg-[#C1292E]",
  "bg-[#235789]",
  "bg-[#F1D302]",
];

export default function TestimonialCard({
  name,
  role,
  content,
  avatar = null,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const colorClass =
    PALETTE[
      name
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
        PALETTE.length
    ];

  return (
    <figure className="flex flex-col rounded-[28px] border border-black/10 bg-white p-8">
      <span
        className="text-4xl leading-none text-[#C1292E]"
        aria-hidden="true"
      >
        “
      </span>

      <blockquote className="mt-3 flex-1 text-base leading-7 text-[#514f59]">
        {content}
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-4 border-t border-black/10 pt-6">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white ${colorClass}`}
          >
            {initials}
          </span>
        )}

        <div>
          <span className="block font-semibold text-[#235789]">
            {name}
          </span>
          <span className="block text-sm text-[#626773]">
            {role}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
