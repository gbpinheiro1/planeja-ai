import "react-loading-skeleton/dist/skeleton.css"

import Skeleton from "react-loading-skeleton"

import { useInsight } from "../../../hooks/useInsight"
import { useState } from "react"

import { Content } from "../insights/Content"
import { Error } from "../insights/Error"

import { Input } from "../../shared/Input"
import { Button } from "../../shared/Button"
import { Send } from "lucide-react"
import { ChatMessage } from "../../chat/ChatMessage"
import { chatPrompt } from "../../../data/chatPrompt"
import { callGeminiAPI } from "../../../services/aiChatService"

interface AIInsightCardProps {
  simulationId: string
}

interface ChatEntry {
  actor: "user" | "a.i"
  message: string
}

export function AIInsightsCard({ simulationId }: AIInsightCardProps) {
  const { insight, isLoading, error, fetchInsight } = useInsight(simulationId)
  console.log(insight)

  const [message, setMessage] = useState<string>("")
  const [chatHistory, setChatHistory] = useState<ChatEntry[]>([])

  return (
    <div className="bg-card order-2 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
      <div className="mb-3 flex items-center gap-1.5">
        <span>✨</span>
        <span className="text-primary text-xs font-semibold tracking-widest uppercase">
          Insight Financeiro Personalizado
        </span>
      </div>

      {isLoading && (
        <div className="flex">
          <Skeleton
            count={10.5}
            baseColor="var(--color-skeleton-base)"
            highlightColor="var(--color-skeleton-highlight)"
            className="mb-3 flex rounded-lg"
            containerClassName="flex-1"
            inline
          />
        </div>
      )}
      {!isLoading && error && (
        <Error
          simulationId={simulationId}
          message={error}
          onRetry={() => {
            fetchInsight(simulationId)
          }}
        />
      )}
      {!isLoading && insight && !error && (
        <Content
          insight={insight}
          className={chatHistory.length > 0 ? "mb-6" : ""}
        />
      )}
      {chatHistory &&
        chatHistory.map((cur, index) => (
          <ChatMessage message={cur.message} key={index} actor={cur.actor} />
        ))}
      <div className="flex justify-around items-center mt-5 h-9 md:h-10 gap-2 order-last">
        <Input
          className="flex-1 h-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="button"
          variant="primary"
          Icon={Send}
          IconSize="18"
          onClick={() => handleMessage()}
          className="justify-center rounded-xl aspect-square h-full p-0"
        />
      </div>
    </div>
  )

  async function handleMessage() {
    if (!message.trim()) return
    setChatHistory((prev) => [...prev, { message: message, actor: "user" }])
    setMessage("")
    if (insight) {
      const prompt = chatPrompt({ question: message, context: insight })
      const response = await callGeminiAPI(prompt)
      setChatHistory((prev) => [...prev, { message: response, actor: "a.i" }])
    }
  }
}
