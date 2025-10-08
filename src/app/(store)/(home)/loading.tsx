import { Skeleton } from "@/components/skeleton";

export default function HomeLoading(){
    return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
        <Skeleton className="col-span-9 row-span-6 h-[856px]" />

        <Skeleton className="col-span-3 row-span-3 h-[400px]" />
        <Skeleton className="col-span-3 row-span-3 h-[400px]" />
    </div>
    )
}