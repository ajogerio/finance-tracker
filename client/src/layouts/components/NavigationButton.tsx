type NavigationButtonProps = {
  label: string;
};

export default function NavigationButton({ label }: NavigationButtonProps) {
  return (
    <button className="flex items-center gap-4 w-full text-left">
      <i className="fa-regular fa-compass"></i>
      <p className="text-xs">{label}</p>
    </button>
  );
}
