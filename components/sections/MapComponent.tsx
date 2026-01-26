"use client"

import { useEffect, useRef } from "react"

// Google Maps を iframe で埋め込むコンポーネント
// Vercel best practice: クライアントコンポーネントとして動的インポート
export default function MapComponent() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683727!2d139.70225841525848!3d35.65858048019491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b9a4b8b8b8b%3A0x5b8b8b8b8b8b8b8b!2z44CSMTUwLTAwMDEg5p2x5Lqs6YO95riL6LC35Yy656We5a6u5YmN77yT5LiB55uu77yV4oiS77yW!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="La Baie 店舗地図"
      />
    </div>
  )
}
