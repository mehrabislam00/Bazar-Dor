import Image from "next/image";

type Props = {
  src?: string | null;
  name?: string | null;
  size?: number;
};

const Avatar = ({ src, name, size = 32 }: Props) => {
  const initial = name?.charAt(0)?.toUpperCase() ?? "?";

  if (src) {
    return (
      <Image
        src={src}
        alt={name ?? "ব্যবহারকারী"}
        width={size}
        height={size}
        className="rounded-full object-cover ring-2 ring-white"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <span
      className="flex items-center justify-center rounded-full bg-green-600 text-white font-bold ring-2 ring-white"
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      {initial}
    </span>
  );
};

export default Avatar;