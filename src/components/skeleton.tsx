import { FC } from "react";

interface SkeletonProps {
    lines?: number;
    gap?: number;
    height?: number;
    className?: string;
    unEqualWidth?: boolean;
}
const SkeletonRectangle: FC<SkeletonProps> = ({ gap = 6, lines = 1, height = 20, className = "" }) => {
    const items = new Array(lines || 1).fill("x");
    return (
        <div className="w-full flex flex-col" style={{ rowGap: gap }}>
            {items.map((_, index) => {
                return <div key={index} style={{ height }} className={["w-full", className].join(" ")} />;
            })}
        </div>
    );
};
export default SkeletonRectangle;
