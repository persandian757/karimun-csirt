import { Shield, Mail, Phone, MapPin } from "lucide-react";

const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7!2d103.37304240502793!3d1.044087365595297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDInMzguNyJOIDEwM8KwMjInMjMuMCJF!5e0!3m2!1sid!2sid!4v1";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-accent" />
              <span className="text-lg font-bold">KARIMUN CSIRT</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Tim Tanggap Insiden Siber Kabupaten Karimun. Melindungi ruang siber pemerintah daerah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Beranda", "Profil", "Artikel", "RFC2350", "Layanan", "Panduan"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-accent transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Kontak</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                csirt[@]karimunkab.go.id
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                (0777) 123-4567
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>
                  Dinas Komunikasi Informasi Statistik dan Persandian<br />
                  Jalan Jenderal Sudirman Kelurahan Darusalam Kecamatan Meral Barat<br />
                  Kabupaten Karimun Provinsi Kepulauan Riau Kode pos 29622<br />
                  website: https://diskominfostaper.karimunkab.go.id/<br />
                  email csirt[@]karimunkab.go.id nomor telp 08123456789
                </span>
              </li>
            </ul>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Lokasi Kami</h3>
            <div className="rounded-lg overflow-hidden border border-primary-foreground/20 shadow-lg">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Kantor Diskominfostaper Kabupaten Karimun"
              />
            </div>
            <p className="text-xs text-primary-foreground/60 mt-2 flex items-start gap-1">
              <MapPin className="h-3 w-3 text-accent mt-0.5 shrink-0" />
              Kantor Diskominfostaper Kabupaten Karimun
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
          © 2026 KARIMUN-CSIRT. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
