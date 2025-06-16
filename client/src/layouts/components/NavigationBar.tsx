import NavigationButton from "./NavigationButton";

type NavigationItem = {
  label: string;
  icon: string;
};

const navigationData: NavigationItem[] = [
  { label: "Dashboard", icon: "fa-compass" },
  { label: "Transactions", icon: "fa-coins" },
  { label: "Budgeting", icon: "fa-chart-pie" },
  { label: "Savings", icon: "fa-piggy-bank" },
];

export default function NavigationBar() {
  return (
    <nav
      className="flex flex-col items-center min-w-40 bg-[#fdfffe] rounded-tr-lg 
    rounded-br-lg shadow-2xl gap-3"
    >
      {/* logo  */}
      <h1 className="flex justify-center items-center min-h-15 ">
        CookieCoins
      </h1>

      {/* navigation buttons  */}
      <div className="flex flex-col max-w-[180px] gap-5 text-gray-600">
        {navigationData.map((data) => (
          <NavigationButton
            key={data.label}
            label={data.label}
            icon={data.icon}
          />
        ))}
      </div>
    </nav>
  );
}
