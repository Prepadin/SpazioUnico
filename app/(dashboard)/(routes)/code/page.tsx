import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contattaci</h1>
      <Card>
        <CardHeader>
          <CardTitle>Mettiti in contatto</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-gray-400" />
            <div>
              <h3 className="text-lg font-semibold">Indirizzo e-mail</h3>
              <p className="text-gray-600">info@spaziounico.com</p>
            </div>
          </div>
          {/* <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-gray-400" />
            <div>
              <h3 className="text-lg font-semibold">Telefon</h3>
              <p className="text-gray-600">+386-069-403-021</p>
            </div>
          </div> */}
          {/* <div className="flex items-center space-x-4">
            <MapPin className="h-6 w-6 text-gray-400" />
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-600">123 Business Street, Suite 100</p>
              <p className="text-gray-600">Cityville, State 12345</p>
            </div>
          </div> */}
        </CardContent>
      </Card>
    </div>
  )
}