export interface ProjectLink {
	label: string;
	url: string;
}

export interface ProjectHighlight {
	text: string;
}

export interface SubGame {
	title: string;
	genre: string;
	/** Standalone playable build (itch.io), if the game has been published on its own. */
	url?: string;
}

export interface Project {
	slug: string;
	title: string;
	tagline: string;
	status: string;
	tags: string[];
	summary: string;
	/** Path under /public, or null if no real screenshot exists yet (renders a placeholder). */
	image: string | null;
	imageAlt: string;
	links: ProjectLink[];
	overview: string;
	role: string;
	highlights: string[];
	/** Only set for the Arcadex portal, rendered as a game-select grid on the case-study page. */
	subGames?: SubGame[];
}

export const projects: Project[] = [
	{
		slug: "rootdefence",
		title: "RootDefence",
		tagline: "A pixel-art tower defense, from first pixel to shipped build.",
		status: "Solo project · 2025",
		tags: ["C++", "SDL2", "SQLite"],
		summary:
			"Build trees to defend your base from waves of incoming vegetables — a tower defense built from scratch in C++ and SDL2, with hand-drawn pixel art.",
		image: "/images/rootdefence-preview.png",
		imageAlt: "RootDefence gameplay screenshot showing pixel-art trees defending a base",
		links: [
			{ label: "View on GitHub", url: "https://github.com/Kilsombg/RootDefence/" },
			{ label: "Play on itch.io", url: "https://kilsom.itch.io/rootdefence" },
		],
		overview:
			"RootDefence is a tower-defense game built entirely from scratch in C++ using SDL2 for rendering, input, and audio — no game engine underneath. You defend your base from waves of incoming vegetables by placing and upgrading trees along their path. It was built solo over about 5-6 months in 2025, covering the full pipeline from the core game loop to hand-drawn pixel art to a shipped, playable itch.io build.",
		role: "Solo developer — programming, game design and pixel art.",
		highlights: [
			"Built the full game loop, rendering and input handling directly on SDL2, with no pre-built engine.",
			"Designed and implemented the core tower-defense mechanics: placement, enemy waves, and targeting.",
			"Created the pixel art used throughout the game.",
			"Used SQLite to persist in-game data.",
			"Packaged and published a playable build to itch.io.",
		],
	},
	{
		slug: "arcadex",
		title: "Arcadex — Browser Games Portal",
		tagline: "Browser games shipped in weeks, built with Phaser 3 and an AI-assisted workflow.",
		status: "Current · since July 2026",
		tags: ["Phaser 3", "JavaScript", "HTML5 Canvas"],
		summary:
			"A growing portal of browser-playable games — most built with Phaser 3, others in vanilla JS — built while rapidly prototyping game ideas with an AI-assisted workflow.",
		image: "/images/browser-games-portal-preview.png",
		imageAlt: "Arcadex browser games portal",
		links: [{ label: "Play the portal", url: "https://arcadex-browsergames.vercel.app/" }],
		overview:
			"I build a portal of small browser games used to rapidly prototype and validate game ideas, using an AI-assisted development workflow to move from concept to playable build quickly. The portal spans puzzle, match-3, word and idle-incremental genres, and keeps growing as new prototypes ship. The portal itself is playable directly, and several titles are also published standalone on itch.io.",
		role: "Game programmer — gameplay systems and UI for each title in the portal.",
		highlights: [
			"Ship playable browser games in a matter of weeks each, using an AI-assisted, rapid-prototyping workflow.",
			"Build most titles in Phaser 3 (Chroma Loop, Match3, Harvest Mosaic, Candy Tap, Ironvein) and others in plain HTML/CSS/JS (Word Trail).",
			"Cover a range of genres: connect/match puzzles, word search and idle-incremental games with deeper progression systems.",
			"Deployed and iterated on a live build via Vercel for stakeholder review.",
		],
		subGames: [
			{ title: "Chroma Loop", genre: "Orb-connect puzzle", url: "https://kilsom.itch.io/chroma-loop" },
			{ title: "Match3", genre: "Match-three puzzle" },
			{ title: "Harvest Mosaic", genre: "Match-three puzzle" },
			{ title: "Candy Tap", genre: "Idle / incremental", url: "https://kilsom.itch.io/candy-tap" },
			{ title: "Word Trail", genre: "Word search", url: "https://kilsom.itch.io/word-trail" },
			{ title: "Ironvein", genre: "Idle / incremental RPG", url: "https://kilsom.itch.io/ironvein" },
		],
	},
	{
		slug: "conqctf",
		title: "ConqCTF",
		tagline: "A Capture-The-Flag platform for cybersecurity beginners, built as a Clean Architecture case study.",
		status: "Thesis-adjacent project",
		tags: [".NET", "Angular", "SQL Server", "Clean Architecture"],
		summary:
			"A CTF platform where beginners can practice cybersecurity skills by solving structured challenges — a Clean Architecture backend paired with a modular Angular frontend.",
		image: "/images/conqctf-preview.png",
		imageAlt: "ConqCTF platform interface showing a capture-the-flag challenge",
		links: [{ label: "View on GitHub", url: "https://github.com/Kilsombg/ConqCTF/" }],
		overview:
			"ConqCTF is a Capture-The-Flag platform aimed at people starting out in cybersecurity, letting them practice by solving structured challenges. It was built alongside my cybersecurity studies, with a .NET backend and an Angular frontend.",
		role: "Full-stack, solo — backend and frontend.",
		highlights: [
			"Structured the backend using Clean Architecture, separating domain, application, and infrastructure layers.",
			"Built a modular, component-based Angular frontend.",
			"Designed the challenge and flag-submission flow for beginner-friendly cybersecurity practice.",
		],
	},
	{
		slug: "kilsotopia",
		title: "Kilsotopia",
		tagline: "A personal project hub with a built-in calendar and to-do app.",
		status: "Personal project",
		tags: [".NET", "Angular", "SQL Server", "Clean Architecture"],
		summary:
			"A single-page hub for showcasing personal projects, including a Calendar-to-Do application, split across a dedicated web-app and data backend.",
		image: "/images/kilsotopia-preview.png",
		imageAlt: "Kilsotopia project hub interface",
		links: [
			{ label: "Web app repo", url: "https://github.com/Kilsombg/kilsotopia-web-app/" },
			{ label: "Data repo", url: "https://github.com/Kilsombg/kilsotopia-data/" },
		],
		overview:
			"Kilsotopia is a personal single-page project hub, including a Calendar-To-Do application, built to practice structuring a full-stack .NET/Angular app across separate frontend and backend repositories.",
		role: "Full-stack, solo.",
		highlights: [
			"Clean Architecture backend, kept in its own repository separate from the Angular frontend.",
			"Calendar-based to-do feature for personal task tracking.",
		],
	},
];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
