import React, { useState } from "react";
import {
  PawPrint,
  FileText,
  Search,
  Brain,
  DollarSign,
  Scale,
  Settings,
  Menu,
  X,
  Maximize2,
  Minus,
  Home,
  ShoppingCart,
  Activity,
} from "lucide-react";

// Placeholder modules
const AnimalWikiModule = () => (
  <div className="p-6 bg-white rounded-xl shadow-sm">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Dieren Wiki</h2>
    <p className="text-gray-600">Hier komt informatie over dieren.</p>
  </div>
);

const OrderModule = () => (
  <div className="p-6 bg-white rounded-xl shadow-sm">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Bestellingen</h2>
    <p className="text-gray-600">Hier komt informatie over bestellingen.</p>
  </div>
);

const WindowsApp = () => {
  const [activeModule, setActiveModule] = useState("home");
  const [isMaximized, setIsMaximized] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const modules = [
    { id: "home", name: "Dashboard", icon: Home },
    { id: "animals", name: "Dieren Wiki", icon: PawPrint },
    { id: "orders", name: "Bestellingen", icon: ShoppingCart },
    { id: "documents", name: "Documenten", icon: FileText },
    { id: "finance", name: "Financieel", icon: DollarSign },
    { id: "legal", name: "Juridisch", icon: Scale },
    { id: "analytics", name: "Analyses", icon: Activity },
  ];

  const renderActiveModule = () => {
    switch (activeModule) {
      case "animals":
        return <AnimalWikiModule />;
      case "orders":
        return <OrderModule />;
      default:
        return (
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {modules.find((m) => m.id === activeModule)?.name}
            </h2>
            <p className="text-gray-600">Module inhoud komt hier</p>
          </div>
        );
    }
  };

  return (
    <div
      className={`h-screen flex flex-col bg-gray-100 ${
        isMaximized ? "rounded-none" : "rounded-lg"
      } overflow-hidden shadow-xl`}
    >
      {/* Windows-style titlebar */}
      <div className="bg-gray-800 text-white flex items-center justify-between px-2 h-8">
        <div className="flex items-center space-x-2">
          <PawPrint className="w-4 h-4" />
          <span className="text-sm">Windows Smart Animal System</span>
        </div>
        <div className="flex">
          <button className="px-3 py-1 hover:bg-gray-700">
            <Minus className="w-4 h-4" />
          </button>
          <button
            className="px-3 py-1 hover:bg-gray-700"
            onClick={() => setIsMaximized(!isMaximized)}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <button className="px-3 py-1 hover:bg-red-600">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`$${
            sidebarOpen ? "w-64" : "w-16"
          } bg-white border-r transition-all duration-300`}
        >
          <div className="p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="space-y-1 px-2">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`w-full flex items-center px-3 py-2 rounded-lg ${
                  activeModule === module.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <module.icon className="w-5 h-5" />
                {sidebarOpen && <span className="ml-3">{module.name}</span>}
              </button>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <button className="w-full flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Settings className="w-5 h-5" />
              {sidebarOpen && <span className="ml-3">Instellingen</span>}
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Header with search */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {modules
                    .find((m) => m.id === activeModule)
                    ?.icon({
                      className: "w-6 h-6 text-blue-600 mr-3",
                    })}
                  <h1 className="text-2xl font-bold text-gray-800">
                    {modules.find((m) => m.id === activeModule)?.name}
                  </h1>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Zoeken..."
                      className="pl-10 pr-4 py-2 border rounded-lg w-64"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Active module content */}
            {renderActiveModule()}
          </div>
        </div>

        {/* Right sidebar for AI insights */}
        <div className="w-80 bg-gray-50 p-6 border-l">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-purple-600" />
            AI Inzichten
          </h2>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-800 mb-2">
                Slimme Aanbevelingen
              </h3>
              <p className="text-sm text-gray-600">
                AI analyseert uw data en geeft gepersonaliseerde suggesties
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-800 mb-2">Systeem Status</h3>
              <div className="flex items-center text-sm text-green-600">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                Alle systemen actief
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowsApp;
