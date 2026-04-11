import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card'
import { getMessages } from '@lib/pg-client'
import { Mail, Phone, User, CalendarDays } from 'lucide-react'

interface Message {
  id: string
  nom: string
  email: string
  tel?: string | undefined
  objet: string
  content: string
  created_at: string
}

export default async function AdminMessages() {
  let messages: Message[] = []

  messages = await getMessages()

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          📩 Messages reçus
        </h1>
        <p className="text-muted-foreground mt-2">
          Consultez les messages envoyés via le formulaire de contact.
        </p>
      </div>

      {/* Empty state */}
      {messages.length === 0 ? (
        <div className="text-center py-20 border rounded-xl bg-muted/30">
          <p className="text-lg font-medium">Aucun message pour le moment</p>
          <p className="text-sm text-muted-foreground mt-2">
            Les nouveaux messages apparaîtront ici.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {messages.map((message, key) => (
            <Card
              key={key}
              className="shadow-sm hover:shadow-xl transition-all duration-300 border-muted hover:-translate-y-1"
            >
              <CardHeader className="space-y-3">
                
                {/* Nom */}
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  {message.nom}
                </CardTitle>

                {/* Email */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  {message.email}
                </div>

                {/* Téléphone */}
                {message.tel && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    {message.tel}
                  </div>
                )}

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {new Date(message.created_at).toLocaleString()}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                
                {/* Objet */}
                <div>
                  <span className="text-sm font-semibold text-primary">
                    Objet :
                  </span>
                  <p className="mt-1 font-medium">{message.objet}</p>
                </div>

                {/* Contenu */}
                <div className="bg-muted/40 p-4 rounded-lg text-sm leading-relaxed">
                  {message.content}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
