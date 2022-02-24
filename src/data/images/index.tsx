export type CountryISO = "BI" | "CD" | "KE" | "RW" | "TZ" | "UG";

type image = CountryISO;

// const devImages: Record<image, string> = {
// 	BI: require("./bi.svg"),
// 	CD: require("./cd.svg"),
// 	KE: require("./ke.svg"),
// 	RW: require("./rw.svg"),
// 	TZ: require("./tz.svg"),
// 	UG: require("./ug.svg")
// };

const prodImages: Record<image, string> = {
	BI: 'https://storage.googleapis.com/umucyo-ui/bi.svg',
	CD: 'https://storage.googleapis.com/umucyo-ui/cd.svg',
	KE: 'https://storage.googleapis.com/umucyo-ui/ke.svg',
	RW: 'https://storage.googleapis.com/umucyo-ui/rw.svg',
	TZ: 'https://storage.googleapis.com/umucyo-ui/tz.svg',
	UG: 'https://storage.googleapis.com/umucyo-ui/ug.svg'
}

export const images = prodImages;