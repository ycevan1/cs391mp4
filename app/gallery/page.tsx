import MuseumDisplay from "@/components/MuseumDisplay";
import getAllMuseums from "@/lib/getAllMuseums";

export default async function InfoPage() {
    const museums = await getAllMuseums();

    return (
        <div>
            <MuseumDisplay inputMuseums={museums} />
        </div>
    );
}