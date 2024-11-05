import About from "@/components/sections/about/About";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/projects";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
	return <div className="min-h-screen max-w-5xl mx-auto">
		<Hero />
		<About />
		<Skills />
		<Projects />
	</div>;
}
