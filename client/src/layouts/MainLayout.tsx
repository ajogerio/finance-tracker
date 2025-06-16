import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";

export default function MainLayout({ children }: Props) {
  return (
    <main className="flex">
      <NavigationBar />
      <Header />
    </main>
  );
}
