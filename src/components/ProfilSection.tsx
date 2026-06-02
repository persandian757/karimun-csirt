import { Shield, Target, Users, Globe } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Perlindungan Proaktif",
    description: "Mengawasi dan mengamankan infrastruktur digital 24/7.",
  },
  {
    icon: Target,
    title: "Respons Cepat",
    description: "Menangani insiden siber dengan cepat dan terukur.",
  },
  {
    icon: Users,
    title: "Tim Berpengalaman",
    description: "Profesional tersertifikasi di bidang keamanan siber.",
  },
  {
    icon: Globe,
    title: "Jangkauan Daerah",
    description: "Melayani seluruh OPD di lingkungan Pemkab Karimun.",
  },
];

const ProfilSection = () => {
  return (
    <section id="profil" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Profil <span className="text-accent">KARIMUN-CSIRT</span>
          </h2>

          <div className="bg-card rounded-xl border border-border p-8 md:p-10 shadow-sm">
            <div className="prose prose-neutral max-w-none text-muted-foreground leading-relaxed text-justify space-y-4">
              <p>
                <strong className="text-foreground">Tim Tanggap Insiden Siber Kabupaten Karimun (KARIMUN-CSIRT)</strong> merupakan unit khusus yang dibentuk oleh Pemerintah Kabupaten Karimun untuk memberikan layanan keamanan siber yang komprehensif di lingkungan pemerintah daerah. Didirikan atas dasar kebutuhan akan perlindungan infrastruktur teknologi informasi dan komunikasi yang semakin kompleks, tim ini berperan sebagai garda terdepan dalam menghadapi ancaman siber yang dapat mengganggu pelayanan publik dan merusak kepercayaan masyarakat terhadap institusi pemerintahan.
              </p>
              <p>
                KARIMUN-CSIRT memiliki visi untuk menciptakan lingkungan siber yang aman, terpercaya, dan responsif di seluruh Organisasi Perangkat Daerah (OPD) Kabupaten Karimun. Dengan dukungan sumber daya manusia yang berpengalaman dan tersertifikasi di bidang keamanan informasi, tim ini menyediakan berbagai layanan strategis mulai dari pemantauan ancaman secara proaktif, penanganan insiden keamanan siber, konsultasi keamanan informasi, hingga edukasi dan penyadaran kepada seluruh pegawai pemerintah daerah. Pendekatan yang diambil tidak hanya reaktif terhadap insiden yang terjadi, tetapi juga preventif melalui audit keamanan berkala dan pengembangan kebijakan tata kelola keamanan informasi.
              </p>
              <p>
                Sebagai bagian integral dari ekosistem keamanan siber nasional, KARIMUN-CSIRT berkolaborasi aktif dengan CSIRT-ID, Badan Siber dan Sandi Negara (BSSN), serta komunitas keamanan siber di tingkat regional. Komitmen tim ini adalah memastikan setiap layanan digital pemerintah daerah, mulai dari sistem pelayanan administrasi hingga infrastruktur kritis, beroperasi dalam kondisi yang aman dan andal. Melalui inovasi berkelanjutan dan peningkatan kapasitas secara konsisten, KARIMUN-CSIRT bertekad menjadikan Kabupaten Karimun sebagai referensi implementasi keamanan siber di tingkat pemerintah daerah di Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 pt-8 border-t border-border">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilSection;
