import { MessageCircle } from "lucide-react"

export default function ChatTyping() {
  return (
    <div className="flex flex-col mt-4 text-muted-foreground text-sm leading-relaxed">
      <hr className="border-none h-px bg-border mt-2 mb-6" />
      <div className="flex items-center gap-1.5 font-semibold text-base mb-1">
        <MessageCircle size={22} className="text-primary" />
        <h1 className="pb-px">Resposta da I.A</h1>
      </div>
      <div className="flex gap-1 items-center h-5">
        <span className="w-1 h-1 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]" />
        <span className="w-1 h-1 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]" />
        <span className="w-1 h-1 rounded-full bg-muted-foreground animate-bounce" />
      </div>
    </div>
  )
}
