import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Wrench, 
  ShoppingCart, 
  ClipboardList, 
  AlertTriangle,
  Users
} from 'lucide-react';

// Komponen Kecil untuk Kartu Statistik
const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className={`bg-white p-6 rounded-xl shadow-sm border-b-4 ${color}`}>
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-500 font-bold uppercase">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg bg-gray-50 text-gray-600`}>
        <Icon size={24} />
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  // Mock data berdasarkan LServisProses.rpt
  const [services] = useState([
    { id: 'SRV-001', customer: 'Budi Santoso', device: 'Laptop ASUS', status: 'Proses', technician: 'Anto' },
    { id: 'SRV-002', customer: 'Siska Wijaya', device: 'Printer Epson', status: 'Menunggu Part', technician: 'Budi' },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-slate-200 p-6 flex flex-col">
        <h1 className="text-xl font-bold mb-10 text-white flex items-center gap-2">
          <Wrench className="text-blue-400" /> RETAIL SERVIS
        </h1>
        <nav className="space-y-4 flex-1">
          <a href="#" className="flex items-center gap-3 p-3 bg-blue-600 text-white rounded-lg">
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition">
            <Wrench size={20} /> Antrian Servis
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition">
            <ShoppingCart size={20} /> Kasir Penjualan
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition">
            <ClipboardList size={20} /> Laporan Stok
          </a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Overview Bisnis</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            + Transaksi Baru
          </button>
        </header>

        {/* STATS (Data dari Laporan Bulanan) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Servis Aktif" value="14 Unit" icon={Wrench} color="border-blue-500" />
          <StatCard title="Pelanggan Baru" value="+24" icon={Users} color="border-purple-500" />
          <StatCard title="Pendapatan Jasa" value="Rp 2.4jt" icon={ShoppingCart} color="border-green-500" />
          <StatCard title="Stok Kritis" value="5 Item" icon={AlertTriangle} color="border-red-500" />
        </div>

        {/* TABEL SERVIS (Data dari LServisProses.rpt) */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-700">Pekerjaan Teknisi Terkini</h3>
          </div>
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-sm uppercase">
              <tr>
                <th className="p-4">ID Servis</th>
                <th className="p-4">Pelanggan</th>
                <th className="p-4">Unit</th>
                <th className="p-4">Teknisi</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {services.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="p-4 font-medium text-blue-600 uppercase">{item.id}</td>
                  <td className="p-4">{item.customer}</td>
                  <td className="p-4 text-sm text-gray-600">{item.device}</td>
                  <td className="p-4 text-sm font-semibold">{item.technician}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium 
                      ${item.status === 'Proses' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;