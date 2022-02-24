export type CountryISO = "BI" | "CD" | "KE" | "RW" | "TZ" | "UG";

type image = CountryISO;

const devImages: Record<image, string> = {
	BI: require("./bi.svg"),
	CD: require("./cd.svg"),
	KE: require("./ke.svg"),
	RW: require("./rw.svg"),
	TZ: require("./tz.svg"),
	UG: require("./ug.svg")
};

export const images = devImages;