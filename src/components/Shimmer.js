const Shimmer = () => {
    const shimmerCards = Array.from({ length: 8 }, (_, index) => (
        <div
            key={index}
            className="relative h-75 w-72 overflow-hidden rounded-lg bg-gray-200 before:absolute before:inset-0 before:content-[''] before:-translate-x-full before:animate-[shimmer_1.5s_linear_infinite] before:bg-linear-to-r before:from-transparent before:via-white/60 before:to-transparent after:absolute after:inset-0 after:content-[''] after:bg-white/10"
        >
            <div className="absolute inset-0 flex flex-col gap-3 p-4">
                <div className="h-25 w-full rounded-md bg-gray-300" />
                <div className="h-5 w-3/5 rounded bg-gray-300" />
                <div className="h-4 w-full rounded bg-gray-300" />
                <div className="h-4 w-4/5 rounded bg-gray-300" />
            </div>
        </div>
    ));

    return <div className="flex flex-wrap justify-start gap-5 p-5">{shimmerCards}</div>;
};

export default Shimmer;