import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 店舗情報 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">店舗情報</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <p>〒000-0000<br />東京都渋谷区○○○1-2-3</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 shrink-0" />
                <p>03-1234-5678</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 shrink-0" />
                <p>info@la-baie.com</p>
              </div>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="text-lg font-semibold mb-4">メニュー</h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ホーム
              </Link>
              <Link
                href="/course"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                コース・料理
              </Link>
              <Link
                href="/wedding"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ウェディング
              </Link>
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                店舗情報・アクセス
              </Link>
            </nav>
          </div>

          {/* 営業時間 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">営業時間</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>ランチ: 11:30 - 15:00 (L.O. 14:00)</p>
              <p>ディナー: 17:30 - 22:00 (L.O. 21:00)</p>
              <p className="mt-4">定休日: 月曜日</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} La Baie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
