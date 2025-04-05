"use client";
import {MuseumProps} from "@/types";
import MuseumPreview from "./MuseumPreview";

export default function MuseumDisplay({ inputMuseums }: { inputMuseums: MuseumProps[] }) {
	return (
		<div>
			{inputMuseums.map((museum) => (
				<MuseumPreview key={museum.id} museum={museum} />
			))}
		</div>
	);
}