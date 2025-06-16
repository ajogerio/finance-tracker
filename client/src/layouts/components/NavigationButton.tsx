type NavigationButtonProps = {
  label: string;
};

export default function NavigationButton({ label }: NavigationButtonProps) {
  return (
    <button className="flex justify-center items-center gap-1">
      <i className="fa-regular fa-compass"></i>
      <p className="text-xs">{label}</p>
    </button>
  );
}
