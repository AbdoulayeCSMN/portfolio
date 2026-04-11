import Blog from "@components/Blog";
import Projects from "@components/Projects";
import Services from "@components/Services";
import Home from "@components/Home";

export default function HomePage() {
  return (
      <main>
        <Home />
        <Projects />
        <Services />
        <Blog />
      </main>
  );
}
