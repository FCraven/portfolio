export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Francis Craven. All rights reserved.
      </div>
    </footer>
  );
}
