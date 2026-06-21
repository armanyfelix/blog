import { LinkPreset, type NavBarLink } from "@/types/config";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: "Init",
		url: "/",
	},
	[LinkPreset.About]: {
		name: "about",
		url: "/about/",
	},
	[LinkPreset.Archive]: {
		name: "archive",
		url: "/archive/",
	},
	[LinkPreset.Series]: {
		name: "series",
		url: '/series/',
	},
	[LinkPreset.Friends]: {
		name: "friends",
		url: '/friends/',
	},
};
