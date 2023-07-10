import { number } from 'astro/zod';

interface Props {
  social: string;
  followers: number;
  icon: string;
  percentage: number;
}

export default function DashNumbers({
  social,
  icon,
  followers,
  percentage,
}: Props) {
  return (
    <>
      <article className="flex flex-col p-4 border-[1px] rounded-lg border-clr">
        <div className="flex justify-between">
          <h3>{social}</h3>
          <img
            src={icon}
            alt="icon"
            className="w-[20px] aspect-square object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold">{`${followers} followers`}</span>
          <span className="text-sm capitalize text-slate-400">
            {`+${percentage}% since last week`}
          </span>
        </div>
      </article>
    </>
  );
}
