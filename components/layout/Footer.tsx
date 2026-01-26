import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { messages } from "@/lib/messages"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 店舗情報 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{messages.footer.storeInfo.title}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <p>
                  {messages.info.address.postal}<br />
                  {messages.info.address.full}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 shrink-0" />
                <p>{messages.info.phone}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 shrink-0" />
                <p>{messages.info.email}</p>
              </div>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{messages.footer.menu.title}</h3>
            <nav className="space-y-2">
              {messages.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 営業時間 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{messages.footer.hours.title}</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>ランチ: {messages.info.hours.lunch}</p>
              <p>ディナー: {messages.info.hours.dinner}</p>
              <p className="mt-4">{messages.pages.about.closedLabel}: {messages.info.closed}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>{messages.footer.copyright(new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  )
}
