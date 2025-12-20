import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome ,Dock, Home } from "#components";
import { Finder, Resume, Text, Safari, Terminal, Image, Contact, Photo } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photo />
    </main>
  );
};

export default App;