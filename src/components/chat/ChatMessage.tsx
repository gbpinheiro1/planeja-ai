import { MessageCircle } from "lucide-react"

type Actor = "user" | "a.i"

type ChatMessageProps = {
  message: string
  actor: Actor
}

export function ChatMessage({ actor, message }: ChatMessageProps) {
  const fontOpacity = actor === "user" ? "opacity-60" : "opacity-100"
  return (
    <div
      className={`flex flex-col mt-4 text-muted-foreground text-sm leading-relaxed ${fontOpacity}`}
    >
      <div className="flex items-center gap-1.5 font-semibold text-base mb-1">
        <MessageCircle size={22} className="text-primary" />
        <h1 className="pb-px">
          {actor === "user" ? "Você" : "Resposta da I.A"}
        </h1>
      </div>
      <p>{message}</p>
    </div>
  )
}
