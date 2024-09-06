export const Header = () => {
  return (
    <div className="flex justify-center w-full items-center fixed top-3 z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 rounded-full backdrop-blur">
        <a href="#" className="nav-item hover:bg-white/10 hover:text-white transition duration-300">Home</a>
        <a href="#projects" className="nav-item hover:bg-white/10 hover:text-white transition duration-300">Projects</a>
        <a href="#about" className="nav-item hover:bg-white/10 hover:text-white transition duration-300">About</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-black">Contact</a>
      </nav>
    </div>
  )
};
