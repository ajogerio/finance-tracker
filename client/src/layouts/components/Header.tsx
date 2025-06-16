import cb1 from "../../assets/cb1.jpeg";

export default function Header() {
  return (
    <header className="flex justify-end items-center bg-gray-100 min-h-15 gap-3 pr-5">
      {/* profile picture */}
      <img
        src={cb1}
        alt="Profile picture"
        className="w-10 h-10 rounded-full object-cover"
      />

      {/* name and email  */}
      <div className="flex flex-col">
        <h1 className="font-bold text-xs">Christy Lagapa</h1>
        <p className="text-xs text-gray-600">thaliaty@gmail.com</p>
      </div>
      <i className="fa-solid fa-caret-down text-gray-600"></i>
    </header>
  );
}
