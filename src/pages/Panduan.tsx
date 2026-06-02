import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const panduanList = [
  { no: 1, nama: "Panduan Pengajuan Subdomain dan Penetration Test", unduh: "", lihat: "", ukuran: "456 KB" },
  { no: 2, nama: "Panduan Penanganan Insiden Web Defacement", unduh: "https://drive.google.com/file/d/1oSfKueGyVSsU7AROZkgxerQ_oX2DpHHj/view?usp=sharing", lihat: "https://drive.google.com/file/d/1oSfKueGyVSsU7AROZkgxerQ_oX2DpHHj/view?usp=sharing", ukuran: "1 MB" },
  { no: 3, nama: "Panduan Penanganan Insiden Serangan DDoS", unduh: "https://drive.google.com/file/d/10yz6hZQY7lxyWxMOKpnhhPmdJWtTqJnK/view?usp=sharing", lihat: "https://drive.google.com/file/d/10yz6hZQY7lxyWxMOKpnhhPmdJWtTqJnK/view?usp=sharing", ukuran: "857 KB" },
  { no: 4, nama: "Panduan Penanganan Insiden Malware", unduh: "https://drive.google.com/file/d/1QJjTfGN-voJCG9NZcPxhPw86McT-jFrw/view?usp=sharing", lihat: "https://drive.google.com/file/d/1QJjTfGN-voJCG9NZcPxhPw86McT-jFrw/view?usp=sharing", ukuran: "665 KB" },
  { no: 5, nama: "Panduan Penanganan Insiden Ransomware", unduh: "https://drive.google.com/file/d/1GOMiowM1PjeCg-nZ91d44GNd33LEcigE/view?usp=drive_link", lihat: "https://drive.google.com/file/d/1GOMiowM1PjeCg-nZ91d44GNd33LEcigE/view?usp=drive_link", ukuran: "969 KB" },
  { no: 6, nama: "Panduan Penanganan Insiden Serangan Phishing", unduh: "https://drive.google.com/file/d/16NfoUNNM7P1AWBjC0WnYS9zL-tpuzyyV/view?usp=drive_link", lihat: "https://drive.google.com/file/d/16NfoUNNM7P1AWBjC0WnYS9zL-tpuzyyV/view?usp=drive_link", ukuran: "946 KB" },
  { no: 7, nama: "Panduan Penanganan Insiden Serangan SQL Injection", unduh: "https://drive.google.com/file/d/1rhGrJ7c48wOgqggwa9empFY9cAAHUhTp/view?usp=drive_link", lihat: "https://drive.google.com/file/d/1rhGrJ7c48wOgqggwa9empFY9cAAHUhTp/view?usp=drive_link", ukuran: "811 KB" },
  { no: 8, nama: "Panduan Penanganan Insiden Web Defacement Judi Online", unduh: "https://drive.google.com/file/d/1lkygSR8JT-_XyWUvT4HxLfFv63D8RGX8/view?usp=drive_link", lihat: "https://drive.google.com/file/d/1lkygSR8JT-_XyWUvT4HxLfFv63D8RGX8/view?usp=drive_link", ukuran: "17 MB" },
  { no: 9, nama: "Panduan Pintar Keamanan Siber", unduh: "https://drive.google.com/file/d/1xNflxK0XH0Qld-VnQFqHbl7VaHNjNgiL/view?usp=drive_link", lihat: "https://drive.google.com/file/d/1xNflxK0XH0Qld-VnQFqHbl7VaHNjNgiL/view?usp=drive_link", ukuran: "7 MB" },
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
                    {p.unduh ? (
                      <a href={p.unduh} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
                        <Download className="h-4 w-4" /> Unduh
                      </a>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {p.lihat ? (
                      <a href={p.lihat} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                        <Eye className="h-4 w-4" /> Lihat
                      </a>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
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
                <Button asChild={!!p.unduh} disabled={!p.unduh} size="sm" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 flex-1">
                  {p.unduh ? (
                    <a href={p.unduh} target="_blank" rel="noopener noreferrer"><Download className="h-4 w-4 mr-1" /> Unduh</a>
                  ) : (
                    <span><Download className="h-4 w-4 mr-1" /> Unduh</span>
                  )}
                </Button>
                <Button asChild={!!p.lihat} disabled={!p.lihat} size="sm" variant="outline" className="flex-1">
                  {p.lihat ? (
                    <a href={p.lihat} target="_blank" rel="noopener noreferrer"><Eye className="h-4 w-4 mr-1" /> Lihat</a>
                  ) : (
                    <span><Eye className="h-4 w-4 mr-1" /> Lihat</span>
                  )}
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
