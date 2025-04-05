import {MuseumProps} from "@/types";

export default async function getAllMuseums(): Promise<MuseumProps[]> {
	const rawData = await fetch(`https://api.harvardartmuseums.org/object?apikey=${process.env.MUSEUM_API_KEY}&page=9`);
	if (!rawData.ok) {
		throw new Error("API-call limit reached or API is down, please check back later");
	}

	const data = await rawData.json();
	return data.records;
}
