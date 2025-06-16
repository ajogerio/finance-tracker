type NavigationButtonProps = {
  label: string;
  icon: string;
};

export default function NavigationButton({
  label,
  icon,
}: NavigationButtonProps) {
  return (
    <button className="flex items-center gap-4 w-full text-left">
      <i className={`fa-solid ${icon}`}></i>
      <p className="text-xs">{label}</p>
    </button>
  );
}
