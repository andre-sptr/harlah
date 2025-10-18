import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Send, Upload, User, School, Phone, Mail, Paperclip, Loader2 } from 'lucide-react';

const toBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
});

export default function RegistrationForm() {
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby6VDsSFfr-dP_eKOTp-ro0Raom37pgu7gsZjg2kepoQPcRFzq9blZRibwrKSATn8WlUA/exec";

  const [formData, setFormData] = useState({
    fullName: '',
    school: '',
    competition: '',
    phone: '',
    email: '',
    notes: ''
  });

  // ===== KODE BARU 1: Tambahkan state dan ref untuk file =====
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // ==========================================================

  const competitions = [
    'Lomba Karya Tulis Ilmiah',
    'Lomba Pidato Bahasa Arab',
    'Olimpiade Matematika',
    'Lomba Kaligrafi',
    'Debat Bahasa Inggris',
    'Lomba Nasyid'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // ===== KODE BARU 2: Tambahkan fungsi untuk menangani file =====
  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };
  // =============================================================

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.school || !formData.competition || !formData.phone || !formData.email) {
      toast.error('Mohon lengkapi semua field yang wajib diisi');
      return;
    }

    setIsLoading(true); // Mulai loading

    try {
      let payload: any = { ...formData };

      if (selectedFile) {
        const fileData = await toBase64(selectedFile);
        payload.fileData = fileData;
        payload.fileName = selectedFile.name;
        payload.fileType = selectedFile.type;
      }

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === "success") {
        toast.success('Pendaftaran berhasil! Data Anda sudah terkirim.');
        setFormData({ fullName: '', school: '', competition: '', phone: '', email: '', notes: '' });
        setSelectedFile(null);
      } else {
        throw new Error(result.message || 'Terjadi kesalahan di server.');
      }
    } catch (error) {
      toast.error(`Gagal mengirim pendaftaran: ${error instanceof Error ? error.message : 'Kesalahan tidak diketahui'}`);
    } finally {
      setIsLoading(false); // Selesai loading, baik berhasil maupun gagal
    }
  };

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Formulir <span className="text-yellow-500">Pendaftaran</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Daftarkan diri Anda sekarang dan jadilah bagian dari perayaan bersejarah ini
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-yellow-500"></div>
            <CardHeader className="bg-gradient-to-r from-blue-50 to-yellow-50">
              <CardTitle className="text-2xl text-blue-900 text-center flex items-center justify-center gap-3">
                <Send className="w-6 h-6 text-yellow-500" />
                Form Pendaftaran Lomba
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-blue-900 font-medium flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nama Lengkap *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="Masukkan nama lengkap"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="school" className="text-blue-900 font-medium flex items-center gap-2">
                      <School className="w-4 h-4" />
                      Asal Sekolah *
                    </Label>
                    <Input
                      id="school"
                      value={formData.school}
                      onChange={(e) => handleInputChange('school', e.target.value)}
                      placeholder="Nama sekolah/madrasah"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="competition" className="text-blue-900 font-medium">
                    Kategori Lomba *
                  </Label>
                  <Select value={formData.competition} onValueChange={(value) => handleInputChange('competition', value)}>
                    <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Pilih kategori lomba" />
                    </SelectTrigger>
                    <SelectContent>
                      {competitions.map((comp) => (
                        <SelectItem key={comp} value={comp}>{comp}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-blue-900 font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Nomor HP *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-900 font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="email@gmail.com"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-blue-900 font-medium">
                    Catatan Tambahan
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Pesan atau pertanyaan tambahan"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
                  />
                </div>

                {/* ===== KODE BARU 3: Ganti div upload file lama dengan ini ===== */}
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-300 cursor-pointer"
                  onClick={handleFileButtonClick}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png" 
                  />
                  {!selectedFile ? (
                    <>
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-2">Upload Berkas Pendukung (Opsional)</p>
                      <p className="text-sm text-gray-500">Format: PDF, JPG, PNG (Max 5MB)</p>
                      <Button type="button" variant="outline" className="mt-3 pointer-events-none">
                        Pilih File
                      </Button>
                    </>
                  ) : (
                    <>
                      <Paperclip className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="text-gray-800 mb-2 font-semibold">File Terpilih:</p>
                      <p className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">{selectedFile.name}</p>
                      <Button type="button" variant="outline" className="mt-3">
                        Ganti File
                      </Button>
                    </>
                  )}
                </div>
                {/* ================================================================ */}

                <Button 
                  type="submit" 
                  disabled={isLoading} // Tombol tidak bisa diklik saat loading
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Kirim Pendaftaran
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Field wajib diisi. Data Anda akan dijaga kerahasiaannya.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}