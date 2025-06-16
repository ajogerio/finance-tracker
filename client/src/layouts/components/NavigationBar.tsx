import NavigationButton from "./NavigationButton";

export default function NavigationBar() {
  return (
    <nav className="flex flex-col items-center min-w-40 bg-[#fdfffe] rounded-tr-full rounded-br-full">
      <h1>LOGO</h1>
      <NavigationButton label="Dashboard" />
    </nav>
  );
}
