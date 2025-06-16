import NavigationButton from "./NavigationButton";

const navigationLabels: string[] = [
  "Dashboard",
  "Transactions",
  "Budgeting",
  "Savings",
];

export default function NavigationBar() {
  return (
    <nav
      className="flex flex-col items-center min-w-40 bg-[#fdfffe] rounded-tr-lg 
    rounded-br-lg shadow-2xl gap-3"
    >
      <h1 className="flex justify-center items-center min-h-15 ">LOGO</h1>
      <div className="flex flex-col max-w-[180px] gap-5">
        {navigationLabels.map((label) => (
          <NavigationButton key={label} label={label} />
        ))}
      </div>
    </nav>
  );
}
