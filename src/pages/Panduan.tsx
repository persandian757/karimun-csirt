import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const panduanList = [
  { no: 1, nama: "Panduan Pengajuan Subdomain dan Penetration Test", unduh: "#", lihat: "#", ukuran: "456 KB" },
  { no: 2, nama: "Panduan Penanganan Insiden Web Defacement", unduh: "#", lihat: "#", ukuran: "1 MB" },
  { no: 3, nama: "Panduan Penanganan Insiden Serangan DDoS", unduh: "#", lihat: "#", ukuran: "857 KB" },
  { no: 4, nama: "Panduan Penanganan Insiden Malware", unduh: "#", lihat: "#", ukuran: "665 KB" },
  { no: 5, nama: "Panduan Penanganan Insiden Ransomware", unduh: "#", lihat: "#", ukuran: "969 KB" },
  { no: 6, nama: "Panduan Penanganan Insiden Serangan Phishing", unduh: "#", lihat: "#", ukuran: "946 KB" },
  { no: 7, nama: "Panduan Penanganan Insiden Serangan SQL Injection", unduh: "#", lihat: "#", ukuran: "811 KB" },
  { no: 8, nama: "Panduan Penanganan Insiden Web Defacement Judi Online", unduh: "#", lihat: "#", ukuran: "17 MB" },
  { no: 9, nama: "Panduan Pintar Keamanan Siber", unduh: "#", lihat: "#", ukuran: "7 MB" },
];

const Panduan = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 pt-28 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="h-8 w-8 text-accent" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary">PANDUAN</h1>
        </div>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Berikut adalah dokumen panduan resmi KARIMUN-CSIRT untuk membantu penanganan dan pencegahan insiden keamanan siber.
        </p>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-lg border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-4 py-3 text-left w-16">No</th>
                <th className="px-4 py-3 text-left">Nama Dokumen</th>
                <th className="px-4 py-3 text-center w-32">Unduh</th>
                <th className="px-4 py-3 text-center w-32">Lihat</th>
                <th className="px-4 py-3 text-center w-28">Ukuran</th>
              </tr>
            </thead>
            <tbody className="bg-card">
              {panduanList.map((p) => (
                <tr key={p.no} className="border-t border-border hover:bg-muted/40 transition-colors">
                  <td className="px-4 py-3 font-medium">{p.no}.</td>
                  <td className="px-4 py-3">{p.nama}</td>
                  <td className="px-4 py-3 text-center">
                    <a href={p.unduh} className="inline-flex items-center gap-1 text-accent hover:underline">
                      <Download className="h-4 w-4" /> Unduh
                    </a>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <a href={p.lihat} className="inline-flex items-center gap-1 text-primary hover:underline">
                      <Eye className="h-4 w-4" /> Lihat
                    </a>
                  </td>
                  <td className="px-4 py-3 text-center text-muted-foreground">{p.ukuran}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {panduanList.map((p) => (
            <div key={p.no} className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-accent font-bold">{p.no}.</span>
                <h3 className="font-semibold text-primary">{p.nama}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Ukuran: {p.ukuran}</p>
              <div className="flex gap-2">
                <Button asChild size="sm" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 flex-1">
                  <a href={p.unduh}><Download className="h-4 w-4 mr-1" /> Unduh</a>
                </Button>
                <Button asChild size="sm" variant="outline" className="flex-1">
                  <a href={p.lihat}><Eye className="h-4 w-4 mr-1" /> Lihat</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Panduan;
