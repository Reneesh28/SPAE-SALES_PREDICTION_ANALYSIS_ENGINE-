import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ecommerce from "./pages/Ecommerce";

// Marketing
import Conversion from "./pages/marketing/Conversion";
import Advertising from "./pages/marketing/Advertising";

// Economics
import RetailSales from "./pages/economics/RetailSales";
import AdvancedRetailSales from "./pages/economics/AdvancedRetailSales";
import HTSRevision32 from "./pages/economics/HTSRevision32";
import IMF_IFS_ARS from "./pages/economics/IMF_IFS_ARS";

// Retail
import RetailSalesDataset from "./pages/retail/RetailSalesDataset";
import GroceryDataset from "./pages/retail/GroceryDataset";
import SupermarketDataset from "./pages/retail/SupermarketDataset";
import RossmannDataset from "./pages/retail/RossmannDataset";
import WalmartDataset from "./pages/retail/WalmartDataset";
import BigMartDataset from "./pages/retail/BigMartDataset";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Core */}
        <Route path="/" element={<Home />} />
        <Route path="/ecommerce" element={<Ecommerce />} />

        {/* Marketing */}
        <Route path="/marketing/conversion" element={<Conversion />} />
        <Route path="/marketing/advertising" element={<Advertising />} />

        {/* Economics */}
        <Route path="/economics/retail-sales" element={<RetailSales />} />
        <Route path="/economics/advanced-retail-sales" element={<AdvancedRetailSales />} />
        <Route path="/economics/hts-revision-32" element={<HTSRevision32 />} />
        <Route path="/economics/imf-ifs-ars" element={<IMF_IFS_ARS />} />

        {/* Retail */}
        <Route path="/retail/retail-sales" element={<RetailSalesDataset />} />
        <Route path="/retail/grocery" element={<GroceryDataset />} />
        <Route path="/retail/supermarket" element={<SupermarketDataset />} />
        <Route path="/retail/rossmann" element={<RossmannDataset />} />
        <Route path="/retail/walmart" element={<WalmartDataset />} />
        <Route path="/retail/bigmart" element={<BigMartDataset />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
